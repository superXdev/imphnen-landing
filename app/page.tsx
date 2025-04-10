import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Community from "@/components/community"
import LearningResources from "@/components/learning-resources"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Community />
        <LearningResources />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
