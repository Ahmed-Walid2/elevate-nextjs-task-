"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product)
    return <div className="text-center text-xl py-10">{<Spinner />}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        {product.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-50  object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <p className="text-lg font-semibold text-gray-800">
            Price: <span className="text-green-600">${product.price}</span>
          </p>
          <p className="text-lg text-gray-600">Category: {product.category}</p>
          <p className="text-base text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
