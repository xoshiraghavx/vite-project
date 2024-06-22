"use client"; // Add this directive at the top

import React, { useState } from 'react';

const faqData = [
  { category: 'Product Information', questions: [
    { question: 'What ingredients are used in Herbal Locks Hair Oil?', answer: 'Our Herbal Locks Hair Oil is formulated with a blend of natural Ayurvedic ingredients, including Amla, Bhringraj, Brahmi, Neem, Coconut Oil,Sesame Oil and many more. These ingredients are known for their nourishing and strengthening properties, promoting healthy hair growth and reducing hair fall.' },
    { question: 'Is Herbal Locks Hair Oil suitable for all hair types?', answer: 'Yes, Herbal Locks Hair Oil is suitable for all hair types. Whether you have curly, straight, wavy, or coily hair, our oil provides essential nutrients that benefit all hair textures and conditions.' },
    { question: 'How often should I use Herbal Locks Hair Oil?', answer: 'For optimal results, we recommend using Herbal Locks Hair Oil 2-3 times a week. Regular use will help nourish your scalp, strengthen your hair, and promote healthy growth.' },
    { question: 'How should I apply the hair oil for best results?', answer: 'To achieve the best results divide your hair into manageable sections,apply oil, spread the oil from the roots to the tips of your hair, leave it on for at least 1-2 hours, or overnight for deep conditioning, Shampoo and condition your hair as usual.' },
    { question: 'Can I use Herbal Locks Hair Oil on colored or chemically treated hair?', answer: 'Yes, Herbal Locks Hair Oil is safe to use on colored or chemically treated hair. Its natural ingredients help nourish and restore the health of your hair, making it a great addition to your hair care routine.' },
    { question: 'What are the benefits of using Ayurvedic ingredients in hair care?', answer: 'Ayurvedic ingredients have been used for centuries to promote hair health. They offer several benefits, including: Nourishment, Strength, Growth, Scalp health, Natural shine' },
    { question: 'Are there any side effects of using Herbal Locks Hair Oil?', answer: 'Herbal Locks Hair Oil is made with natural ingredients and is generally safe for use. However, if you have any specific allergies to the ingredients listed, it is recommended to perform a patch test before using the product extensively. If you experience any irritation or adverse reactions, discontinue use and consult a healthcare professional.' },
  ]},
  { category: 'Purchase and Shipping', questions: [
    { question: 'Where can I purchase Herbal Locks Hair Oil?', answer: 'You can purchase Herbal Locks Hair Oil directly from our official website herballocks.in. Additionally, it is available on major online marketplaces and selected retail stores.' },
    { question: 'What are the shipping charges?', answer: 'Shipping charges vary based on your location and the weight of your package. Free shipping is available on orders over a certain amount, which will be detailed at checkout.' },
    { question: 'How long does it take to deliver my order?', answer: 'Orders are delivered within 3-7 business days, depending on your location.' },
  ] },
  { category: 'Orders and Payment', questions: [
    { question: 'What payment methods are accepted?', answer: 'We accept a variety of online payment methods for your convenience.' },
    { question: 'Can I change or cancel my order after placing it?', answer: 'If you need to change or cancel your order, please contact our customer service team as soon as possible. We can modify or cancel your order if it has not yet been processed or shipped. Once an order has been shipped, changes or cancellations are not possible.' },
    { question: 'What should I do if I receive a damaged or incorrect product?', answer: 'If you receive a damaged or incorrect product, please contact our customer service team immediately with your order number and photos of the damaged or incorrect item. We will arrange for a replacement or a refund, depending on your preference. Our priority is to ensure your satisfaction and resolve the issue promptly.' },
  ] },
  { category: 'General Queries', questions: [
    { question: 'How can I contact customer support?', answer: 'We accept a variety of online payment methods for your convenience.' },
    { question: 'How long does it take to see results with Herbal Locks Hair Oil?', answer: 'Yes, Herbal Locks Hair Oil is formulated with natural Ayurvedic ingredients known for their soothing and healing properties. It can help alleviate dandruff and other scalp issues by nourishing the scalp, reducing dryness, and promoting overall scalp health.' },
    { question: 'Can I leave the hair oil on overnight?', answer: 'Yes, you can leave Herbal Locks Hair Oil on overnight for deeper penetration and better results. Apply the oil evenly to your scalp and hair, massage it gently, and cover your head with a shower cap or a towel to prevent staining your pillow. Wash it off the next morning with a mild shampoo for best results.' },
    { question: 'Can Herbal Locks Hair Oil help with dandruff or scalp issues?', answer: 'You can contact our customer support team through Email, Contact Number or Social Media handels' },
  ] },
];

const HomeFaq = () => {
  const [selectedCategory, setSelectedCategory] = useState('Product Information');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setExpandedQuestion(null);
  };

  const handleQuestionClick = (question) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  return (
    <>
      <div className='text-center mb-[2rem]'>
        <h1 className='text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white'>
          FAQs
        </h1>
        <p className='mt-1 text-gray-600 dark:text-neutral-400'>
          We&apos;d love to solve any of your queries.
        </p>
      </div>
      <div className="flex justify-center items-ceter 	">
        <div className=" p-4 border-r">
          <div className="font-bold text-xl mb-4">Table of Content</div>
          {faqData.map((item) => (
            <div
              key={item.category}
              className={`cursor-pointer p-2 ${selectedCategory === item.category ? 'text-[#5D8927]' : 'text-gray-700'}`}
              onClick={() => handleCategoryClick(item.category)}
            >
              {item.category}
            </div>
          ))}
        </div>
        <div className="p-4 w-2/3">
          {faqData.find(item => item.category === selectedCategory).questions.map((q, idx) => (
            <div key={idx} className="mb-4">
              <div
                className="cursor-pointer text-lg flex items-center"
                onClick={() => handleQuestionClick(q.question)}
              >
                <span className="mr-2">{expandedQuestion === q.question ? '-' : '+'}</span>
                {q.question}
              </div>
              {expandedQuestion === q.question && (
                <div className="pl-6 text-gray-700">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeFaq;
