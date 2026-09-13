import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { Screen } from '../src/models/Screen.js';
import { Lead } from '../src/models/Lead.js';
import { Campaign } from '../src/models/Campaign.js';
import { Playlist } from '../src/models/Playlist.js';

// Load env vars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const mockScreens = [
  { venueName: 'Patel Café & Restaurant', venueType: 'Café', city: 'Nadiad', status: 'live' },
  { venueName: 'Surat Central Mall', venueType: 'Mall Kiosk', city: 'Surat', status: 'live' },
  { venueName: 'City Pharmacy', venueType: 'Retail', city: 'Nadiad', status: 'live' },
  { venueName: 'Galaxy Gym', venueType: 'Fitness', city: 'Surat', status: 'pending' },
  { venueName: 'Sardar Vallabhbhai Market', venueType: 'Outdoor', city: 'Surat', status: 'offline' },
  { venueName: 'Nadiad Bus Station', venueType: 'Transit', city: 'Nadiad', status: 'live' },
];

const mockLeads = [
  { type: 'host', name: 'Rajesh Patel', businessName: 'Patel Café & Restaurant', city: 'Nadiad', phone: '9876543210', email: 'rajesh@example.com', screenCount: 2, status: 'new' },
  { type: 'advertiser', name: 'Sneha Desai', businessName: 'Desai Jewelers', city: 'Surat', phone: '9123456789', email: 'sneha@example.com', budgetRange: '₹15,000+', status: 'contacted' },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing
    await Screen.deleteMany({});
    await Lead.deleteMany({});
    await Campaign.deleteMany({});
    await Playlist.deleteMany({});
    console.log('Data cleared!');

    // Seed screens
    await Screen.insertMany(mockScreens);
    console.log(`Seeded ${mockScreens.length} screens.`);

    // Seed leads
    await Lead.insertMany(mockLeads);
    console.log(`Seeded ${mockLeads.length} leads.`);

    console.log('Data seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
