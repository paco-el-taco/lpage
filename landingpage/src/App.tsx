import './App.css'
import BenefitsSection from './components/BenefitsSection'
import ClosingCtaSection from './components/ClosingCtaSection'
import FaqSection from './components/FaqSection'
import HeroSection from './components/HeroSection'
import MidCtaSection from './components/MidCtaSection'
import PrefooterSection from './components/PrefooterSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import StorySection from './components/StorySection'
import TestimonialsSection from './components/TestimonialsSection'

function App() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <BenefitsSection />
      <MidCtaSection />
      <StorySection />
      <TestimonialsSection />
      <ClosingCtaSection />
      <FaqSection />
      <PrefooterSection />
      <SiteFooter />
    </main>
  )
}

export default App
