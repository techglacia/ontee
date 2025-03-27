"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { addItem } from "../../redux/slices/cartSlice";
import { notFound } from "next/navigation";
import { useEffect, useRef } from "react";
import Link from 'next/link';
import './../../globals.css';
import Glider from "glider-js";
import "glider-js/glider.min.css";

const hoodies = [
  { 
    id: 1, 
    name: 'Noir Essence Tee', 
    category: 'Tees', 
    price: 1199, 
    images: [
      '/images/products/tshirts/pblackf.png',
      '/images/products/tshirts/pblackb.png'
    ], 
    colors: ['Black'],
    sizes: ['S','M','L','XL'],
    description: 'A timeless black tee that embodies sophistication and versatility. Perfect for any occasion, it offers a sleek and effortless style statement.'
  },
  { 
    id: 2, 
    name: 'Olive Luxe Tee', 
    category: 'Tees', 
    price: 1199, 
    images: [
      '/images/products/tshirts/polivef.png',
      '/images/products/tshirts/poliveb.png'
    ], 
    colors: ['Olive'],
    sizes: ['S','M','L','XL'],
    description: 'A rich olive-green tee crafted for those who appreciate understated elegance. A perfect blend of comfort and modern style.'
  },
  { 
    id: 3, 
    name: 'Beige Serenity Tee', 
    category: 'Tees', 
    price: 1199, 
    images: [
      '/images/products/tshirts/pbeigef.png',
      '/images/products/tshirts/pbeigeb.png'
    ], 
    colors: ['Beige'],
    sizes: ['S','M','L','XL'],
    description: 'Soft and soothing, this beige tee brings a sense of calm and effortless charm to your wardrobe. Ideal for a relaxed, refined look.'
  },
  { 
    id: 5, 
    name: 'Lavender Bliss Tee', 
    category: 'Tees', 
    price: 1199, 
    images: [
      '/images/products/tshirts/ppurplef.png',
      '/images/products/tshirts/ppurpleb.png'
    ], 
    colors: ['Purple'],
    sizes: ['S','M','L','XL'],
    description: 'A delicate lavender hue that adds a touch of serenity and sophistication. Perfect for those who love a unique yet subtle fashion statement.'
  },
  { 
    id: 6, 
    name: 'Ivory Elegance Tee', 
    category: 'Tees', 
    price: 1199, 
    images: [
      '/images/products/tshirts/pwhitef.png',
      '/images/products/tshirts/pwhiteb.png'
    ], 
    colors: ['White'],
    sizes: ['S','M','L','XL'],
    description: 'Classic white with a refined touch. A wardrobe essential that exudes freshness and simplicity while keeping it effortlessly stylish.'
  },
  { 
    id: 7, 
    name: 'Midnight Navy Tee', 
    category: 'Tees', 
    price: 1199, 
    images: [
      '/images/products/tshirts/pnavyf.png',
      '/images/products/tshirts/pnavyb.png'
    ], 
    colors: ['Navy'],
    sizes: ['S','M','L','XL'],
    description: 'Deep navy tones that blend boldness with elegance. A go-to choice for those who prefer a sophisticated yet laid-back look.'
  },
  { 
    id: 8, 
    name: 'Obsidian Charm Tee', 
    category: 'Tees', 
    price: 1199, 
    images: [
      '/images/products/tshirts/pblackf.png',
      '/images/products/tshirts/pblackb.png'
    ], 
    colors: ['Black'],
    sizes: ['S','M','L','XL'],
    description: 'Dark, mysterious, and effortlessly stylish. This black tee makes a powerful statement, perfect for those who embrace bold fashion choices.'
  }
];









function Page () {
// glide js
const gliderRef = useRef(null);

  useEffect(() => {
    if (gliderRef.current) {
      import("glider-js").then((GliderModule) => {
        new GliderModule.default(gliderRef.current, {
          slidesToShow: 1, // Show only 1 image at a time
          slidesToScroll: 1, // Move 1 image per click
          draggable: true, // Enable swipe gestures
          scrollLock: true, // Smooth transition
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
          },
          duration: 0.5, // Animation speed
        });
      });
    }
  }, []);



  const dispatch = useDispatch();
  const { id } = useParams();
  const hoodie = hoodies.find((h) => h.id === Number(id));
  
  if (!hoodie) {
    return notFound();
  }

const [selectedColor, setSelectedColor] = useState(hoodie?.colors?.[0] || "");
const [selectedSize, setSelectedSize] = useState(hoodie?.sizes?.[0] || "");


  

const handleAddToCart = () => {
  if (!selectedColor) {
    alert("Please select a color and size before adding to cart.");
    return;
  }

  dispatch(
    addItem({
      id: hoodie.id,
      name: hoodie.name,
      price: hoodie.price,
      image: hoodie.images[0],
      category: hoodie.category,
      selectedColor,
      selectedSize,
    })
  );
};


  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap my-10 ">
        {/* Image Slider */}
        <div className="lg:w-1/2 w-full">
          <div className="glider-contain">
            <div className="glider" ref={gliderRef}>
              {hoodie.images.map((img, index) => (
      <img
      key={index}
      src={img}
      alt={`Hoodie ${index + 1}`}
      className="w-40 h-40 object-contain rounded-lg"
    />
    
         
            
              ))}
            </div>
            <button className="glider-prev bg-gray-800 text-white px-3 py-1 rounded">‹</button>
            <button className="glider-next bg-gray-800 text-white px-3 py-1 rounded">›</button>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            {hoodie.category}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {hoodie.name}
          </h1>
          <p className="leading-relaxed">{hoodie.description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <span className="title-font font-medium text-2xl text-gray-900">
              Rs {hoodie.price}
            </span>
           
          </div>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {/* Color Selection as Dropdown */}
              <div className="flex flex-col mr-6">
                <label className="mr-3 font-medium">Color</label>
                <select 
  value={selectedColor}
  onChange={(e) => setSelectedColor(e.target.value)}
>
  {hoodie?.colors?.map((color, index) => (
    <option key={index} value={color}>{color}</option>
  )) || <option value="">No colors available</option>}
</select>
              </div>
              
              {/* Size Selection as Dropdown */}
              <div className="flex flex-col">
                <label className="mr-3 font-medium">Size</label>
                <select 
  value={selectedSize}
  onChange={(e) => setSelectedSize(e.target.value)}
>
  {hoodie?.sizes?.map((size, index) => (
    <option key={index} value={size}>{size}</option>
  )) || <option value="">No sizes available</option>}
</select>
              </div>
            </div>
          <button
            onClick={handleAddToCart}   className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Add to Cart
          </button>
          <Link href={"/size-guide"}>Size Guide</Link>
         
        </div>
      
      </div>
    </div>
  </section>
  );
}

export default Page;