import type { Metadata } from 'next'
import Link from 'next/link'
import { Package, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy — Corely',
  description: 'Learn how Corely uses cookies and similar technologies on our platform.',
}

const cookieTypes = [
  {
    name: 'Strictly Necessary',
    badge: 'Always active',
    badgeColor: 'bg-[#dcfce7] text-[#166534]',
    description:
      'These cookies are essential for the Service to function and cannot be disabled. They are usually set in response to actions you take, such as logging in or filling in forms. You can set your browser to block these cookies, but parts of the Service will not work.',
    examples: [
      { name: 'session_id', purpose: 'Maintains your authenticated session', duration: 'Session' },
      { name: 'csrf_token', purpose: 'Protects against cross-site request forgery attacks', duration: 'Session' },
      { name: 'corely_auth', purpose: 'Stores encrypted authentication state', duration: '30 days' },
    ],
  },
  {
    name: 'Functional',
    badge: 'Optional',
    badgeColor: 'bg-[#dbeafe] text-[#1e40af]',
    description:
      'These cookies enable enhanced functionality and personalisation, such as remembering your preferences, language settings, and interface customisations. Disabling these may affect your experience.',
    examples: [
      { name: 'ui_theme', purpose: 'Saves your interface preferences', duration: '1 year' },
      { name: 'locale', purpose: 'Stores your language and regional settings', duration: '1 year' },
      { name: 'sidebar_state', purpose: 'Remembers whether the sidebar is open or collapsed', duration: '6 months' },
    ],
  },
  {
    name: 'Analytics',
    badge: 'Optional',
    badgeColor: 'bg-[#fef9c3] text-[#854d0e]',
    description:
      'These cookies help us understand how visitors use the Service. All information collected is aggregated and anonymised. We use this data to improve the Service, diagnose issues, and measure the effectiveness of new features.',
    examples: [
      { name: '_ga', purpose: 'Google Analytics — distinguishes unique users', duration: '2 years' },
      { name: '_gid', purpose: 'Google Analytics — distinguishes users within a session', duration: '24 hours' },
      { name: 'ph_session', purpose: 'PostHog — tracks usage patterns within sessions', duration: 'Session' },
    ],
  },
  {
    name: 'Marketing',
    badge: 'Optional',
    badgeColor: 'bg-[#fce7f3] text-[#9d174d]',
    description:
      'These cookies are used to deliver relevant advertisements and measure their effectiveness. They may be set by our advertising partners. We currently use marketing cookies only on our public marketing pages, not within the authenticated platform.',
    examples: [
      { name: '_fbp', purpose: 'Meta — measures ad campaign effectiveness', duration: '3 months' },
      { name: 'li_fat_id', purpose: 'LinkedIn — measures campaign attribution', duration: '30 days' },
    ],
  },
]

const browserGuides = [
  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox' },
  { name: 'Apple Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-sans)]">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 opacity-90 transition-opacity duration-150 hover:opacity-100"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2563eb]">
              <Package className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-[#0f172a]">Corely</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#64748b] transition-colors duration-150 hover:text-[#0f172a]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="border-b border-[#e2e8f0] bg-[#f8fafc]">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#2563eb]">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-[#64748b]">Last updated: April 3, 2026</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#64748b]">
            This policy explains what cookies are, how Corely uses them, and the choices available to you regarding their use.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-12">

          {/* What are cookies */}
          <section id="what-are-cookies">
            <h2 className="mb-4 text-lg font-semibold text-[#0f172a]">1. What Are Cookies?</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#475569]">
              Cookies are small text files placed on your device when you visit a website or use a web application. They are widely used to make services work more efficiently, remember your preferences, and provide information to site owners.
            </p>
            <p className="text-sm leading-relaxed text-[#475569]">
              In addition to cookies, we may use similar technologies such as local storage, session storage, and pixel tags. This policy covers all such technologies collectively referred to as "cookies".
            </p>
          </section>

          {/* Cookie types */}
          <section id="cookie-types">
            <h2 className="mb-6 text-lg font-semibold text-[#0f172a]">2. Cookies We Use</h2>

            <div className="space-y-6">
              {cookieTypes.map((type) => (
                <div key={type.name} className="rounded-xl border border-[#e2e8f0] overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#e2e8f0] bg-[#f8fafc] px-5 py-3.5">
                    <h3 className="text-sm font-semibold text-[#0f172a]">{type.name}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${type.badgeColor}`}>
                      {type.badge}
                    </span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="mb-4 text-sm leading-relaxed text-[#475569]">{type.description}</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-[#f1f5f9]">
                            <th className="pb-2 pr-4 text-left font-semibold text-[#94a3b8]">Cookie</th>
                            <th className="pb-2 pr-4 text-left font-semibold text-[#94a3b8]">Purpose</th>
                            <th className="pb-2 text-left font-semibold text-[#94a3b8]">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f1f5f9]">
                          {type.examples.map((cookie) => (
                            <tr key={cookie.name}>
                              <td className="py-2.5 pr-4 font-mono text-[11px] text-[#0f172a]">{cookie.name}</td>
                              <td className="py-2.5 pr-4 text-[#475569]">{cookie.purpose}</td>
                              <td className="py-2.5 whitespace-nowrap text-[#64748b]">{cookie.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Third-party */}
          <section id="third-party">
            <h2 className="mb-4 text-lg font-semibold text-[#0f172a]">3. Third-Party Cookies</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#475569]">
              Some cookies are placed by third-party services that appear on our pages. We do not control the operation of these cookies. Please refer to the respective third-party privacy policies for more information:
            </p>
            <ul className="space-y-2 pl-1">
              {[
                { name: 'Google Analytics', url: 'https://policies.google.com/privacy', purpose: 'Analytics and usage measurement' },
                { name: 'PostHog', url: 'https://posthog.com/privacy', purpose: 'Product analytics' },
                { name: 'Stripe', url: 'https://stripe.com/privacy', purpose: 'Payment processing' },
                { name: 'Intercom', url: 'https://www.intercom.com/legal/privacy', purpose: 'Customer support chat' },
              ].map((provider) => (
                <li key={provider.name} className="flex items-start gap-2.5 text-sm text-[#475569]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />
                  <span>
                    <span className="font-medium text-[#0f172a]">{provider.name}</span>
                    {' '}— {provider.purpose}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Managing cookies */}
          <section id="managing-cookies">
            <h2 className="mb-4 text-lg font-semibold text-[#0f172a]">4. Managing Cookies</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#475569]">
              You have several options for managing cookies:
            </p>

            <div className="space-y-4 mb-6">
              <div className="pl-4 border-l-2 border-[#e2e8f0]">
                <h3 className="mb-2 text-sm font-semibold text-[#0f172a]">Cookie Preferences</h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  On your first visit, you will be presented with a cookie consent banner where you can accept or decline optional cookie categories. You can update your preferences at any time by clicking "Cookie Settings" in the footer.
                </p>
              </div>
              <div className="pl-4 border-l-2 border-[#e2e8f0]">
                <h3 className="mb-2 text-sm font-semibold text-[#0f172a]">Browser Controls</h3>
                <p className="mb-3 text-sm leading-relaxed text-[#475569]">
                  Most browsers allow you to manage cookies through their settings. Note that blocking all cookies may affect the functionality of the Service. Browser-specific instructions:
                </p>
                <ul className="space-y-1.5">
                  {browserGuides.map((guide) => (
                    <li key={guide.name} className="text-sm">
                      <a
                        href={guide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2563eb] underline-offset-4 hover:underline"
                      >
                        {guide.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-[#e2e8f0]">
                <h3 className="mb-2 text-sm font-semibold text-[#0f172a]">Opt-Out of Analytics</h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  To opt out of Google Analytics across all websites, you can install the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563eb] underline-offset-4 hover:underline"
                  >
                    Google Analytics opt-out browser add-on
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Changes */}
          <section id="changes">
            <h2 className="mb-4 text-lg font-semibold text-[#0f172a]">5. Updates to This Policy</h2>
            <p className="text-sm leading-relaxed text-[#475569]">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. The "Last updated" date at the top of this page will indicate when the latest revision was made. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section id="contact">
            <h2 className="mb-4 text-lg font-semibold text-[#0f172a]">6. Contact Us</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#475569]">
              If you have questions about our use of cookies or this policy, please contact us:
            </p>
            <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4">
              <p className="text-sm text-[#475569]">
                Email:{' '}
                <a
                  href="mailto:privacy@corely.pt"
                  className="text-[#2563eb] underline-offset-4 hover:underline"
                >
                  privacy@corely.pt
                </a>
              </p>
              <p className="mt-1 text-sm text-[#475569]">Corely Solution</p>
              <p className="mt-1 text-sm text-[#475569]">Lisboa, Portugal</p>
            </div>
          </section>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#e2e8f0] pt-8">
          <p className="text-xs text-[#94a3b8]">
            See also:{' '}
            <Link href="/privacy-policy" className="text-[#64748b] underline-offset-4 hover:underline hover:text-[#0f172a] transition-colors duration-150">
              Privacy Policy
            </Link>{' '}
            ·{' '}
            <Link href="/terms-of-service" className="text-[#64748b] underline-offset-4 hover:underline hover:text-[#0f172a] transition-colors duration-150">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[#cbd5e1]">
            © {new Date().getFullYear()} Corely Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-[#94a3b8] transition-colors duration-150 hover:text-[#64748b]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-[#94a3b8] transition-colors duration-150 hover:text-[#64748b]">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-xs text-[#94a3b8] transition-colors duration-150 hover:text-[#64748b]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
