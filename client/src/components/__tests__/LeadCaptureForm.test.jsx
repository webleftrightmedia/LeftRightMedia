import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LeadCaptureForm from '../LeadCaptureForm';
import { vi } from 'vitest';

// Mock analytics so we don't throw errors
vi.mock('../../utils/analytics', () => ({
  trackEvent: vi.fn(),
}));

describe('LeadCaptureForm Component', () => {
  it('renders both Advertiser and Host toggle buttons', () => {
    render(
      <MemoryRouter>
        <LeadCaptureForm />
      </MemoryRouter>
    );
    
    expect(screen.getByText('I want to advertise')).toBeInTheDocument();
    expect(screen.getByText('I want to host a screen')).toBeInTheDocument();
  });

  it('toggles mode to Host when clicked', () => {
    render(
      <MemoryRouter>
        <LeadCaptureForm />
      </MemoryRouter>
    );
    
    const hostButton = screen.getByText('I want to host a screen');
    fireEvent.click(hostButton);
    
    // Check if the "Number of Screens" field appears
    expect(screen.getByText('Number of Screens')).toBeInTheDocument();
  });
});
