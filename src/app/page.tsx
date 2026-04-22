import dynamic from 'next/dynamic'
import { LandingNav } from './sections/landing-nav'
import { BackToTop } from './sections/back-to-top'
import { HeroSection } from './sections/hero-section'
import { LogoStripSection } from './sections/logo-strip-section'
import { Footer } from './sections/footer'

// Below-fold sections — dynamically imported for chunk splitting
const ProblemSection = dynamic(() => import('./sections/problem-section').then(m => ({ default: m.ProblemSection })))
const SolutionSection = dynamic(() => import('./sections/solution-section').then(m => ({ default: m.SolutionSection })))
const FeaturesSection = dynamic(() => import('./sections/features-section').then(m => ({ default: m.FeaturesSection })))
const HowItWorksSection = dynamic(() => import('./sections/how-it-works-section').then(m => ({ default: m.HowItWorksSection })))
const VSSpreadsheets = dynamic(() => import('./sections/vs-spreadsheets').then(m => ({ default: m.VSSpreadsheets })))
const CostSavingsSection = dynamic(() => import('./sections/cost-savings-section').then(m => ({ default: m.CostSavingsSection })))
const StatsSection = dynamic(() => import('./sections/stats-section').then(m => ({ default: m.StatsSection })))
const TestimonialsSection = dynamic(() => import('./sections/testimonials-section').then(m => ({ default: m.TestimonialsSection })))
const ChecklistSection = dynamic(() => import('./sections/checklist-section').then(m => ({ default: m.ChecklistSection })))
const PricingSection = dynamic(() => import('./sections/pricing-section').then(m => ({ default: m.PricingSection })))
const FAQSection = dynamic(() => import('./sections/faq-section').then(m => ({ default: m.FAQSection })))
const CTASection = dynamic(() => import('./sections/cta-section').then(m => ({ default: m.CTASection })))

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      <BackToTop />
      <main>
        <HeroSection />
        <LogoStripSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VSSpreadsheets />
        <CostSavingsSection />
        <StatsSection />
        <TestimonialsSection />
        <ChecklistSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
