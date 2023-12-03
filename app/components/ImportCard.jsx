"use client";
import { useState } from "react";
import Product from "./searchProductsContainers/Product";
import Variants from "./searchProductsContainers/Variants";
import Description from "./searchProductsContainers/Description";
import Image from "./searchProductsContainers/Image";

const ImportCard = () => {
  const [displayComponent, setDisplayComponent] = useState("product");

  const handleClick = (component) => {
    setDisplayComponent(component);
  };

  const getTextColor = (component) => {
    return displayComponent === component ? "text-primary" : "text-secondary";
  };

  return (
    <div className="mt-10 w-full border-[1px] border-secondary border-opacity-20 shadow-lg rounded-2xl">
      <div className="w-full border-b-[1px] border-secondary border-opacity-20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-secondary rounded-full opacity-20 mr-5"></div>
          <div className="flex gap-8 text-secondary pl-6 border-l-[1px]">
            <div
              onClick={() => handleClick("product")}
              className={getTextColor("product")}
            >
              Product
            </div>
            <div
              onClick={() => handleClick("variants")}
              className={getTextColor("variants")}
            >
              Variants/Price
            </div>
            <div
              onClick={() => handleClick("description")}
              className={getTextColor("description")}
            >
              Description
            </div>
            <div
              onClick={() => handleClick("image")}
              className={getTextColor("image")}
            >
              Image
            </div>
          </div>
        </div>

        <div>
          <button className="bg-accent text-white px-4 h-10 rounded-2xl shadow-lg">
            Import
          </button>
        </div>
      </div>
      <div className="p-6">
        {displayComponent === "product" && <Product />}
        {displayComponent === "variants" && <Variants />}
        {displayComponent === "description" && <Description />}
        {displayComponent === "image" && <Image />}
      </div>
    </div>
  );
};

export default ImportCard;
