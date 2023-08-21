export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import CardHover  from '../../components/CardHover'
import ApplicateCard from '../../components/ApplicateCard'



export default function Home() {
  return (
    <>
      <Hero />
      <CardHover/>
      <ApplicateCard/>

      
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
