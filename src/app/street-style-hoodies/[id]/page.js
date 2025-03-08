"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { addItem } from "../../redux/slices/cartSlice";
import { notFound } from "next/navigation";
import { useEffect, useRef } from "react";
import './../../globals.css';
import Glider from "glider-js";
import "glider-js/glider.min.css";

const hoodies = [ 
  { 
    id: 1, 
    name: 'Midnight Black Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    images: [
      '/images/products/hoodies/pblackf.png', 
      '/images/products/hoodies/pblackb.png'
    ],
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A classic black hoodie that never goes out of style. Made from a soft and durable fabric, it offers a relaxed fit perfect for everyday wear. Whether you’re heading out or just lounging at home, this hoodie keeps you looking sharp and feeling cozy all day long. The minimalist design makes it easy to pair with any outfit, ensuring a timeless, versatile look.'
  },
  { 
    id: 2, 
    name: 'Cloud White Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    images: [
      '/images/products/hoodies/pwhitef.png', 
      '/images/products/hoodies/pwhiteb.png'
    ],
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A clean and minimal white hoodie designed for effortless style. The lightweight yet warm fabric ensures maximum comfort, while the relaxed fit makes it easy to layer over your favorite outfits. A must-have for those who love a fresh and modern look. Whether dressed up or down, this hoodie complements every style, making it an essential piece for any wardrobe.'
  },
  { 
    id: 3, 
    name: 'Steel Grey Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    images: [
      '/images/products/hoodies/pgreyf.png', 
      '/images/products/hoodies/pgreyb.png'
    ],
    colors: ['Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A versatile grey hoodie that pairs well with any outfit. The premium-quality fabric provides a soft touch against the skin, making it ideal for all-day wear. Whether you’re dressing up or keeping it casual, this hoodie is a staple piece for any wardrobe. Designed for both comfort and style, it offers a snug fit without compromising breathability, ensuring all-day ease.'
  },
  { 
    id: 4, 
    name: 'Fiery Red Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    images: [
      '/images/products/hoodies/predf.png', 
      '/images/products/hoodies/predb.png'
    ],
    colors: ['Red'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Make a statement with this bold red hoodie. Designed to keep you warm and stylish, it features a soft inner lining and a relaxed fit for ultimate comfort. Whether you’re out on a chilly evening or just need a cozy go-to, this hoodie has got you covered. The vibrant red shade adds energy to any outfit, making it a perfect choice for those who love to stand out.'
  },
  { 
    id: 5, 
    name: 'Blush Pink Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    images: [
      '/images/products/hoodies/ppinkf.png', 
      '/images/products/hoodies/ppinkb.png'
    ],
    colors: ['Pink'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A soft and stylish pink hoodie that adds a touch of warmth and charm to your outfit. Crafted from breathable and cozy fabric, it offers a relaxed fit and all-day comfort. Whether paired with jeans or joggers, this hoodie is perfect for any occasion. The subtle yet elegant blush pink color makes it an ideal choice for those who appreciate both comfort and fashion.'
  },
  { 
    id: 6, 
    name: 'Deep Charcoal Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    images: [
      '/images/products/hoodies/pcharcoalf.png', 
      '/images/products/hoodies/pcharcoalb.png'
    ],
    colors: ['Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A dark charcoal hoodie that combines urban style with everyday comfort. Its thick yet breathable fabric keeps you warm without feeling heavy, making it an ideal choice for layering. Whether at work, on a night out, or relaxing at home, this hoodie delivers effortless cool. The deep charcoal shade ensures a sophisticated and contemporary look for any occasion.'
  }
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
      image: hoodie.image,
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
          <button
            onClick={() =>
              dispatch(
                addItem({
                  id: hoodie.id,
                  name: hoodie.name,
                  price: hoodie.price,
                  image: hoodie.images[0],
                })
              )
            }
            className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Product;