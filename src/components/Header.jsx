'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaAppStore, FaSearch, FaChevronDown, FaChevronUp, FaShoppingCart, FaThLarge, FaFemale, FaHome, FaMale } from 'react-icons/fa';
import { FcElectronics } from "react-icons/fc";
import { GiDiamondRing } from "react-icons/gi";
import axios from 'axios';
import Ripples from 'react-ripples';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  
 
 
  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };
  
    
    
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    // Filter products based on search term
    const results = products.filter(product =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };


  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-zinc-800 bg-opacity-90 rounded-b-md bg-transparent backdrop-filter backdrop-blur-[2px] dark:border-bg dark:border-gray-800">
      <div className="container flex items-center justify-between gap-2 h-28 md:h-16 px-4 md:px-6">
        
        {/* Logo and home link */}
        <div className='flex flex-col gap-4 md:flex-row justify-between w-full'> 
        <Link href="/" className="flex items-center gap-2 transition-colors">
          <FaAppStore className="h-6 w-6 text-lime-400" />
          <span className="md:text-2xl text-lg  font-semibold text-lime-500 ">Product Store</span>
        </Link>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-md relative">
          <form>
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <input
              type="search"
              id="searching"
              name="find"
              placeholder="Search products..."
              className="pl-10 w-full h-10 rounded-md focus:outline-none focus:border-4 focus:rounded-md focus:border-w-1 focus:border-double dark:border-gray-300 bg-stone-600 dark:text-gray-50"
              value={searchTerm}
              onChange={handleChange}
            />
          </form>
          {/* Show search suggestions */}
          {searchTerm && (
            <div className="absolute flex-col left-0 right-0 mt-2 h-[50vh] overflow-hidden overflow-scroll  overflow-x-hidden scroll-smooth overflow-scroll-y dark:bg-stone-600  border border-gray-200 dark:border-gray-800 rounded-lg shadow-md z-50">
              {searchResults.map((product, index) => (
                <div key={index} className="p-2 flex divide-x divide-lime-600 items-center hover:rounded-lg dark:hover:bg-gray-800 border border-stone-700">
                  <img src={product.image} alt={product.title} className="flex w-9 h-auto mr-2 object-cover" />
                   <div className='p-3'>
                    <p className="flex text-sm text-gray-200 font-semibold">{product.title}</p>
                    <p className=" flex text-xs text-blue-300">in {product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
        <Ripples>
          <Link href="/" className="text-sm hover:bg-stone-600 hover:p-2 p-2 hover:rounded-md font-medium text-primary hover:text-primary-500 underline underline-offset-4 hover:decoration-lime-600 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
            Home
          </Link>
        </Ripples>
          <div className="relative group">
        <Ripples>
            <button onClick={toggleCategories} className="flex text-sm hover:bg-stone-600 hover:p-2 p-2 hover:rounded-md font-medium text-primary hover:text-primary-500 hover:decoration-lime-600 underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
              Categories
              {categoriesOpen ? <FaChevronUp className="h-3 w-3 m-1 ml-2 text-lime-500" /> : <FaChevronDown className="h-3 w-3 m-1 ml-2 text-gray-300" />}
            </button>
          </Ripples>
            {categoriesOpen && (
              <div className="absolute flex top-12 right-1 dark:bg-stone-600 divide-x divide-lime-500 outline outline-1 outline-white border-2 border-stone-600 rounded-2xl drop-shadow shadow-xl">
                <Ripples>
                <Link href="/mens-clothing" className="flex px-2 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-lime-600 hover:rounded-l-2xl">
                  Men's Clothing
                </Link>
                </Ripples>
                <Ripples>
                <Link href="/womens-clothing" className="flex px-2 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-lime-600">
                  Women's Clothing
                </Link>
                </Ripples>
                <Ripples>
                <Link href="/electronics" className="flex px-2 pr-8 pt-4 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-lime-600">
                  Electronics
                </Link>
                </Ripples>
                <Ripples className='flex pl-2 pr-5  pt-4 text-sm dark:text-gray-300 cursor-pointer hover:text-white dark:hover:bg-lime-600 hover:rounded-r-2xl'>
                <Link href="/jewelery">
                  Jewelery 
                </Link>
                </Ripples>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile menu toggle button */}
        <div className="md:hidden pb-12">
          <button onClick={toggleMenu} className="hover:text-stone-300 text-lime-500 transition-colors">
            {menuOpen ? <FaTimes className="h-6 w-6 text-primary" /> : <FaBars className="h-6 w-6 text-primary" />}
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </div>
      </div>
       
      
      {/* Mobile menu */}
      {menuOpen && (
       
          <div className="container flex py-4 ">
            <div className='bg-lime-600 border border-red-100 600 flex ml-3 rounded-lg'>
            <nav className="grid p-2 gap-2 divide-y divide-solid divide-gray-400 ">
              
              <Link href="/" className="flex items-center gap-2 text-base font-medium">
              <FaHome className="h-6 w-6 text-black" />
              <span className='text-gray-800 hover:text-gray-200 '>Home</span>
              </Link>
              <div className="relative group ">
                <button onClick={toggleCategories} className="flex items-center gap-2 text-base font-medium text-gray-800">
                  <FaThLarge className="h-5 w-5 text-black" />
                  <span className='hover:text-gray-300'>Categories</span>
                  {categoriesOpen ? <FaChevronUp className="h-4 w-4 ml-3 text-black" /> : <FaChevronDown className="h-4 w-4 ml-3 text-black" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${categoriesOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className='bg-stone-800 border border-gray-100 mt-2 divide-y rounded-md divide-solid divide-gray-600'>
                  <Link href="/mens-clothing" className="flex justify-around block px-4 py-2 text-sm dark:text-gray-400 hover:bg-gray-900 hover:text-gray-300 hover:rounded-t-md">
                  <FaMale className=' h-5 w-6 left-0 text-gray-400'/>
                    Men's Clothing
                  </Link>
                  <Link href="/womens-clothing" className="flex justify-around block px-4 py-2 text-sm dark:text-gray-400 hover:bg-gray-900 hover:text-gray-300">
                  <FaFemale className='h-5 w-6 left-0 text-gray-400'/>
                    Women's Clothing
                  </Link>
                  <Link href="/electronics" className="flex justify-evenly block px-4 py-2 text-sm dark:text-gray-400 hover:bg-gray-900 hover:text-gray-300">
                  <FcElectronics className='h-5 w-6 left-0'/> 
                    Electronics
                  </Link>
                  <Link href="/jewelery" className="flex justify-evenly block px-4 py-2 text-sm dark:text-gray-400 hover:bg-gray-900 hover:text-gray-300 hover:rounded-b-md">
                  <GiDiamondRing className='h-5 w-6 left-0 text-gray-400'/> 
                    Jewelery
                  </Link>
                  </div>
                </div>
              </div>
              <Link href="/cart" className="flex items-center gap-2 text-base font-medium ">
                <FaShoppingCart className="h-5 w-5 text-black" />
                <span className='text-gray-800 hover:text-gray-300'>Cart</span>
              </Link>
            </nav>
            </div>
          </div>
      )}
    </header>
  );
};

export default Header;
