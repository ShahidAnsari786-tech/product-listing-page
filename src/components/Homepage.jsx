'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { IoArrowBackCircle } from "react-icons/io5";
import Image from 'next/image';

// Homepage component
const Homepage = () => {
  // State to store fetched products
  const [products, setProducts] = useState([]);
  // State to control the view (categories or products)
  const [showCategories, setShowCategories] = useState(true);
  const [loading, setLoading] = useState(false);

  // Function to fetch products for a given category
  const fetchProducts = async (category) => {
    try {
      setLoading(true);
      setShowCategories(false); // Hide categories immediately
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to reset view to categories
  const showCategoriesView = () => {
    setShowCategories(true);
    setProducts([]);
  };

  return (
    <div className='bg-cover bg-center' style={{ backgroundImage: `url('/images/cover.jpg')` }}>
      <div className="container mx-auto px-4 py-6 scroll-smooth">
        {showCategories ? (
          <>
            <h1 className="text-2xl font-semibold text-stone-700 mb-6">Collections</h1>
            <div className="flex flex-wrap mx-4">
              {/* Women's Clothing category */}
              <a
                href="#_women's_Product"
                onClick={() => fetchProducts("women's clothing")}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6"
              >
                <div className="block border-4 border-stone-400 rounded-lg md:rounded-2xl hover:border-2 hover:border-stone-800 overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                  <div className="p-2 bg-stone-800">
                    <h2 className="text-base font-semibold text-gray-100">Women&apos;s Clothing</h2>
                  </div>
                  <hr className="border-stone-800" />
                  <div className="relative w-full h-48 md:h-80">
                    <Image 
                      src="/images/women.jpg"
                      alt="Women's Clothing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </a>
              {/* Men's Clothing category */}
              <a
                href="#_Men's_Product"
                onClick={() => fetchProducts("men's clothing")}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6"
              >
                <div className="block border-4 border-stone-400 rounded-lg md:rounded-2xl hover:border-2 hover:border-stone-800 overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                  <div className="p-2 bg-stone-800">
                    <h2 className="text-base font-semibold text-gray-100">Men&apos;s Clothing</h2>
                  </div>
                  <hr className="border-stone-800" />
                  <div className="relative w-full h-48 md:h-80">
                    <Image 
                      src="/images/men.jpg"
                      alt="Men's Clothing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </a>
              {/* Jewelry category */}
              <a
                href="#_Jwelery_Product"
                onClick={() => fetchProducts("jewelery")}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6"
              >
                <div className="block border-4 border-stone-400 rounded-lg md:rounded-2xl hover:border-2 hover:border-stone-800 overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                  <div className="p-2 bg-stone-800">
                    <h2 className="text-base font-semibold text-gray-100">Jewelery</h2>
                  </div>
                  <hr className="border-stone-800" />
                  <div className="relative w-full h-48 md:h-80">
                    <Image 
                      src="/images/jwelery.jpg"
                      alt="Jewelery"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </a>
              {/* Electronics category */}
              <a
                href="#_Electronics_Product"
                onClick={() => fetchProducts("electronics")}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6"
              >
                <div className="block border-4 border-stone-400 rounded-lg md:rounded-2xl hover:border-2 hover:border-stone-800 overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                  <div className="p-2 bg-stone-800">
                    <h2 className="text-base font-semibold text-gray-100">Electronics</h2>
                  </div>
                  <hr className="border-stone-800" />
                  <div className="relative w-full h-48 md:h-80">
                    <Image 
                      src="/images/electronics.jpg"
                      alt="Electronics"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </a>
            </div>
          </>
        ) : (
          <div className="mt-8">
            <button
              onClick={showCategoriesView}
              className="bg-stone-700 flex text-gray-300 hover:bg-stone-800 drop-shadow-lg px-4 py-2 rounded-full mb-4"
            >
              <IoArrowBackCircle className="mr-2 animate-spin text-2xl text-lime-400" />
              Go Back
            </button>
            <h2 className="text-xl font-semibold text-stone-800 mb-4">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {loading ? (
                // Skeleton loader while loading
                Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="bg-stone-600 p-1 md:rounded-2xl rounded-lg shadow-lg">
                    <div className="w-full h-60 bg-gray-300 animate-pulse mb-2"></div>
                    <div className="h-6 bg-gray-300 animate-pulse mb-2"></div>
                    <div className="h-6 bg-gray-300 animate-pulse"></div>
                  </div>
                ))
              ) : (
                // Render products once data is fetched
                products.map((product, index) => (
                  <div key={index} className="flex-col bg-gradient-to-b p-2 from-gray-100 cursor-pointer via-stone-200 to-gray-400 border-4 border-solid border-stone-300 hover:border-stone-400 rounded-lg md:rounded-2xl shadow-xl">
                    <div className="relative w-full h-60">
                      <Image 
                        src={product.image}
                        alt={product.title}
                        fill
                        className="rounded-lg object-fill md:rounded-2xl"
                      />
                    </div>
                    <h3 className="text-md font-semibold px-1 mt-4 mb-4">{product.title}</h3>
                    <h5 className='text-indigo-900 px-1 font-semibold text-base underline decoration-pink-600 mb-2'>Product Description</h5>
                    <p className="text-blue-900 px-1 text-sm overflow-hidden display-inline ">{product.description}</p>
                    <p className="text-base text-pink-700 px-1 font-semibold mt-2"><span className='mr-1 font-semibold text-base text-stone-800'>Price </span>${product.price}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
