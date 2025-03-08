"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { addItem } from "../../redux/slices/cartSlice";
import { notFound } from "next/navigation";

const hoodies = [
  { 
    id: 1, 
    name: 'Noir Essence Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/pblackf.png', 
    colors: ['Black'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 2, 
    name: 'Olive Luxe Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/polivef.png', 
    colors: ['Olive'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 3, 
    name: 'Beige Serenity Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/pbeigef.png', 
    colors: ['Beige'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 4, 
    name: 'Maroon Royalty Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/pmaroonf.png', 
    colors: ['Maroon'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 5, 
    name: 'Lavender Bliss Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/ppurplef.png', 
    colors: ['Purple'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 6, 
    name: 'Ivory Elegance Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/pwhitef.png', 
    colors: ['White'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 7, 
    name: 'Midnight Navy Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/pnavyf.png', 
    colors: ['Navy'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 8, 
    name: 'Obsidian Charm Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/pblackf.png', 
    colors: ['Black'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 9, 
    name: 'Snowfall White Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/pwhitef.png', 
    colors: ['White'],
    sizes: ['S','M','L'] 
  },
  { 
    id: 10, 
    name: 'Amethyst Glow Tee', 
    category: 'Tees', 
    price: 1199, 
    image: '/images/products/tshirts/ppurplef.png', 
    colors: ['Purple'],
    sizes: ['S','M','L'] 
  },
];


function Product() {
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
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <img
//             alt={hoodie.name}
//             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//             src={hoodie.image}
//           />
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest">
//               {hoodie.category}
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {hoodie.name}
//             </h1>
//             <p className="leading-relaxed">High-quality hoodie with premium comfort and warmth.</p>

//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               {/* Color Selection as Dropdown */}
//               <div className="flex flex-col mr-6">
//                 <label className="mr-3 font-medium">Color</label>
//                 <select 
//   value={selectedColor}
//   onChange={(e) => setSelectedColor(e.target.value)}
// >
//   {hoodie?.colors?.map((color, index) => (
//     <option key={index} value={color}>{color}</option>
//   )) || <option value="">No colors available</option>}
// </select>
//               </div>
              
//               {/* Size Selection as Dropdown */}
//               <div className="flex flex-col">
//                 <label className="mr-3 font-medium">Size</label>
//                 <select 
//   value={selectedSize}
//   onChange={(e) => setSelectedSize(e.target.value)}
// >
//   {hoodie?.sizes?.map((size, index) => (
//     <option key={index} value={size}>{size}</option>
//   )) || <option value="">No sizes available</option>}
// </select>
//               </div>
//             </div>

//             <div className="flex">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 Rs {hoodie.price}
//               </span>
//               <button
//                 onClick={handleAddToCart}
//                 className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
<h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
<p className="text-lg text-gray-600">The product is not listed yet. Stay tuned!</p>
</div>
  );
}

export default Product;