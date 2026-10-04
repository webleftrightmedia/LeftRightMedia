import os
from PIL import Image

asset_dir = "d:/LeftRightMedia/client/src/assets"
images = [
    'hero-cafe.png',
    'panel-retail.png',
    'panel-commercial.png',
    'panel-event.png',
    'panel-taxi.png',
    'panel-public-space.png'
]

for img_name in images:
    path = os.path.join(asset_dir, img_name)
    if not os.path.exists(path): continue
    
    try:
        img = Image.open(path).convert("RGB")
    except Exception as e:
        print(f"Failed to open {img_name}: {e}")
        continue
        
    width, height = img.size
    min_x, min_y = width, height
    max_x, max_y = 0, 0
    
    left_edge_top, left_edge_bottom = height, 0
    right_edge_top, right_edge_bottom = height, 0
    
    pixels = img.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            # Orange detection: LRM old ads are bright orange
            # Typically R > 200, G < 140, B < 80, but let's be safe
            if r > 180 and g < 140 and b < 80 and r > g * 1.5:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
                
                # For perspective
                if x < width / 2:
                    if y < left_edge_top: left_edge_top = y
                    if y > left_edge_bottom: left_edge_bottom = y
                else:
                    if y < right_edge_top: right_edge_top = y
                    if y > right_edge_bottom: right_edge_bottom = y

    if min_x > max_x or min_y > max_y:
        print(f"{img_name}: NO ORANGE DETECTED")
        continue
        
    p_top = round(min_y / height * 100, 1)
    p_left = round(min_x / width * 100, 1)
    p_width = round((max_x - min_x) / width * 100, 1)
    p_height = round((max_y - min_y) / height * 100, 1)
    
    # Optional perspective inference
    left_h = left_edge_bottom - left_edge_top
    right_h = right_edge_bottom - right_edge_top
    perspective = ""
    if left_h > right_h + 10:
        perspective = " perspective(400px) rotateY(15deg)"
    elif right_h > left_h + 10:
        perspective = " perspective(400px) rotateY(-15deg)"
    elif left_h > right_h + 3:
        perspective = " perspective(400px) rotateY(5deg)"
    elif right_h > left_h + 3:
        perspective = " perspective(400px) rotateY(-5deg)"
        
    print(f"--- {img_name} ---")
    print(f"top: \"{p_top}%\", left: \"{p_left}%\", width: \"{p_width}%\", height: \"{p_height}%\", transform: \"{perspective.strip()}\"")
