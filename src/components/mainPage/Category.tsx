import React from 'react';
import CategoryBox from './CategoryBox';

const Category = () => {
  return (
    <div className="relative mx-4 mb-5 flex h-auto w-full flex-col gap-y-4">
      <CategoryBox type={'LANG'} />
      <CategoryBox type={'MATH'} />
      <CategoryBox type={'DEDUCE'} />
      <CategoryBox type={'SPATIAL'} />
    </div>
  );
};

export default Category;
