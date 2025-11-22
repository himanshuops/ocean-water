import React from "react";

const ProductList = ({ image, title }) => {
  return (
      <div className="bg-white h-[35vw] rounded-lg hover:shadow-md transition-all p-4 flex flex-col items-center text-center my-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    );
};

export default ProductList;
