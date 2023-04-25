import React from 'react'

export default function HeroSection() {
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-6 lg:my-24 my-12'>
      <div className='center gap-2'>
      <h1 className='text-2xl lg:text-4xl font-bold text-black uppercase'>Creative</h1><span className='text-red-600 text-2xl lg:text-4xl font-bold uppercase'> Showcase</span>
      </div>
      <p className='lg:text-lg  text-black text-center'>Explore our impressive range of advertising activations in action. We believe that advertising is not just about creating a catchy tagline or a stunning {`visual;`} it is about creating an experience that connects with your audience. That is why we offer a variety of advertising activations, including static media, digital media, and on-ground activations, to help you achieve your advertising goals.
      <br/>With our creative designs and strategic placements, we ensure that your message is seen by high-value audiences in captive space. Browse our gallery to see some of our recent advertising activations in action. Whether {`you're`} looking to launch a new product, raise awareness for a cause, or simply build brand recognition, we have the expertise and creativity to skyrocket your marketing goals.</p>
    </section>
  )
}
