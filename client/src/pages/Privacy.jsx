import React from 'react';
import { Container, SectionLabel, Button } from '../components/ui';

export default function Privacy() {
  const lastUpdated = 'October 17, 2026';

  return (
    <article className="py-20 lg:py-28 bg-concrete">
      <Container>
        {/* Header */}
        <header className="max-w-3xl border-b border-slate-border pb-10">
          <SectionLabel>Legal & Data Protection</SectionLabel>
          <h1 className="text-display-mobile lg:text-display mt-4">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-4 mt-6 text-label-md text-ink-muted">
            <span>EFFECTIVE DATE: {lastUpdated}</span>
            <span>·</span>
            <span>VERSION 1.1</span>
          </div>
          <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
            Left Right Media ("LRM", "we", "us", or "our") builds connected digital advertising
            infrastructure for physical environments across India. This Privacy Policy outlines our
            rigorous standards regarding the collection, use, disclosure, and protection of personal
            data across our website, partner portals, and physical DOOH display networks.
          </p>
        </header>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Quick Nav / Meta Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 border border-slate-border rounded-md bg-concrete-white p-6">
              <h2 className="text-label-lg text-ink mb-4">TABLE OF CONTENTS</h2>
              <nav aria-label="Privacy Policy sections">
                <ul className="space-y-3 text-body-md text-ink-muted">
                  <li><a href="#overview" className="hover:text-ink transition-colors">1. Platform Scope & Purpose</a></li>
                  <li><a href="#dooh-privacy" className="hover:text-ink transition-colors">2. Public Screens & DOOH Privacy</a></li>
                  <li><a href="#data-collection" className="hover:text-ink transition-colors">3. Information We Collect</a></li>
                  <li><a href="#data-usage" className="hover:text-ink transition-colors">4. How We Use Information</a></li>
                  <li><a href="#data-sharing" className="hover:text-ink transition-colors">5. Sharing & Disclosures</a></li>
                  <li><a href="#security" className="hover:text-ink transition-colors">6. Data Security & Storage</a></li>
                  <li><a href="#user-rights" className="hover:text-ink transition-colors">7. Your Rights & Choices</a></li>
                  <li><a href="#cookies" className="hover:text-ink transition-colors">8. Web Cookies & Analytics</a></li>
                  <li><a href="#grievance" className="hover:text-ink transition-colors">9. Grievance Redressal Officer</a></li>
                </ul>
              </nav>

              <div className="mt-8 pt-6 border-t border-slate-border">
                <span className="text-label-sm text-ink-muted block mb-2">QUESTIONS OR REQUESTS?</span>
                <p className="text-body-sm text-ink-muted mb-4">
                  Contact our data protection desk directly.
                </p>
                <Button variant="outline" size="sm" href="mailto:privacy@leftrightmedia.in" className="w-full justify-center">
                  privacy@leftrightmedia.in
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Legal Clauses */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            {/* Section 1 */}
            <section id="overview" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">01 // PLATFORM SCOPE</span>
              <h2 className="text-headline-md text-ink mb-4">1. Platform Scope & Purpose</h2>
              <p className="text-body-lg text-ink-muted leading-relaxed">
                Left Right Media connects three distinct participant groups:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-body-md text-ink-muted">
                <li><strong className="text-ink">Advertisers:</strong> Brands and local enterprises deploying campaigns across physical digital screens.</li>
                <li><strong className="text-ink">Screen Hosts / Partners:</strong> Commercial venue operators, cafés, retail stores, and event spaces hosting connected displays.</li>
                <li><strong className="text-ink">Website Visitors:</strong> Individuals interacting with leftrightmedia.in or contacting our team.</li>
              </ul>
              <p className="text-body-md text-ink-muted mt-4">
                This policy complies with applicable Indian data protection frameworks, including the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
              </p>
            </section>

            {/* Section 2 - Core DOOH Privacy Guarantee */}
            <section id="dooh-privacy" className="border-2 border-ink rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-success font-semibold block mb-2">02 // ESSENTIAL DOOH PRINCIPLE</span>
              <h2 className="text-headline-md text-ink mb-4">2. Public Screens & Venue Privacy Standards</h2>
              <div className="bg-concrete p-5 rounded-md border border-slate-border mb-6">
                <p className="text-headline-sm text-ink font-semibold">
                  We do not surveil individuals in physical spaces.
                </p>
                <p className="text-body-md text-ink-muted mt-2">
                  Left Right Media screens broadcast outbound visual media. We do NOT deploy facial recognition cameras, biometric fingerprinting, mobile phone MAC-address sniffers, or covert surveillance sensors at venue locations.
                </p>
              </div>
              <p className="text-body-md text-ink-muted leading-relaxed">
                All physical audience metrics reported to advertisers (such as estimated venue footfall and impression ranges) are aggregated, anonymized estimations based on venue capacity, foot-traffic historical samples, and broadcast scheduling confirmation timestamps.
              </p>
            </section>

            {/* Section 3 */}
            <section id="data-collection" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">03 // INFORMATION COLLECTION</span>
              <h2 className="text-headline-md text-ink mb-4">3. Information We Collect</h2>
              <p className="text-body-md text-ink-muted leading-relaxed mb-6">
                We only collect information necessary to facilitate business operations, campaign scheduling, and host payouts:
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-slate-border pl-4">
                  <h3 className="text-headline-sm text-ink">A. Information Provided by Advertisers</h3>
                  <p className="text-body-md text-ink-muted mt-1">
                    Contact name, official business designation, registered company name, billing address, GST identification number (GSTIN), telephone number, email address, campaign creative files, and target parameters (budget range, preferred city, dates).
                  </p>
                </div>

                <div className="border-l-2 border-slate-border pl-4">
                  <h3 className="text-headline-sm text-ink">B. Information Provided by Screen Partners</h3>
                  <p className="text-body-md text-ink-muted mt-1">
                    Venue owner name, business or establishment name, property address, physical location coordinates (city/pincode), contact email and phone number, screen hardware specifications (screen size, browser capability, operating hours), and payout details (bank account / IFSC / UPI ID for revenue disbursement).
                  </p>
                </div>

                <div className="border-l-2 border-slate-border pl-4">
                  <h3 className="text-headline-sm text-ink">C. Automated Telemetry & Web Data</h3>
                  <p className="text-body-md text-ink-muted mt-1">
                    When you access leftrightmedia.in or host screens ping our media server: IP address, user-agent, device type, screen kiosk heartbeat status, and aggregate interaction events.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="data-usage" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">04 // USE OF INFORMATION</span>
              <h2 className="text-headline-md text-ink mb-4">4. How We Use Collected Data</h2>
              <ul className="space-y-3 text-body-md text-ink-muted list-disc list-inside">
                <li><strong className="text-ink">Executing Campaigns:</strong> Scheduling, broadcasting, and verifying digital out-of-home media across the designated screens.</li>
                <li><strong className="text-ink">Host Disbursements:</strong> Calculating verified broadcast impressions and processing automated monthly payouts to screen partners.</li>
                <li><strong className="text-ink">Inquiry Fulfillment:</strong> Following up with prospective advertisers and venues regarding pilot deployments in Nadiad, Surat, and new cities.</li>
                <li><strong className="text-ink">Network Health Monitoring:</strong> Tracking player availability, connection uptime, and preventing system anomalies or unauthorized software access.</li>
                <li><strong className="text-ink">Legal & Tax Compliance:</strong> Generating tax invoices with appropriate GST compliance and statutory record-keeping.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="data-sharing" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">05 // DATA SHARING</span>
              <h2 className="text-headline-md text-ink mb-4">5. Sharing & Disclosures</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                <strong className="text-ink">We never sell, rent, or trade personal data to data brokers or unrelated third parties.</strong>
              </p>
              <p className="text-body-md text-ink-muted leading-relaxed mt-4">
                We share data strictly on a need-to-know basis with:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-body-md text-ink-muted">
                <li><strong className="text-ink">Verified Infrastructure Providers:</strong> Secure cloud database hosts (MongoDB Atlas), cloud servers, and transactional email/SMS gateways.</li>
                <li><strong className="text-ink">Banking & Payout Partners:</strong> RBI-authorized payment processors and scheduled banking institutions executing host revenue transfers.</li>
                <li><strong className="text-ink">Legal Authorities:</strong> Only when strictly mandated by enforceable court orders, law enforcement warrants, or applicable Indian law.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="security" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">06 // SECURITY</span>
              <h2 className="text-headline-md text-ink mb-4">6. Data Security & Storage</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                We employ industry-standard administrative, physical, and technical measures including TLS 1.3 encryption for data in transit, strict role-based access control (RBAC), sanitized database queries, and rate-limited endpoints. Lead records and payment references are stored on secured cloud environments with automated security patching.
              </p>
            </section>

            {/* Section 7 */}
            <section id="user-rights" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">07 // YOUR RIGHTS</span>
              <h2 className="text-headline-md text-ink mb-4">7. Your Rights & Choices</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                Under applicable Indian privacy law and our platform guidelines, you have the right to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 border border-slate-border rounded-md bg-concrete">
                  <h3 className="text-headline-sm text-ink">Access & Review</h3>
                  <p className="text-body-sm text-ink-muted mt-1">Request a summary of personal information we hold about you or your business.</p>
                </div>
                <div className="p-4 border border-slate-border rounded-md bg-concrete">
                  <h3 className="text-headline-sm text-ink">Correction</h3>
                  <p className="text-body-sm text-ink-muted mt-1">Update or correct inaccurate contact, billing, or screen location data.</p>
                </div>
                <div className="p-4 border border-slate-border rounded-md bg-concrete">
                  <h3 className="text-headline-sm text-ink">Deletion & Opt-Out</h3>
                  <p className="text-body-sm text-ink-muted mt-1">Request erasure of your lead records when no active business contract exists.</p>
                </div>
                <div className="p-4 border border-slate-border rounded-md bg-concrete">
                  <h3 className="text-headline-sm text-ink">Revoke Consent</h3>
                  <p className="text-body-sm text-ink-muted mt-1">Withdraw consent for promotional communications at any time.</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="cookies" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">08 // TRACKING</span>
              <h2 className="text-headline-md text-ink mb-4">8. Web Cookies & Analytics</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                Our public marketing website uses standard session cookies and privacy-respecting analytics (Google Analytics 4 with IP anonymization) to analyze aggregate site navigation, CTA engagement, and browser compatibility. You can disable cookies directly through your web browser settings without losing access to public informational content.
              </p>
            </section>

            {/* Section 9 */}
            <section id="grievance" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">09 // CONTACT & GRIEVANCE</span>
              <h2 className="text-headline-md text-ink mb-4">9. Grievance Redressal Officer</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                In compliance with the Information Technology Act, 2000 and DPDP Act provisions, our designated Grievance Officer can be contacted for privacy inquiries or grievance redressal:
              </p>
              <div className="mt-6 p-6 border border-slate-border rounded-md bg-concrete">
                <p className="text-headline-sm text-ink font-semibold">Grievance Officer</p>
                <p className="text-body-md text-ink mt-1">Left Right Media Technologies</p>
                <p className="text-body-md text-ink-muted mt-1">Gujarat, India (Operations: Nadiad & Surat)</p>
                <p className="text-body-md text-ink-muted mt-1">Email: <a href="mailto:privacy@leftrightmedia.in" className="text-ink underline">privacy@leftrightmedia.in</a></p>
                <p className="text-body-md text-ink-muted mt-1">Support: <a href="mailto:support@leftrightmedia.in" className="text-ink underline">support@leftrightmedia.in</a></p>
                <p className="text-body-sm text-ink-muted mt-4">All grievances are formally acknowledged within 48 hours and addressed within statutory timelines.</p>
              </div>
            </section>
          </main>
        </div>
      </Container>
    </article>
  );
}
