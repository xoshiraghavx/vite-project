import Image from 'next/image';
import React from 'react'
const benefits = [
    "Promotes hair growth and thickness",
    "Nourishes and conditions the scalp",
    "Reduces hair fall and breakage",
    
  ];
const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              alt="Herbal Hair Oil"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              height="400"
              src="/image1.jpeg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400" />
          </div>
          <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">Nourish Your Hair Naturally</h2>
                <p className="text-lg md:text-xl text-[#666666]">
                At Herbal Locks, we are dedicated to promoting healthy, lustrous hair through the ancient wisdom of Ayurveda. We believe in using nature's bounty responsibly. That's why our hair oil is made without harsh chemicals.

                </p>
                <ul className="space-y-3 text-[#666666]">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                    <Image src="/logo.svg" alt="leaf" width={15} height={15} className="h-8 w-8 text-[#5C8D4E] img" />
                    <span>{benefit}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </div>
  )
}
export default About