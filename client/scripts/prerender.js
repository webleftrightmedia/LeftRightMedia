import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

const routes = [
  {
    path: 'advertise',
    title: 'Digital Screen Advertising for Brands & Local Businesses | LeftRightMedia',
    description: 'Launch targeted DOOH digital screen campaigns across Gujarat. Put your brand in high-footfall cafes, gyms, and commercial spaces with zero long-term lock-in.',
    canonical: 'https://leftrightmedia.in/advertise',
    heading: 'Put Your Brand Where Your Audience Already Is',
    subheading: 'Build advertising campaigns around locations, audiences, and moments across connected screens in Gujarat.',
  },
  {
    path: 'screen-partners',
    title: 'Monetize Your Smart TV Screen | Partner Program | LeftRightMedia',
    description: 'Turn your café, gym, or commercial TV into passive monthly revenue with LeftRightMedia. 55% host menu time, 45% ad split. Zero extra hardware needed.',
    canonical: 'https://leftrightmedia.in/screen-partners',
    heading: 'Have a Screen? Put It to Work',
    subheading: 'Turn your screen into advertising inventory. Monetize footfall attention with zero upfront hardware costs.',
  },
  {
    path: 'events',
    title: 'Digital Signage & Screen Networks for Events & Expos | LeftRightMedia',
    description: 'Deploy dynamic digital screen signage, wayfinding, and live sponsor loops across exhibitions, trade expos, and college festivals in Gujarat.',
    canonical: 'https://leftrightmedia.in/events',
    heading: 'Digital Signage & Dynamic Networks for Events',
    subheading: 'Promote exhibitors, broadcast live announcements, and navigate visitors with responsive event screens.',
  },
  {
    path: 'about',
    title: 'About LeftRightMedia — Physical-World Advertising Network | LeftRightMedia',
    description: 'Learn how LeftRightMedia is democratizing connected digital out-of-home (DOOH) advertising across Gujarat and India, turning idle screens into active inventory.',
    canonical: 'https://leftrightmedia.in/about',
    heading: 'Building the Media Network Around the Physical World',
    subheading: 'Connecting screens across cafes, retail, and commercial spaces into an accessible DOOH network.',
  },
  {
    path: 'contact',
    title: 'Contact LeftRightMedia — Start Advertising or List a Screen | LeftRightMedia',
    description: 'Get in touch with LeftRightMedia. Launch a hyper-local screen advertising campaign, apply as a screen host, or deploy digital signage for your event.',
    canonical: 'https://leftrightmedia.in/contact',
    heading: "Let's Build Something That Gets Seen",
    subheading: 'Reach out to launch a campaign, host a screen, or explore physical-digital advertising partnerships.',
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | LeftRightMedia',
    description: 'LeftRightMedia Privacy Policy. We reject facial recognition cameras and invasive tracking to protect public consumer privacy.',
    canonical: 'https://leftrightmedia.in/privacy',
    heading: 'Privacy Policy',
    subheading: 'Our commitment to public privacy and transparent, non-invasive digital signage advertising.',
  },
  {
    path: 'terms',
    title: 'Terms of Service | LeftRightMedia',
    description: 'LeftRightMedia Terms of Service governing advertising campaigns, screen partner agreements, and media distribution.',
    canonical: 'https://leftrightmedia.in/terms',
    heading: 'Terms of Service',
    subheading: 'General terms and conditions for advertisers, screen partners, and venue hosts.',
  },
];

console.log('Generating pre-rendered static HTML routes for SEO...');

for (const route of routes) {
  const targetDir = path.join(distDir, route.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace OG / Twitter Titles & Descriptions
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );
  html = html.replace(
    /<meta property="twitter:title" content=".*?" \/>/i,
    `<meta property="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="twitter:description" content=".*?" \/>/i,
    `<meta property="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="twitter:url" content=".*?" \/>/i,
    `<meta property="twitter:url" content="${route.canonical}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/i,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Add noscript / semantic crawler fallback inside #root for search engines without JS
  const crawlerFallback = `
    <div id="root">
      <noscript>
        <header style="padding:2rem;text-align:center;font-family:sans-serif;">
          <h1>${route.heading}</h1>
          <p>${route.subheading}</p>
          <a href="https://leftrightmedia.in/contact" style="color:#FF4800;font-weight:bold;">Contact LeftRightMedia</a>
        </header>
      </noscript>
    </div>
  `.trim();

  html = html.replace(/<div id="root"><\/div>/, crawlerFallback);

  const outFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(outFile, html, 'utf-8');
  console.log(`✓ Pre-rendered: /${route.path}/index.html`);
}

console.log('All routes pre-rendered successfully for search engines & social crawlers!');
