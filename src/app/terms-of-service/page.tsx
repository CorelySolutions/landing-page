import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service — Corely',
  description: 'Read the terms and conditions governing your use of the Corely platform.',
}

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      'These Terms of Service ("Terms") govern your access to and use of the Corely platform, including any applications, features, and services made available by Corely Solution ("Corely", "we", "our", or "us").',
      'By creating an account or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you are using the Service on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.',
      'If you do not agree to these Terms, you may not access or use the Service.',
    ],
  },
  {
    id: 'description',
    title: '2. Description of Service',
    content: [
      'Corely is a B2B SaaS platform designed for live event production companies to manage AV inventory, fleet, projects, and teams. The Service includes all web interfaces, APIs, integrations, and related tools made available to you as a subscriber.',
      'We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable prior notice, except in cases of emergency or legal obligation.',
    ],
  },
  {
    id: 'account',
    title: '3. Account Registration',
    subsections: [
      {
        title: 'Eligibility',
        content:
          'You must be at least 18 years old and legally capable of entering into binding contracts to use the Service. The Service is intended for business use only.',
      },
      {
        title: 'Account Security',
        content:
          'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify us immediately at hello@corely.pt if you suspect any unauthorised access to your account.',
      },
      {
        title: 'Accurate Information',
        content:
          'You agree to provide accurate, current, and complete information during registration and to keep your account information up to date. We reserve the right to suspend or terminate accounts with false or misleading information.',
      },
    ],
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable Use',
    content: ['You agree to use the Service only for lawful purposes. You must not:'],
    items: [
      'Violate any applicable laws or regulations',
      'Upload or transmit any content that is unlawful, harmful, offensive, or infringing',
      'Interfere with or disrupt the integrity or performance of the Service or its infrastructure',
      'Attempt to gain unauthorised access to any system, network, or account',
      'Reverse engineer, decompile, or disassemble any part of the Service',
      'Use the Service to store or process sensitive personal data without appropriate safeguards',
      'Resell, sublicence, or otherwise commercialise the Service without our written consent',
      'Use automated means to scrape, crawl, or extract data from the Service',
    ],
    footer:
      'We reserve the right to suspend or terminate access for any violation of these acceptable use requirements.',
  },
  {
    id: 'billing',
    title: '5. Subscription and Billing',
    subsections: [
      {
        title: 'Plans and Fees',
        content:
          'Corely offers subscription plans as described on the pricing page. Fees are billed in advance on a monthly or annual basis, depending on your selected plan. All fees are exclusive of taxes unless stated otherwise.',
      },
      {
        title: 'Payment',
        content:
          'Payment is processed by our third-party payment provider. By providing payment information, you authorise us to charge the applicable fees to your payment method. You are responsible for keeping billing information current.',
      },
      {
        title: 'Refunds',
        content:
          'All fees are non-refundable except as required by law or as expressly stated in these Terms. If you cancel mid-period, you retain access until the end of the current billing period.',
      },
      {
        title: 'Changes to Pricing',
        content:
          'We may change our pricing with at least 30 days written notice. Continued use of the Service after the effective date constitutes acceptance of the new pricing.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: '6. Intellectual Property',
    subsections: [
      {
        title: 'Our IP',
        content:
          'The Service, including its design, software, trademarks, and content, is owned by or licensed to Corely and is protected by applicable intellectual property laws. These Terms do not grant you any right, title, or interest in the Service beyond the limited licence to use it.',
      },
      {
        title: 'Your Content',
        content:
          'You retain ownership of all data and content you upload or create within the Service ("Customer Data"). You grant us a limited, non-exclusive, worldwide licence to host, store, and process Customer Data solely to provide and improve the Service.',
      },
      {
        title: 'Feedback',
        content:
          'If you submit suggestions, feedback, or ideas about the Service, you grant us the right to use such feedback without restriction or compensation.',
      },
    ],
  },
  {
    id: 'data-privacy',
    title: '7. Data and Privacy',
    content: [
      'Our collection and use of personal data is governed by our Privacy Policy, which is incorporated into these Terms by reference. To the extent you process personal data of your employees or customers through the Service, you act as the data controller and Corely acts as the data processor.',
      'We will process such data only on your documented instructions and as necessary to provide the Service, in accordance with applicable data protection laws.',
    ],
  },
  {
    id: 'disclaimers',
    title: '8. Disclaimers',
    content: [
      'The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      'We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components, or that any defects will be corrected.',
    ],
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    content: [
      'To the fullest extent permitted by law, Corely and its affiliates, directors, employees, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business interruption, arising out of or related to your use of or inability to use the Service.',
      'Our total cumulative liability to you for any claims arising out of or related to these Terms or the Service shall not exceed the greater of (a) the amount you paid to Corely in the 12 months preceding the claim, or (b) €100.',
    ],
  },
  {
    id: 'indemnification',
    title: '10. Indemnification',
    content: [
      'You agree to indemnify, defend, and hold harmless Corely and its affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with your use of the Service, your violation of these Terms, or your violation of any rights of a third party.',
    ],
  },
  {
    id: 'termination',
    title: '11. Termination',
    content: [
      'Either party may terminate these Terms at any time. You may cancel your subscription through your account settings. We may suspend or terminate your access immediately if you breach these Terms, fail to pay fees, or if required by law.',
      'Upon termination, your right to access the Service will cease. We will retain your Customer Data for 30 days following termination, during which time you may request an export. After this period, we will delete your data in accordance with our data retention policy.',
    ],
  },
  {
    id: 'governing-law',
    title: '12. Governing Law',
    content: [
      'These Terms shall be governed by and construed in accordance with the laws of Portugal, without regard to its conflict of law provisions. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts of Lisboa, Portugal.',
    ],
  },
  {
    id: 'changes',
    title: '13. Changes to Terms',
    content: [
      'We may revise these Terms from time to time. We will provide at least 14 days notice of material changes via email or a prominent notice within the Service. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    id: 'contact',
    title: '14. Contact Us',
    content: [
      'If you have questions about these Terms, please contact us:',
    ],
    contact: {
      email: 'hello@corely.pt',
      address: 'Corely Solution\nLisboa, Portugal',
    },
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-sans)]">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 opacity-90 transition-opacity duration-150 hover:opacity-100"
          >
            <Image src="/CoreLogonoBG.png" alt="Corely" width={36} height={36} className="rounded-lg" />
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
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-[#64748b]">Last updated: April 3, 2026</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#64748b]">
            Please read these terms carefully before using the Corely platform. They form a binding agreement between you and Corely Solution.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-4 text-lg font-semibold text-[#0f172a]">{section.title}</h2>

              {section.content?.map((p, i) => (
                <p key={i} className="mb-4 text-sm leading-relaxed text-[#475569]">
                  {p}
                </p>
              ))}

              {section.subsections?.map((sub) => (
                <div key={sub.title} className="mb-5 pl-4 border-l-2 border-[#e2e8f0]">
                  <h3 className="mb-2 text-sm font-semibold text-[#0f172a]">{sub.title}</h3>
                  <p className="text-sm leading-relaxed text-[#475569]">{sub.content}</p>
                </div>
              ))}

              {section.items && (
                <ul className="space-y-2 pl-1">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="mt-4 text-sm leading-relaxed text-[#475569]">{section.footer}</p>
              )}

              {section.contact && (
                <div className="mt-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4">
                  <p className="text-sm text-[#475569]">
                    Email:{' '}
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="text-[#2563eb] underline-offset-4 hover:underline"
                    >
                      {section.contact.email}
                    </a>
                  </p>
                  {section.contact.address.split('\n').map((line, i) => (
                    <p key={i} className="mt-1 text-sm text-[#475569]">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#e2e8f0] pt-8">
          <p className="text-xs text-[#94a3b8]">
            See also:{' '}
            <Link href="/privacy-policy" className="text-[#64748b] underline-offset-4 hover:underline hover:text-[#0f172a] transition-colors duration-150">
              Privacy Policy
            </Link>{' '}
            ·{' '}
            <Link href="/cookie-policy" className="text-[#64748b] underline-offset-4 hover:underline hover:text-[#0f172a] transition-colors duration-150">
              Cookie Policy
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
