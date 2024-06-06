import Image from 'next/image';
import React from 'react'
const items = ["Sunflower Oil", "Fenugreek Seed", "Hibiscuc Leaves", "Coconut Oil", "Nigella Seed", "Curry Leaves", "Mustard Oil", "Aloe Vera", "Neem Leaves", "Til Oil", "Vitamin E", "Shikakai","Tulsi", "Amla", "Onion",];

const Ingredient = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex gap-14">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">Ingredients That Nourish</h2>
            <p className="text-lg md:text-xl text-[#666666] w-[50vw]">
            Our herbal hair oil combines carefully selected Ayurvedic botanicals renowned for their hair-nourishing properties. This potent blend delivers vital nutrients to promote healthy hair growth and strengthen strands from root to tip.
            </p>
            <div className="grid grid-cols-3 gap-4">
                {items.map((item, index) => (
                <div
                key={index}
                className="flex items-center space-x-3 transition-colors duration-300 hover:text-[#5C8D4E]"
                >
                  <Image src="/logo.svg" alt="leaf" width={15} height={15} className="h-8 w-8 text-[#5C8D4E] img" />
                    <span className="text-[#666666]">{item}</span>
                </div>
                ))}
            </div>
          </div>
          <div>
            <img
              alt="Herbal Ingredients"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              height="400"
              src="/image2.jpeg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400" />
          </div>
        </div>
      </div>
  )
}

export default Ingredient