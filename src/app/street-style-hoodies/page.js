import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './../globals.css';

const hoodies = [
  { 
    id: 1, 
    name: 'Midnight Black Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/hoodies/pblackf.png', 
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A classic black hoodie that never goes out of style. Made from a soft and durable fabric, it offers a relaxed fit perfect for everyday wear. Whether you’re heading out or just lounging at home, this hoodie keeps you looking sharp and feeling cozy all day long.'
  },
  { 
    id: 2, 
    name: 'Cloud White Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/hoodies/pwhitef.png', 
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A clean and minimal white hoodie designed for effortless style. The lightweight yet warm fabric ensures maximum comfort, while the relaxed fit makes it easy to layer over your favorite outfits. A must-have for those who love a fresh and modern look.'
  },
  { 
    id: 3, 
    name: 'Steel Grey Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/hoodies/pgreyf.png', 
    colors: ['Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A versatile grey hoodie that pairs well with any outfit. The premium-quality fabric provides a soft touch against the skin, making it ideal for all-day wear. Whether you’re dressing up or keeping it casual, this hoodie is a staple piece for any wardrobe.'
  },
  { 
    id: 4, 
    name: 'Fiery Red Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/hoodies/predf.png', 
    colors: ['Red'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Make a statement with this bold red hoodie. Designed to keep you warm and stylish, it features a soft inner lining and a relaxed fit for ultimate comfort. Whether you’re out on a chilly evening or just need a cozy go-to, this hoodie has got you covered.'
  },
  { 
    id: 5, 
    name: 'Blush Pink Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/hoodies/ppinkf.png', 
    colors: ['Pink'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A soft and stylish pink hoodie that adds a touch of warmth and charm to your outfit. Crafted from breathable and cozy fabric, it offers a relaxed fit and all-day comfort. Whether paired with jeans or joggers, this hoodie is perfect for any occasion.'
  },
  { 
    id: 6, 
    name: 'Deep Charcoal Hoodie', 
    category: 'Hoodies', 
    price: 1550, 
    image: '/images/products/hoodies/pcharcoalf.png', 
    colors: ['Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A dark charcoal hoodie that combines urban style with everyday comfort. Its thick yet breathable fabric keeps you warm without feeling heavy, making it an ideal choice for layering. Whether at work, on a night out, or relaxing at home, this hoodie delivers effortless cool.'
  },
];



  

function Page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Customize</h2>
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
