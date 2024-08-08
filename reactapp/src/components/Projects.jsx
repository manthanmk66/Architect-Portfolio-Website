import React, { useState } from "react";

const App = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const cardData = [
    {
      title: "AutoCAD Drawings",
      images: [
        {
          src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
          alt: "Image 1",
        },
        {
          src: "https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg",
          alt: "Image 2",
        },
      ],
    },
    {
      title: "Photoshop",
      images: [
        {
          src: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722384000&semt=ais_hybrid",
          alt: "Image 3",
        },
        {
          src: "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
          alt: "Image 4",
        },
        {
          src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
          alt: "Image 5",
        },
      ],
    },
    {
      title: "Illustrations",
      images: [
        {
          src: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
          alt: "Image 6",
        },
        {
          src: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
          alt: "Image 6",
        },
      ],
    },
  ];

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 m-4 shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          onClick={() => handleCardClick(index)}
        >
          <div className="text-xl font-bold">{card.title}</div>
          {activeCardIndex === index && (
            <div className="flex flex-wrap mt-4">
              {card.images.map((image, imgIndex) => (
                <div key={imgIndex} className="w-24 h-24 m-2">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
