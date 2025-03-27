import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './../globals.css';

const hoodies = [

  { 
    id: 2, 
    name: 'Ethereal White Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/graphichoodies/wgraphicf.png', 
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Drift into serenity with this ethereal white hoodie, embodying purity and minimalism. Crafted for both comfort and effortless elegance, it’s a timeless piece that complements every soul seeking a celestial touch in their wardrobe.'
  },
  
  { 
    id: 1, 
    name: 'Nocturne Black Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/graphichoodies/bgraphicf.png', 
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A midnight embrace woven into fabric, the Nocturne Black Hoodie exudes mystery and sophistication. Its deep hue and relaxed fit make it the perfect companion for moonlit wanderings and quiet introspection.'
  },

  { 
    id: 3, 
    name: 'Ashen Dusk Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/graphichoodies/ggraphicf.png',  
    colors: ['Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Like the gentle transition from day to night, the Ashen Dusk Hoodie captures the beauty of subtle elegance. Its soft, premium fabric wraps you in comfort, making it an essential piece for those who find poetry in the ordinary.'
  },

  { 
    id: 4, 
    name: 'Obsidian Veil Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/graphichoodies/cgraphicf.png', 
    colors: ['Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Cloaked in the essence of twilight, the Obsidian Veil Hoodie merges urban edge with timeless allure. Designed for those who walk their own path, it offers warmth and depth, reflecting the enigmatic charm of the night.'
  },
];




  

function Page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Street Style Hoodies</h2>
        <div className="flex flex-wrap -m-4">
          {hoodies.map((hoodie) => (
            <div key={hoodie.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/street-style-hoodies/${hoodie.id}`} legacyBehavior>
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
