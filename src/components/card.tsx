import React from 'react';

interface CardProps {
  product: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index:number
}

const Card: React.FC<CardProps> = ({ product,index }) => {
  return (
    <div key={index} className="bg-white p-6 rounded-lg shadow-md transition ease-in-out delay-150 cursor-pointer hover:scale-110">
      <div className={`text-blue-500 mb-4 animate-ping absolute duration-[10000ms] delay-${index*100} ease-in-out`}>{product.icon}</div>
      <div className="text-blue-500 mb-4 ">{product.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};

export default Card; 