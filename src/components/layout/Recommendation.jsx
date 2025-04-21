import React from "react";

const Recommendation = () => {
  const recommendations = Array.from({ length: 20 }, (_, index) => ({
    image: `/src/assets/mockup.png`, // Placeholder image
    lines: [
      ` 560₽ `,
      ` Название товара `,
      ` Тип товара • Игра • Осталось:500`,
    ],
  }));

  return (
    <div
      className="px-26 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[22px]"
      style={{
        width: "100%",
        maxWidth: "1254.15px",
        height: "auto",
        margin: "0 auto",
      }}
    >
      {recommendations.map((rec, index) => (
        <div>
          <div
            key={index}
            className="px-0 bg-white   shadow-lg flex flex-col"
          >
            <img
              src={rec.image}
              alt={rec.title}
              className="h-auto max-w-full" // Image styling
            />
          </div>
          <div>
            <h3 className="text-center font-semibold mb-2">{rec.title}</h3>
            {rec.lines.map((line, lineIndex) => (
              <p key={lineIndex} className="text-center text-gray-700">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
