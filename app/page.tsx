import { HeroSection } from "@/components/views/Home/HeroSection"
import { Struggle } from "@/components/views/Home/Struggle"
import { Solution } from "@/components/views/Home/Solution"
import { Benefits } from "@/components/views/Home/Benefits"
import { VoiceTraining } from "@/components/views/Home/VoiceTraining"
import { Results } from "@/components/views/Home/Results"
import { UseCases } from "@/components/views/Home/UseCases"
import { Pricing } from "@/components/views/Home/Pricing"
import { DemoPlayground } from "@/components/views/Home/DemoPlayground"
import { Trust } from "@/components/views/Home/Trust"
import { FeatureShowcase } from "@/components/views/Home/FeatureShowcase"
import { JourneyTimeline } from "@/components/views/Home/JourneyTimeline"
import { CommunityFeed } from "@/components/views/Home/CommunityFeed"
import { FAQ } from "@/components/views/Home/FAQ"
import { FinalCTA } from "@/components/views/Home/FinalCTA"
import { Footer } from "@/components/widgets/Footer"
import { Navbar } from "@/components/widgets/Navbar"
import { ScrollProgress } from "@/components/widgets/ScrollProgress"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Struggle />
        <Solution />
        <FeatureShowcase />
        <Benefits />
        <VoiceTraining />
        <JourneyTimeline />
        <CommunityFeed />
        <Results />
        <UseCases />
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600 blur-3xl dark:bg-purple-800"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-400 blur-3xl dark:bg-purple-600"></div>
          </div>
          <div className="relative">
            <Pricing />
            <FAQ />
          </div>
        </div>
        <DemoPlayground />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

