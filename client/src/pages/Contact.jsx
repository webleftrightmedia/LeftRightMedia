import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, SectionLabel } from '../components/ui';
import { trackEvent } from '../utils/analytics';

/**
 * /contact — Dynamic contact page.
 * Shows a purpose selector and renders the appropriate form.
 */

const purposes = [
  { id: 'advertiser', label: 'I want to advertise', icon: '📢' },
  { id: 'screen', label: 'I want to add my screen', icon: '📺' },
  { id: 'event', label: 'I want LRM at my event', icon: '🎪' },
  { id: 'partnership', label: 'Partnership / Collaboration', icon: '🤝' },
  { id: 'other', label: 'Something else', icon: '💬' },
];

// --- Schemas ---

const advertiserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().min(1, 'Phone is required'),
  objective: z.string().optional(),
  audience: z.string().optional(),
  locations: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
});

const screenSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  business: z.string().min(1, 'Business name is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().min(1, 'Phone is required'),
  location: z.string().optional(),
  screenType: z.string().optional(),
  screenSize: z.string().optional(),
  screenCount: z.string().optional(),
  operatingHours: z.string().optional(),
});

const eventSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  organization: z.string().min(1, 'Organization is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().min(1, 'Phone is required'),
  eventName: z.string().optional(),
  eventDate: z.string().optional(),
  venue: z.string().optional(),
  expectedVisitors: z.string().optional(),
  eventType: z.string().optional(),
  requirements: z.string().optional(),
});

const generalSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Please include a message'),
});

const schemas = {
  advertiser: advertiserSchema,
  screen: screenSchema,
  event: eventSchema,
  partnership: generalSchema,
  other: generalSchema,
};

export default function Contact() {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="text-display-mobile lg:text-display mt-4">
              Let's Build Something That Gets Seen.
            </h1>
          </div>
        </Container>
      </section>

      {/* Purpose selector + form */}
      <section className="bg-concrete py-20 lg:py-28">
        <Container>
          <div className="max-w-xl mx-auto">
            {/* Purpose selector */}
            <h2 className="text-headline-sm mb-6">
              What are you looking for?
            </h2>

            <div className="space-y-2 mb-10">
              {purposes.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPurpose(p.id);
                    setSubmitError(null);
                    trackEvent('contact_purpose_selected', { purpose: p.id });
                  }}
                  className={[
                    'w-full text-left px-5 py-4 border rounded-md cursor-pointer',
                    'transition-all duration-200 flex items-center gap-4',
                    purpose === p.id
                      ? 'bg-ink text-white border-ink'
                      : 'bg-concrete-white border-slate-border hover:border-ink/30',
                  ].join(' ')}
                >
                  <span className="text-lg" aria-hidden="true">{p.icon}</span>
                  <span className="text-body-md font-medium">{p.label}</span>
                </button>
              ))}
            </div>

            {/* Conditional form */}
            {purpose && (
              <ContactForm
                purpose={purpose}
                submitError={submitError}
                setSubmitError={setSubmitError}
                onSuccess={() => navigate('/thank-you')}
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

// --- ContactForm ---

function ContactForm({ purpose, submitError, setSubmitError, onSuccess }) {
  const schema = schemas[purpose] || generalSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    setSubmitError(null);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || '/api'}/leads`, {
        ...data,
        type: purpose,
      });
      trackEvent('form_submit_success', { page: 'contact', purpose });
      onSuccess();
    } catch (error) {
      trackEvent('form_submit_error', { page: 'contact', purpose, error: error.message });
      setSubmitError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-live="assertive">
      {submitError && (
        <div className="bg-error/10 border border-error text-error text-body-md p-3 rounded-[4px]" role="alert">
          {submitError}
        </div>
      )}

      {/* Common fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Name" error={errors.name?.message} {...register('name')} />
        {purpose === 'advertiser' && (
          <Field label="Company" error={errors.company?.message} {...register('company')} />
        )}
        {purpose === 'screen' && (
          <Field label="Business" error={errors.business?.message} {...register('business')} />
        )}
        {purpose === 'event' && (
          <Field label="Organization" error={errors.organization?.message} {...register('organization')} />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Email" type="email" error={errors.email?.message} {...register('email')} />
        <Field label="Phone" type="tel" error={errors.phone?.message} {...register('phone')} />
      </div>

      {/* Advertiser-specific fields */}
      {purpose === 'advertiser' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Campaign Objective" error={errors.objective?.message} {...register('objective')} />
            <Field label="Target Audience" error={errors.audience?.message} {...register('audience')} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Preferred Locations" error={errors.locations?.message} {...register('locations')} />
            <Field label="Budget Range" error={errors.budget?.message} {...register('budget')} />
          </div>
          <Field label="Timeline" error={errors.timeline?.message} {...register('timeline')} />
          <FieldTextarea label="Message" error={errors.message?.message} {...register('message')} />
        </>
      )}

      {/* Screen partner-specific fields */}
      {purpose === 'screen' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Location" error={errors.location?.message} {...register('location')} />
            <Field label="Screen Type" error={errors.screenType?.message} {...register('screenType')} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Screen Size" error={errors.screenSize?.message} {...register('screenSize')} />
            <Field label="Number of Screens" error={errors.screenCount?.message} {...register('screenCount')} />
          </div>
          <Field label="Operating Hours" error={errors.operatingHours?.message} {...register('operatingHours')} />
        </>
      )}

      {/* Event-specific fields */}
      {purpose === 'event' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Event Name" error={errors.eventName?.message} {...register('eventName')} />
            <Field label="Event Date" type="date" error={errors.eventDate?.message} {...register('eventDate')} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Venue" error={errors.venue?.message} {...register('venue')} />
            <Field label="Expected Visitors" error={errors.expectedVisitors?.message} {...register('expectedVisitors')} />
          </div>
          <Field label="Event Type" error={errors.eventType?.message} {...register('eventType')} />
          <FieldTextarea label="Requirements" error={errors.requirements?.message} {...register('requirements')} />
        </>
      )}

      {/* General / Partnership / Other */}
      {(purpose === 'partnership' || purpose === 'other') && (
        <FieldTextarea label="Message" error={errors.message?.message} {...register('message')} />
      )}

      <Button
        variant="solid"
        size="lg"
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2"
      >
        {isSubmitting ? 'Submitting...' : 'Send Message →'}
      </Button>

      <p className="text-body-sm text-ink-muted text-center">
        By submitting, you agree to our{' '}
        <a href="/privacy" className="underline hover:text-ink">Privacy Policy</a> and{' '}
        <a href="/terms" className="underline hover:text-ink">Terms of Service</a>.
      </p>
    </form>
  );
}

// --- Field components (reused from existing LeadCaptureForm pattern) ---

const Field = React.forwardRef(({ label, type = 'text', error, ...props }, ref) => {
  const errorId = `error-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div>
      <label className="text-label-md text-ink block mb-1.5">{label}</label>
      <input
        ref={ref}
        type={type}
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

const FieldTextarea = React.forwardRef(({ label, error, ...props }, ref) => {
  const errorId = `error-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div>
      <label className="text-label-md text-ink block mb-1.5">{label}</label>
      <textarea
        ref={ref}
        rows={4}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={[
          'w-full px-4 py-3 bg-concrete-white border rounded-md text-body-md resize-y',
          'placeholder:text-ink-muted/50',
          error ? 'border-error' : 'border-slate-border focus:border-ink',
        ].join(' ')}
        {...props}
      />
      {error && <p id={errorId} className="text-body-sm text-error mt-1">{error}</p>}
    </div>
  );
});
FieldTextarea.displayName = 'FieldTextarea';
