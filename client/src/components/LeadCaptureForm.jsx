import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, SectionLabel } from './ui';
import { trackEvent } from '../utils/analytics';

const cities = ['Nadiad', 'Surat', 'Other'];

const budgetRanges = [
  '₹500 – ₹2,000',
  '₹2,000 – ₹5,000',
  '₹5,000 – ₹15,000',
  '₹15,000+',
];

// Base schema for common fields
const baseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  businessName: z.string().min(1, 'Business name is required'),
  city: z.string().min(1, 'Select a city'),
  phone: z
    .string()
    .min(1, 'Phone is required')
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
});

// Dynamic schema that switches based on mode
const getValidationSchema = (mode) => {
  if (mode === 'host') {
    return baseSchema.extend({
      screenCount: z.coerce.number({ invalid_type_error: 'Must be a number' }).min(1, 'How many screens do you have?'),
      budgetRange: z.string().optional(),
    });
  }
  return baseSchema.extend({
    screenCount: z.coerce.number().optional(),
    budgetRange: z.string().min(1, 'Select a budget range'),
  });
};

export default function LeadCaptureForm() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('advertiser'); // 'host' | 'advertiser'
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(getValidationSchema(mode)),
    defaultValues: {
      name: '',
      businessName: '',
      city: '',
      phone: '',
      email: '',
      screenCount: '',
      budgetRange: '',
    },
  });

  // Track form starts
  useEffect(() => {
    trackEvent('form_start', { mode });
  }, [mode]);

  const onSubmit = async (data) => {
    setSubmitError(null);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/leads`, {
        ...data,
        type: mode,
      });
      
      trackEvent('form_submit_success', { mode, city: data.city });
      navigate('/thank-you');
    } catch (error) {
      trackEvent('form_submit_error', { mode, error: error.response?.data?.message || error.message });
      setSubmitError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="lead-form" className="py-20 lg:py-24">
      <Container>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel className="justify-center">Join the Network</SectionLabel>
            <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-3">
              Let's talk.
            </h2>
            <p className="text-body-lg text-ink-muted mt-2">
              Drop your details and someone from our team will reach out within a day.
            </p>
          </div>

          {/* iOS Style Segmented Control Toggle */}
          <div className="flex bg-slate-border/50 p-1.5 rounded-lg mb-10 relative">
            {/* Sliding Indicator (Pure CSS) */}
            <div 
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-white rounded-md shadow-sm transition-transform duration-300 ease-out"
              style={{ transform: mode === 'advertiser' ? 'translateX(0)' : 'translateX(100%)' }}
            />
            
            <button
              type="button"
              aria-pressed={mode === 'advertiser'}
              className={[
                'flex-1 py-2.5 text-label-lg transition-colors duration-200 z-10 cursor-pointer rounded-md',
                mode === 'advertiser' ? 'text-ink' : 'text-ink-muted hover:text-ink',
              ].join(' ')}
              onClick={() => {
                setMode('advertiser');
                reset();
              }}
            >
              I want to advertise
            </button>
            <button
              type="button"
              aria-pressed={mode === 'host'}
              className={[
                'flex-1 py-2.5 text-label-lg transition-colors duration-200 z-10 cursor-pointer rounded-md',
                mode === 'host' ? 'text-ink' : 'text-ink-muted hover:text-ink',
              ].join(' ')}
              onClick={() => {
                setMode('host');
                reset(); // Clear errors when switching modes
              }}
            >
              I want to host a screen
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" aria-live="assertive">
            {submitError && (
              <div className="bg-error/10 border border-error text-error text-body-md p-3 rounded-[4px]" role="alert">
                {submitError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="Your Name"
                placeholder="Rajesh Patel"
                error={errors.name?.message}
                {...register('name')}
              />
              <Field
                label="Business Name"
                placeholder="Patel Café & Restaurant"
                error={errors.businessName?.message}
                {...register('businessName')}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="Phone"
                type="tel"
                placeholder="98765 43210"
                error={errors.phone?.message}
                {...register('phone')}
              />
              <Field
                label="Email"
                type="email"
                placeholder="rajesh@example.com"
                error={errors.email?.message}
                {...register('email')}
              />
            </div>

            <div>
              <label htmlFor="city-select" className="text-label-md text-ink block mb-1.5">City</label>
              <select
                id="city-select"
                aria-invalid={!!errors.city}
                aria-describedby={errors.city ? 'error-city' : undefined}
                className={[
                  'w-full h-12 px-4 bg-concrete-white border rounded-md text-body-md appearance-none cursor-pointer',
                  errors.city ? 'border-error' : 'border-slate-border focus:border-ink',
                ].join(' ')}
                {...register('city')}
              >
                <option value="">Select your city</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.city && <p id="error-city" className="text-body-sm text-error mt-1">{errors.city.message}</p>}
            </div>

            {/* Conditional field */}
            {mode === 'host' ? (
              <Field
                label="Number of Screens"
                type="number"
                placeholder="1"
                min="1"
                error={errors.screenCount?.message}
                {...register('screenCount')}
              />
            ) : (
              <div>
                <label htmlFor="budget-select" className="text-label-md text-ink block mb-1.5">Monthly Ad Budget</label>
                <select
                  id="budget-select"
                  aria-invalid={!!errors.budgetRange}
                  aria-describedby={errors.budgetRange ? 'error-budget' : undefined}
                  className={[
                    'w-full h-12 px-4 bg-concrete-white border rounded-md text-body-md appearance-none cursor-pointer',
                    errors.budgetRange ? 'border-error' : 'border-slate-border focus:border-ink',
                  ].join(' ')}
                  {...register('budgetRange')}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                {errors.budgetRange && (
                  <p id="error-budget" className="text-body-sm text-error mt-1">{errors.budgetRange.message}</p>
                )}
              </div>
            )}

            <Button
              variant="signal"
              size="lg"
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2"
            >
              {isSubmitting ? 'Submitting...' : mode === 'host' ? 'Register as Host' : 'Start Advertising'}
            </Button>

            <p className="text-body-sm text-ink-muted text-center">
              By submitting, you agree to our{' '}
              <a href="/privacy" className="underline hover:text-ink">Privacy Policy</a> and{' '}
              <a href="/terms" className="underline hover:text-ink">Terms of Service</a>.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

const Field = React.forwardRef(({
  label,
  type = 'text',
  error,
  placeholder,
  ...props
}, ref) => {
  const errorId = `error-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div>
      <label className="text-label-md text-ink block mb-1.5">{label}</label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={[
          'w-full h-12 px-4 bg-concrete-white border rounded-md text-body-md',
          'placeholder:text-ink-muted/50',
          error ? 'border-error' : 'border-slate-border focus:border-ink',
        ].join(' ')}
        {...props}
      />
      {error && <p id={errorId} className="text-body-sm text-error mt-1">{error}</p>}
    </div>
  );
});

Field.displayName = 'Field';
