import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Corely',
  description: 'Learn how Corely collects, uses, and protects your personal information.',
}

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: [
      'Corely Solution ("Corely", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and related services (the "Service").',
      'By accessing or using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of the Service.',
    ],
  },
  {
    id: 'information-collected',
    title: '2. Information We Collect',
    subsections: [
      {
        title: 'Account Information',
        content:
          'When you register for an account, we collect information such as your name, email address, company name, and password. If you subscribe to a paid plan, we also collect billing information through our payment processor.',
      },
      {
        title: 'Usage Data',
        content:
          'We automatically collect certain information when you interact with the Service, including IP address, browser type, operating system, referring URLs, pages visited, features used, and timestamps of activity.',
      },
      {
        title: 'Content Data',
        content:
          'We store the data you input into the platform — including inventory records, fleet information, project details, and team data — in order to provide the Service to you.',
      },
      {
        title: 'Device and Log Information',
        content:
          'We collect diagnostic and performance data such as crash reports, log data, and device identifiers to help us maintain and improve the Service.',
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    items: [
      'Provide, operate, and maintain the Service',
      'Process transactions and send related information, including purchase confirmations and invoices',
      'Send administrative information, such as changes to our terms or policies',
      'Respond to inquiries, technical issues, and support requests',
      'Monitor and analyse usage patterns to improve the Service',
      'Detect, investigate, and prevent fraudulent or unauthorised activity',
      'Comply with legal obligations',
    ],
  },
  {
    id: 'data-sharing',
    title: '4. Data Sharing and Disclosure',
    content: [
      'We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:',
    ],
    subsections: [
      {
        title: 'Service Providers',
        content:
          'We engage trusted third-party companies to perform functions on our behalf, such as hosting, payment processing, analytics, and customer support. These providers have access to your information only as necessary to perform their functions and are contractually obligated to maintain confidentiality.',
      },
      {
        title: 'Business Transfers',
        content:
          'If Corely is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or a prominent notice on our website of any change in ownership.',
      },
      {
        title: 'Legal Requirements',
        content:
          'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g. a court order or government agency).',
      },
    ],
  },
  {
    id: 'cookies',
    title: '5. Cookies and Tracking',
    content: [
      'We use cookies and similar tracking technologies to enhance your experience on the Service. For a detailed explanation of the cookies we use and your choices, please see our Cookie Policy.',
    ],
  },
  {
    id: 'data-retention',
    title: '6. Data Retention',
    content: [
      'We retain your personal information for as long as your account is active or as needed to provide you with the Service. You may request deletion of your account at any time by contacting us at privacy@corely.pt. We will delete or anonymise your information within 30 days, except where we are required to retain it for legal or legitimate business purposes.',
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Rights',
    content: [
      'Depending on your jurisdiction, you may have the following rights regarding your personal information:',
    ],
    items: [
      'Access — request a copy of the personal data we hold about you',
      'Rectification — request correction of inaccurate or incomplete data',
      'Erasure — request deletion of your personal data ("right to be forgotten")',
      'Restriction — request that we limit processing of your data',
      'Portability — receive your data in a structured, machine-readable format',
      'Objection — object to processing of your data for certain purposes',
      'Withdraw consent — where processing is based on consent, withdraw it at any time',
    ],
    footer:
      'To exercise any of these rights, contact us at privacy@corely.pt. We will respond within 30 days.',
  },
  {
    id: 'security',
    title: '8. Security',
    content: [
      'We implement industry-standard technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. These include encryption in transit (TLS), encryption at rest, access controls, and regular security reviews.',
      'No method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: "9. Children's Privacy",
    content: [
      'The Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.',
    ],
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we will also send a notification to the email address associated with your account.',
      'Your continued use of the Service after changes become effective constitutes acceptance of the revised policy.',
    ],
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: [
      'If you have questions or concerns about this Privacy Policy or our data practices, please contact us:',
    ],
    contact: {
      email: 'privacy@corely.pt',
      address: 'Corely Solution\nLisboa, Portugal',
    },
  },
]

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#64748b]">Last updated: April 3, 2026</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#64748b]">
            This policy describes how Corely collects, uses, and shares information about you when you use our platform and related services.
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
            <Link href="/terms-of-service" className="text-[#64748b] underline-offset-4 hover:underline hover:text-[#0f172a] transition-colors duration-150">
              Terms of Service
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
