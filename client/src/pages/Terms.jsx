import React from 'react';
import { Container, SectionLabel, Button } from '../components/ui';

export default function Terms() {
  const lastUpdated = 'October 17, 2026';

  return (
    <article className="py-20 lg:py-28 bg-concrete">
      <Container>
        {/* Header */}
        <header className="max-w-3xl border-b border-slate-border pb-10">
          <SectionLabel>Terms & Conditions</SectionLabel>
          <h1 className="text-display-mobile lg:text-display mt-4">
            Terms of Service
          </h1>
          <div className="flex items-center gap-4 mt-6 text-label-md text-ink-muted">
            <span>EFFECTIVE DATE: {lastUpdated}</span>
            <span>·</span>
            <span>VERSION 1.1</span>
          </div>
          <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
            Welcome to Left Right Media. These Terms of Service ("Terms") govern your access to and
            use of the websites, advertising platform, media distribution services, and screen partner
            network operated by Left Right Media ("LRM", "we", "us", or "our").
          </p>
        </header>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Quick Nav / Meta Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 border border-slate-border rounded-md bg-concrete-white p-6">
              <h2 className="text-label-lg text-ink mb-4">SECTIONS</h2>
              <nav aria-label="Terms of Service sections">
                <ul className="space-y-3 text-body-md text-ink-muted">
                  <li><a href="#acceptance" className="hover:text-ink transition-colors">1. Agreement to Terms</a></li>
                  <li><a href="#platform-roles" className="hover:text-ink transition-colors">2. Platform Roles & Scope</a></li>
                  <li><a href="#screen-partners" className="hover:text-ink transition-colors">3. Screen Partner / Host Terms</a></li>
                  <li><a href="#advertisers" className="hover:text-ink transition-colors">4. Advertiser Terms & Content Rules</a></li>
                  <li><a href="#cancellations" className="hover:text-ink transition-colors">5. Booking, Rates & Refunds</a></li>
                  <li><a href="#events" className="hover:text-ink transition-colors">6. Event Network Deployments</a></li>
                  <li><a href="#ip" className="hover:text-ink transition-colors">7. Intellectual Property</a></li>
                  <li><a href="#liability" className="hover:text-ink transition-colors">8. Disclaimers & Liability</a></li>
                  <li><a href="#termination" className="hover:text-ink transition-colors">9. Term & Termination</a></li>
                  <li><a href="#jurisdiction" className="hover:text-ink transition-colors">10. Governing Law & Jurisdiction</a></li>
                </ul>
              </nav>

              <div className="mt-8 pt-6 border-t border-slate-border">
                <span className="text-label-sm text-ink-muted block mb-2">HAVE QUESTIONS?</span>
                <p className="text-body-sm text-ink-muted mb-4">
                  Need custom enterprise terms or campaign agreement details?
                </p>
                <Button variant="outline" size="sm" href="mailto:legal@leftrightmedia.in" className="w-full justify-center">
                  legal@leftrightmedia.in
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Legal Clauses */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            {/* Section 1 */}
            <section id="acceptance" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">01 // BINDING AGREEMENT</span>
              <h2 className="text-headline-md text-ink mb-4">1. Agreement to Terms</h2>
              <p className="text-body-lg text-ink-muted leading-relaxed">
                By accessing leftrightmedia.in, enrolling a physical screen in the LRM Screen Partner Network, submitting advertising campaigns, or executing an insertion order, you agree to be bound by these Terms and our Privacy Policy. If you are entering into these Terms on behalf of an enterprise or commercial entity, you represent and warrant that you possess the requisite authority to bind that entity.
              </p>
            </section>

            {/* Section 2 */}
            <section id="platform-roles" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">02 // ARCHITECTURE</span>
              <h2 className="text-headline-md text-ink mb-4">2. Platform Roles & Operating Model</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                Left Right Media operates a high-density digital out-of-home (DOOH) network bridging commercial venues and brand advertisers:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 border border-slate-border rounded-md bg-concrete">
                  <span className="text-label-sm font-semibold text-ink">SCREEN PARTNER</span>
                  <p className="text-body-sm text-ink-muted mt-2">Commercial host providing screen real-estate in high-footfall spaces to earn passive monthly revenue.</p>
                </div>
                <div className="p-4 border border-slate-border rounded-md bg-concrete">
                  <span className="text-label-sm font-semibold text-ink">ADVERTISER</span>
                  <p className="text-body-sm text-ink-muted mt-2">Brand, business, or agency buying high-attention screen time targeting contextual geographic audiences.</p>
                </div>
                <div className="p-4 border border-slate-border rounded-md bg-concrete">
                  <span className="text-label-sm font-semibold text-ink">EVENT ORGANIZER</span>
                  <p className="text-body-sm text-ink-muted mt-2">Temporary network deployments bringing live digital signage, sponsor loops, and wayfinding to expos.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="screen-partners" className="border-2 border-ink rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">03 // SCREEN HOSTS</span>
              <h2 className="text-headline-md text-ink mb-4">3. Screen Partner / Host Obligations</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-headline-sm text-ink">A. Content Split Model</h3>
                  <p className="text-body-md text-ink-muted mt-1 leading-relaxed">
                    Hosts display LRM-approved content on their existing Smart TVs. Under our standard revenue model, <strong className="text-ink">55% of the screen time remains dedicated to the venue</strong> (in-house menus, promotions, announcements), while <strong className="text-ink">45% rotates verified advertiser inventory</strong>. Alternatively, venues may elect a visual split format where dedicated advertising occupies a reserved peripheral section without interrupting host primary viewing.
                  </p>
                </div>

                <div>
                  <h3 className="text-headline-sm text-ink">B. Hardware & Player Requirements</h3>
                  <p className="text-body-md text-ink-muted mt-1 leading-relaxed">
                    No proprietary black-box hardware is required. Hosts run the LRM web-player kiosk application via any compatible Smart TV browser (Android TV, Samsung Tizen, LG webOS, Fire TV, or HDMI compute stick). Hosts agree to maintain stable power, adequate screen visibility, and working internet connectivity during standard business operational hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-headline-sm text-ink">C. Monthly Host Payouts</h3>
                  <p className="text-body-md text-ink-muted mt-1 leading-relaxed">
                    Hosts receive monthly disbursements calculated on verified ad play telemetry and impression deliveries. Payouts are transferred automatically within the first 10 business days of each calendar month via direct NEFT / UPI transfer.
                  </p>
                </div>

                <div>
                  <h3 className="text-headline-sm text-ink">D. No Hardware Lock-In</h3>
                  <p className="text-body-md text-ink-muted mt-1 leading-relaxed">
                    Screen partnerships operate on a flexible month-to-month basis. Hosts may disconnect their screen from the network at any time with zero termination penalties upon written notification.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="advertisers" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">04 // ADVERTISERS</span>
              <h2 className="text-headline-md text-ink mb-4">4. Advertiser Terms & Ad Content Policy</h2>
              
              <p className="text-body-md text-ink-muted leading-relaxed">
                Advertisers book screen campaigns across verified physical nodes. All submitted creatives must adhere strictly to LRM's Community & Broadcast Quality Standards.
              </p>

              <div className="mt-6 p-5 border border-error/30 bg-error/5 rounded-md">
                <span className="text-label-sm text-error font-semibold block mb-2">STRICTLY PROHIBITED ADVERTISING</span>
                <p className="text-body-sm text-ink-muted leading-relaxed">
                  We categorically reject any creative promoting: adult/pornographic content, deceptive gambling/betting schemes, hate speech, defamatory claims, politically polarizing materials, counterfeit products, tobacco/controlled substances, or content violating the Advertising Standards Council of India (ASCI) Code.
                </p>
              </div>

              <div className="mt-6 space-y-4 text-body-md text-ink-muted leading-relaxed">
                <p>
                  <strong className="text-ink">Pre-Broadcast Moderation:</strong> Every ad submitted through our platform undergoes automated technical verification (16:9 1080p/4K resolution, format check) and human editorial review prior to slot rotation.
                </p>
                <p>
                  <strong className="text-ink">Right of Rejection:</strong> LRM reserves the unilateral right to reject or cease broadcast of any creative that draws legitimate venue complaints or violates community standards, issuing a pro-rata refund for unserved impressions.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="cancellations" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">05 // BOOKINGS & REFUNDS</span>
              <h2 className="text-headline-md text-ink mb-4">5. Booking, Rates & Cancellation Policy</h2>
              <ul className="space-y-4 text-body-md text-ink-muted list-disc list-inside">
                <li><strong className="text-ink">Transparent Pricing:</strong> Standard advertiser rates are established upfront (e.g. ₹500 per 2-hour slot block per node) or under custom multi-venue monthly packages.</li>
                <li><strong className="text-ink">24-Hour Cancellation Window:</strong> Advertisers may cancel scheduled campaign slots up to 24 hours prior to broadcast start for a full 100% refund.</li>
                <li><strong className="text-ink">Late Cancellations:</strong> Cancellations made within 24 hours of scheduled airtime incur a 30% slot reservation processing fee.</li>
                <li><strong className="text-ink">Make-Good Guarantee:</strong> If a partner venue experiences a verified extended power or internet outage preventing greater than 20% of scheduled slot deliveries, LRM will automatically issue a make-good broadcast credit or pro-rata refund.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="events" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">06 // EVENT OPERATIONS</span>
              <h2 className="text-headline-md text-ink mb-4">6. Event Network Deployments</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                For trade expos, exhibitions, and college festivals, LRM provides temporary digital signage infrastructure (wayfinding, dynamic schedule boards, sponsor broadcasts, and QR interactive portals). Event organizers remain responsible for providing on-site power and venue display positioning, while LRM manages real-time cloud playlist rotation.
              </p>
            </section>

            {/* Section 7 */}
            <section id="ip" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">07 // INTELLECTUAL PROPERTY</span>
              <h2 className="text-headline-md text-ink mb-4">7. Intellectual Property Rights</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                Advertisers retain full ownership and copyright of all creative graphics, brand logos, and video assets submitted to LRM. By uploading materials, you grant LRM a non-exclusive, royalty-free license strictly to transmit, format, and broadcast those assets across the booked network nodes during the agreed campaign period.
              </p>
              <p className="text-body-md text-ink-muted leading-relaxed mt-4">
                All Left Right Media software, player interfaces, trademarks, graphic assets, and architectural algorithms remain the exclusive property of Left Right Media Technologies.
              </p>
            </section>

            {/* Section 8 */}
            <section id="liability" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">08 // DISCLAIMERS</span>
              <h2 className="text-headline-md text-ink mb-4">8. Disclaimers & Limitation of Liability</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                The LRM network is provided on an "as is" and "as available" basis. While we strive for 99.5% network uptime, physical screens in public venues may experience occasional interruptions due to municipal power cuts, local broadband disruption, or venue interior maintenance.
              </p>
              <p className="text-body-md text-ink-muted leading-relaxed mt-4">
                In no event shall Left Right Media be liable for indirect, incidental, punitive, or consequential damages. Our total liability for any verified claim arising out of a campaign booking is strictly capped at the total amount paid by the advertiser for the specific affected campaign.
              </p>
            </section>

            {/* Section 9 */}
            <section id="termination" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">09 // TERMINATION</span>
              <h2 className="text-headline-md text-ink mb-4">9. Term & Termination</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                Either party may terminate a screen partnership or account registration with written notice. LRM reserves the right to immediately suspend or revoke network player access if a venue host intentionally tampers with player software or displays unmoderated offensive material.
              </p>
            </section>

            {/* Section 10 */}
            <section id="jurisdiction" className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-sm text-accent font-semibold block mb-2">10 // JURISDICTION</span>
              <h2 className="text-headline-md text-ink mb-4">10. Governing Law & Dispute Resolution</h2>
              <p className="text-body-md text-ink-muted leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes, claims, or controversies arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in Anand / Nadiad, Gujarat, India.
              </p>
              <div className="mt-8 pt-6 border-t border-slate-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-label-md text-ink-muted">Need a signed Master Services Agreement (MSA)?</span>
                <Button variant="signal" size="sm" href="/contact">
                  Request Commercial Agreement →
                </Button>
              </div>
            </section>
          </main>
        </div>
      </Container>
    </article>
  );
}
