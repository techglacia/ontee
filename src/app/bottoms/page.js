import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './../globals.css';

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
function Page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Ready to Wear</h2>
        <div className="flex flex-wrap -m-4">
          {hoodies.map((hoodie) => (
            <div key={hoodie.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/ready-to-wear/${hoodie.id}`} legacyBehavior>
                <a className="block relative h-78 rounded overflow-hidden">
                  <img alt={hoodie.name} className="object-cover object-center h-[55vh] w-[45vh] block" src={hoodie.image} />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{hoodie.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{hoodie.name}</h2>
                <p className="mt-1">PKR {hoodie.price}.00</p>
                
                {/* Color Selection */}
                <div className="flex mt-2">
                  <span className="mr-3">Color:</span>
                  {hoodie.colors.map((color, index) => (
                    <button 
                      key={index} 
                      className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ml-1`} 
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                </div>

                {/* Size Selection */}
                <div className="flex mt-2 items-center">
                  <span className="mr-3">Size:</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {hoodie.sizes.map((size, index) => (
                        <option key={index}>{size}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
