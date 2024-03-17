import React from 'react';
import CategoryBox from './CategoryBox';

const Category = () => {
  return (
    <div className="relative mx-4 mb-5 flex h-auto w-full flex-col gap-y-4">
      <CategoryBox type={0} />
      <CategoryBox type={1} />
      <CategoryBox type={2} />
      <CategoryBox type={3} />
    </div>
  );
};

export default Category;
