'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import { IoArrowBackCircle } from "react-icons/io5";
import Image from 'next/image';

const MensClothing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading state
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to handle the button click event
  const goBack = () => {
    if (isClient) {
      // Navigate back to the previous page only on the client-side
      window.history.back();
    }
  };

  useEffect(() => {
    if (isClient) {
      const fetchProducts = async () => {
        try {
          // Simulate loading delay
          setTimeout(async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`);
            setProducts(response.data);
            setLoading(false); // Set loading to false when data is fetched
          }, 2000); // 2 seconds delay
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }
  }, [isClient]);

  return (
    <>
    <Header/>
    <div className="container app px-4 mx-auto py-8 scroll-smooth"style={{ backgroundImage: `url('/images/cover.jpg')`, }}>
      <button onClick={goBack}
      className='bg-stone-700 w-[125px] flex text-gray-300 hover:bg-stone-800 drop-shadow-lg px-4 py-2 rounded-full mb-4'>
        <IoArrowBackCircle className="mr-2 animate-spin text-2xl text-lime-400" />
        Go Back</button>
      <h1 className="text-xl font-bold text-stone-800 mb-4">Men&apos;s Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? ( // Conditional rendering based on loading state
          // Skeleton loader while loading
          Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="bg-stone-600 p-1 md:rounded-2xl rounded-lg shadow-lg">
                  <div className="w-full h-60 bg-gray-300 animate-pulse mb-2"></div>
                  <div className="h-6 bg-gray-300 animate-pulse mb-2"></div>
                  <div className="h-6 bg-gray-300 animate-pulse"></div>
                </div>
          ))
        ) : (
          // Render products once data is fetched
          products.map((product) => (
            <Link key={product.id} 
            className="flex-col bg-gradient-to-b p-2 from-gray-100  cursor-pointer  via-stone-200 to-gray-400 border-4 border-solid border-stone-300 hover:border-stone-400 rounded-lg md:rounded-2xl shadow-xl" 
            href={`/product/${product.id}`}>
              <div className="relative w-full h-60">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill 
                  className=" rounded-lg object-fill md:rounded-2xl" />
               </div>
                <h2 className="text-md font-semibold px-1 mt-4 mb-4">{product.title}</h2>
                <h5 className='text-indigo-900 px-1 font-semibold text-base underline decoration-pink-600 mb-2'>Product Description</h5>
                <p className="text-blue-900 px-1 text-sm overflow-hidden display-inline">{product.description}</p>
                <p className="text-base text-pink-700 px-1 font-semibold mt-2"><span className='mr-1 font-semibold text-base text-stone-800'>Price </span>${product.price}</p>
              
            </Link>
          ))
        )}
      </div>
    </div>
    <div className='see'>
    <Footer/>
    </div>
    </>
  );
};

export default MensClothing;
