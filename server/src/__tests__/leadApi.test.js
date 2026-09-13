import request from 'supertest';
import { jest } from '@jest/globals';
import app from '../server.js';
import { Lead } from '../models/Lead.js';

// Mock the Mongoose model to bypass actual database connections
jest.mock('../models/Lead.js', () => {
  return {
    Lead: {
      create: jest.fn(),
      deleteMany: jest.fn(),
    }
  };
});

describe('Lead API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a valid advertiser lead', async () => {
    const payload = {
      type: 'advertiser',
      name: 'Test Advert',
      businessName: 'Test Inc',
      city: 'Nadiad',
      phone: '9876543210',
      email: 'test@example.com',
      budgetRange: '₹500 – ₹2,000'
    };

    // Mock the DB save operation to return the payload + an ID
    Lead.create.mockResolvedValue({ _id: 'mock123', ...payload });

    const res = await request(app).post('/api/leads').send(payload);
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe('Test Advert');
    expect(Lead.create).toHaveBeenCalledTimes(1);
  });

  it('should block a lead with missing fields', async () => {
    const payload = {
      type: 'advertiser',
      name: 'Test Advert',
      // missing required fields
    };

    const res = await request(app).post('/api/leads').send(payload);
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.errors).toBeDefined();
    expect(Lead.create).not.toHaveBeenCalled();
  });
});
