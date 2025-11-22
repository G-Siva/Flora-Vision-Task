import React from 'react'
import SectionTitle from '../layout/SectionTitle'
import GlassCard from '../layout/GlassCard'
import { images } from '@/assets/assets'

const Testimonials = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center text-3xl mb-18">
          <SectionTitle text1={"Customer"} text2={"Review"} />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 lg:mt-4">
          
          {/* CARD 1 */}
          <GlassCard 
            clipped 
            className="h-full min-h-[330px] flex flex-col justify-start p-6">
            <div className="flex items-center gap-4 mb-5">
              <img 
                className="w-16 h-16 object-cover rounded-full" 
                src={images.testimonial} 
                alt="customer-1" 
              />
              <div>
                <h3 className="font-semibold text-2xl text-white">Shelly Russel</h3>
              </div>
            </div>

            <p className="font-normal text-xl text-white/90 leading-relaxed">
              Just got my hands on some absolutely awesome plants, 
              and I couldn't be happier!
            </p>
          </GlassCard>

          {/* CARD 2 */}
          <GlassCard 
            clipped 
            className="h-full min-h-[330px] flex flex-col justify-start p-6">
            <div className="flex items-center gap-4 mb-5">
              <img 
                className="w-16 h-16 object-cover rounded-full" 
                src={images.testimonial2} 
                alt="customer-2" 
              />
              <div>
                <h3 className="font-semibold text-2xl text-white">Lula Rolfson</h3>
              </div>
            </div>

            <p className="font-normal text-xl text-white/90 leading-relaxed">
              Each one has its own unique charm and personality, and they’ve already 
              started brightening up my space. The vibrant colors and fresh greenery 
              make such a huge difference in my home.
            </p>
          </GlassCard>

          {/* CARD 3 */}
          <GlassCard 
            clipped 
            className="h-full min-h-[330px] flex flex-col justify-start p-6">
            <div className="flex items-center gap-4 mb-5">
              <img 
                className="w-16 h-16 object-cover rounded-full" 
                src={images.testimonial3} 
                alt="customer-3" 
              />
              <div>
                <h3 className="font-semibold text-2xl text-white">Carol Huels</h3>
              </div>
            </div>

            <p className="font-normal text-xl text-white/90 leading-relaxed">
              It's like bringing a little piece of nature indoors. Definitely worth 
              the investment—my plant collection has never looked better!
            </p>
          </GlassCard>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
