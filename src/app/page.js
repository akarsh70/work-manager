import Image from 'next/image'
import BannerSection from '@/components/homepage/HomeBanner'
import FeatureSection from '@/components/homepage/FeatureSection'
import ActionSection from '@/components/homepage/ActionSection'
import TestimonialSection from '@/components/homepage/testimonial'
import ContactForm from '@/components/homepage/Contactform'
export const metadata = {
  title: "Home: Work Manager",
}
export default function Home() {
  return (
    <div>
      <BannerSection />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
    </div>
  )
}
