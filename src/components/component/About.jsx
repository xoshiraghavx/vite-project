import React from 'react'
const benefits = [
    "Promotes hair growth and thickness",
    "Reduces hair fall and breakage",
    "Nourishes and conditions the scalp"
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
                Our herbal hair oil is formulated with a blend of ancient Ayurvedic ingredients to deeply nourish and
                strengthen your hair.
                </p>
                <ul className="space-y-3 text-[#666666]">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                    <LeafIcon className="h-6 w-6 text-[#5C8D4E]" />
                    <span>{benefit}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </div>
  )
}
function LeafIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>)
  );
}
export default About