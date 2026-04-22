'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FadeInUp } from './shared'

const faqs = [
  { q: 'Is Corely only for live event companies?', a: 'No. Corely is built for any company with physical operations — production, logistics, warehouse, dock or fleet management. If you manage equipment, vehicles and teams in the field, Corely is for you.' },
  { q: 'How does inventory conflict detection work?', a: 'When you assign equipment to a project, Corely automatically checks if that item is already reserved for another project during the same period. If there is a conflict, you receive an alert before the problem even happens.' },
  { q: 'Can I control what each team member can see and do?', a: 'Yes. Corely features 3 access roles: Admin (full access), Warehouse (inventory and picking), and Sales (projects and reports). Each role sees only what is necessary for their work.' },
  { q: 'What documents does fleet management track?', a: 'Inspections, insurance, tachographs, licenses, and any other document you configure. Corely notifies you whenever a document is about to expire.' },
  { q: 'How long does onboarding take?', a: 'Most teams are up and running in less than a day. The Corely team is available to assist with the initial setup at no additional cost.' },
  { q: 'Is there a trial period?', a: 'During early access, Corely is completely free — no credit card, no time limit.' },
]

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-[#e2e8f0] bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeInUp className="mb-12 text-center">
          <p className="text-sm font-medium text-[#2563eb]">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            Can&apos;t find the answer you&apos;re looking for?{' '}
            <a href="mailto:hello@corely.pt" className="text-[#2563eb] underline-offset-4 hover:underline transition-colors duration-150">
              Reach out to us.
            </a>
          </p>
        </FadeInUp>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border border-[#e2e8f0] last:border-b bg-[#f8fafc] px-5 transition-colors duration-150 hover:border-[#cbd5e1]"
            >
              <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium text-[#0f172a] transition-colors duration-200 hover:text-[#2563eb] hover:no-underline [&[data-state=open]]:text-[#2563eb]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#64748b] pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
