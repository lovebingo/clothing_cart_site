'use client'


import React, { useState, useEffect } from 'react';



export default function Home() {

  const [selectedSize, setSelectedSize] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCart, setShowCart] = useState(false);

  interface Sizes {
    S: number;
    M: number;
    L: number;
  }

  const [cartSizes, setCartSizes] = useState<Sizes>({ S: 0, M: 0, L: 0 });

  const addToCart = (size: keyof Sizes) => {
    setCartSizes(prevSizes => ({
      ...prevSizes,
      [size]: prevSizes[size] + 1
    }));
  };



  const handleSizeClick = (size: any) => {
    setSelectedSize(size);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };


  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);


  return (
    <main className="bg-white container mx-auto">
      <div className="bg-gray-100 h-6 flex items-center justify-end pr-6" >
        <a className={`${showCart ? "bg-white border boder-1 boder-black" : "bg-gray-100"} h-6 flex items-center text-xs text-gray-600 px-1`}
          onClick={() => handleCartClick()}
        >
          My cart ( {cartSizes.S + cartSizes.M + cartSizes.L} )
        </a>
      </div>
      {showCart && (
        <div className="absolute top-6 right-6 bg-white py-2 border">
          <div className="w-[300px]">


            {cartSizes.S > 0 && (<div className="flex p-4">
              <div className="w-1/3">
                <img src="/img/classic-tee.jpeg">
                </img>
              </div>
              <div className="w-2/3 pl-4">
                <p className="text-sm">Classic Tee</p>
                <p className="pt-2 text-xs">{cartSizes.S}×  <span className="font-bold">$75.00</span></p>
                <p className="pt-3 text-xs">Size: S</p>
              </div>
            </div>)}

            {cartSizes.M > 0 && (<div className="flex p-4">
              <div className="w-1/3">
                <img src="/img/classic-tee.jpeg">
                </img>
              </div>
              <div className="w-2/3 pl-4">
                <p className="text-sm">Classic Tee</p>
                <p className="pt-2 text-xs">{cartSizes.M}×  <span className="font-bold">$75.00</span></p>
                <p className="pt-3 text-xs">Size: M</p>
              </div>
            </div>)}

            {cartSizes.L > 0 && (<div className="flex p-4">
              <div className="w-1/3">
                <img src="/img/classic-tee.jpeg">
                </img>
              </div>
              <div className="w-2/3 pl-4">
                <p className="text-sm">Classic Tee</p>
                <p className="pt-2 text-xs">{cartSizes.L}×  <span className="font-bold">$75.00</span></p>
                <p className="pt-3 text-xs">Size: L</p>
              </div>
            </div>)}





          </div>
        </div>
      )}



      <div className="flex px-24 pt-10">
        <div className="w-1/2 px-6">
          <img src="/img/classic-tee.jpeg">
          </img>
        </div>
        <div className="w-1/2 px-6">
          <p className="text-xl">Classic Tie</p>
          <p className="pt-6 font-bold text-sm">$75.00</p>
          <p className="pt-6 text-xs text-gray-400">Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus.</p>
          <p className="pt-6">
            <span className="font-bold text-xs text-gray-400">SIZE</span><span className="text-red-500 text-xs">* </span>
            <span className="text-xs font-bold">{selectedSize}</span>
          </p>


          <div className="flex pt-6">
            <div
              className={`w-10 h-10 border ${selectedSize === "S" ? "border-gray-800 border-2" : "border-gray-400 border-1"} flex items-center justify-center mr-2 text-xs`}
              onClick={() => {
                if (selectedSize !== "S") {
                  handleSizeClick("S");
                } else {
                  handleSizeClick("");
                }
              }}
            >
              S
            </div>
            <div
              className={`w-10 h-10 border ${selectedSize === "M" ? "border-gray-800 border-2" : "border-gray-400 border-1"} flex items-center justify-center mr-2 text-xs`}
              onClick={() => {
                if (selectedSize !== "M") {
                  handleSizeClick("M");
                } else {
                  handleSizeClick("");
                }
              }}
            >
              M
            </div>
            <div
              className={`w-10 h-10 border ${selectedSize === "L" ? "border-gray-800 border-2" : "border-gray-400 border-1"} flex items-center justify-center text-xs`}
              onClick={() => {
                if (selectedSize !== "L") {
                  handleSizeClick("L");
                } else {
                  handleSizeClick("");
                }
              }}
            >
              L
            </div>
          </div>

          <div className="flex pt-4">
            <div className="w-36 h-9 border border-gray-800 border-2 flex items-center justify-center font-bold text-sm hover:bg-black hover:text-white select-none"
              onClick={() => {
                if (selectedSize !== "") {
                  if (selectedSize == "S") {
                    addToCart("S");
                  } else if (selectedSize == "M") {
                    addToCart("M");
                  } else if (selectedSize == "L") {
                    addToCart("L");
                  }
                } else {
                  setErrorMessage('Choose Size First');
                }
              }}
            >
              ADD TO CART
            </div>

            {errorMessage && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-red-500 text-white p-4 rounded shadow-lg">
                  <p className="text-lg font-bold">{errorMessage}</p>
                </div>
              </div>
            )}

          </div>



        </div>
      </div>



    </main>
  )
}
