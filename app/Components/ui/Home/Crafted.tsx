'use client';

import Image from "next/image";
import Imageone from "../../../../public/Images/image-1.jpg";
import Imagetwo from "../../../../public/Images/image-2.jpg";
import Imagethree from "../../../../public/Images/image-3.jpg";

const Crafted = () => {
    return (
        <section className="crafted-cinema">
            <div className="crafted-cinema-container content-container">
                {/* Header Section */}
                <div className="crafted-cinema-header grid md:grid-cols-2 gap-10 lg:gap-15 items-end">
                    <div className="crafted-cinema-heading">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-moralana leading-tight">
                            Cinema, Crafted <br />
                            <span className="crafted-cinema-highlight font-manrope">to collect.</span>
                        </h2>
                    </div>
                    <div className="crafted-cinema-para md:flex md:justify-end">
                        <p className="text-lg md:text-xl font-manrope text-gray-600 md:w-3/4">
                            A contemporary merchandise studio creating premium movie-inspired T-shirts, fibre frames, and sculptures—designed for fans who live every scene beyond the screen.
                        </p>
                    </div>
                </div>

                {/* Main Grid Wrapper: items-stretch ensures the Left and Right columns are always the same height */}
                <div className="crafted-cinema-wrapper grid grid-cols-1 md:grid-cols-[40%_60%] gap-5 pt-8 items-stretch">
                    
                    {/* LEFT COLUMN: Contains buttons and the first large image */}
                    <div className="crafted-cinema-left flex flex-col h-full">
                        <div className="crafted-cinema-left-btns flex gap-2 w-full">
                            <div className="crafted-cinema-left-btn">
                                <a href="#" className="inline-block px-8 py-3 border border-dark rounded-full">Shop Now</a>
                            </div>
                            <div className="crafted-cinema-left-btn main-btn">
                                <a href="#" className="inline-block px-8 py-3 bg-yellow text-dark rounded-full font-medium">New Releases</a>
                            </div>
                        </div>
                        {/* flex-grow allows this relative container to fill the vertical space of the column */}
                        <div className="crafted-cinema-left-img relative flex-grow min-h-[400px]">
                            <Image 
                                src={Imageone} 
                                alt="Movie T-Shirts" 
                                fill 
                                className="object-cover rounded-[25px]" 
                            />
                            <div className="crafted-cinema-left-content image-content-box z-10 p-6 absolute bottom-0 left-0">
                                <span className="crafted-highlight bg-yellow px-4 py-1 rounded-full text-xs font-bold">Movie T-Shirt</span>
                                <h2 className="crafted-box-heading text-white text-2xl mt-4">Wear your favorite films.</h2>
                                <p className="crafted-box-para text-gray-200">Iconic poster art and cinematic moments printed on premium fabrics.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Nested grid for sub-images and promo box */}
                    <div className="crafted-cinema-right grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
                        
                        {/* Sub-column 1: Box One (Fibre Frames) + Box Two (Promo) */}
                        <div className="flex flex-col gap-5 h-full">
                            {/* flex-1 ensures the image box fills the remaining space above the promo box */}
                            <div className="crafted-cinema-right-box-one relative flex-1 min-h-[250px]">
                                <Image 
                                    src={Imagetwo} 
                                    alt="Fibre Frames" 
                                    fill 
                                    className="object-cover rounded-[25px]" 
                                />
                                <div className="crafted-cinema-right-content image-content-box z-10 p-6 absolute bottom-0 left-0">
                                    <span className="crafted-highlight bg-yellow px-4 py-1 rounded-full text-xs font-bold">Fibre Frames</span>
                                    <h2 className="crafted-box-heading text-white text-xl mt-4">Framed forever.</h2>
                                    <p className="crafted-box-para text-gray-200 text-sm">Handcrafted fibre sculptures inspired by movie characters.</p>
                                </div>
                            </div>
                            
                            {/* Promo Box: Fixed-ish content size */}
                            <div className="crafted-cinema-right-box-two bg-yellow p-8 rounded-[25px] flex flex-col justify-between">
                                <div className="crafted-cinema-right-box-two-top">
                                    <h4 className="font-manrope font-semibold uppercase text-xs tracking-widest text-dark">Limited Drop</h4>
                                    <h2 className="text-2xl md:text-3xl font-moralana text-dark leading-tight mt-2">Save 15% on New Merch</h2>
                                </div>
                                <div className="crafted-cinema-right-box-two-bottom mt-4">
                                    <p className="text-sm font-manrope text-dark text-right">Use code <span className="font-bold">REEL15</span> on the latest collections.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sub-column 2: Large Sculpture Image */}
                        {/* h-full and items-stretch on the parent grid ensure this stretches to match the combined height of sub-column 1 */}
                        <div className="crafted-cinema-right-two relative h-full">
                            <Image 
                                src={Imagethree} 
                                alt="Sculptures" 
                                fill 
                                className="object-cover rounded-[25px]" 
                            />
                            <div className="crafted-cinema-right-content image-content-box z-10 p-6 absolute bottom-0 left-0">
                                <span className="crafted-highlight bg-yellow px-4 py-1 rounded-full text-xs font-bold">Sculptures</span>
                                <h4 className="crafted-box-heading text-white text-2xl mt-4">Cinema Sculptures</h4>
                                <p className="crafted-box-para text-gray-200">Handcrafted fibre sculptures inspired by iconic movie characters and scenes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Crafted;