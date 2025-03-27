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
    name: 'Eternal Eclipse', 
    category: 'Omen of Ash', 
    price: 1550, 
    images: [
      '/images/products/graphictees/blackgraphicf.png', 
      '/images/products/graphictees/blackgraphicb.png'
    ],
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A deep black tee infused with the mystery of the night. Featuring the "ETERNAL" print, it’s a symbol of timeless energy—made for those who embrace the shadows and shine in their own way.'
  },
  { 
    id: 2, 
    name: 'Eternal Halo', 
    category: 'Omen of Ash', 
    price: 1550, 
    images: [
      '/images/products/graphictees/whitegraphicf.png', 
      '/images/products/graphictees/whitegraphicb.png'
    ],
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Pure, minimal, and effortlessly bold—this crisp white tee with "ETERNAL" branding is for those who radiate light while carrying an air of mystery. A celestial staple for your wardrobe.'
  },
  { 
    id: 3, 
    name: 'Eternal Ash', 
    category: 'Omen of Ash', 
    price: 1550, 
    images: [
      '/images/products/graphictees/olivegraphicf.png', 
      '/images/products/graphictees/olivegraphicb.png'
    ],
    colors: ['Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A muted grey tee that echoes resilience and quiet strength. With the "ETERNAL" mark, it’s made for those who stand firm through storms, unshaken and ever-evolving.'
  },
  { 
    id: 4, 
    name: 'Eternal Ember', 
    category: 'Omen of Ash', 
    price: 1550, 
    images: [
      '/images/products/graphictees/navygraphicf.png', 
      '/images/products/graphictees/navygraphicb.png'
    ],
    colors: ['Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A fiery red tee ignited with passion. The "ETERNAL" emblem represents an unbreakable spirit—a reminder that even the smallest spark can set the world ablaze.'
  },
  { 
    id: 5, 
    name: 'Eternal Dawn', 
    category: 'Omen of Ash', 
    price: 1550, 
    images: [
      '/images/products/graphictees/biegegraphicf.png', 
      '/images/products/graphictees/biegegraphicb.png'
    ],
    colors: ['Biege'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Soft like the first light of morning, this blush pink tee is both gentle and bold. "ETERNAL" is not just a word—it’s a statement of rebirth, new beginnings, and limitless potential.'
  },
];







function Product() {
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
           onClick={handleAddToCart}  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
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

export default Product;