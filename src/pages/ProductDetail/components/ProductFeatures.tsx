
import React from 'react';

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">주요 특징</h2>
      <ul className="list-disc list-inside text-gray-600">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFeatures;
