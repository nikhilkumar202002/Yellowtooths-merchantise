'use client';

import Image from "next/image";
import Imageone from "../../../../public/Images/image-1.jpg";
import Imagetwo from "../../../../public/Images/image-2.jpg";
import Imagethree from "../../../../public/Images/image-3.jpg";

const Crafted = () => {
    return (
        <section className="crafted-cinema py-10 md:py-20">
            <div className="crafted-cinema-container content-container">
                {/* Header Section */}
                <div className="crafted-cinema-header grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-10">
                    <div className="crafted-cinema-heading">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-moralana leading-[1.1]">
                            Cinema, Crafted <br />
                            <span className="crafted-cinema-highlight font-manrope italic font-light">to collect.</span>
                        </h2>
                    </div>
                    <div className="crafted-cinema-para md:flex md:justify-end">
                        <p className="text-base md:text-lg lg:text-xl font-manrope text-gray-600 md:w-5/6">
                            A contemporary merchandise studio creating premium movie-inspired T-shirts, fibre frames, and sculptures—designed for fans who live every scene beyond the screen.
                        </p>
                    </div>
                </div>

                {/* Main Grid Wrapper */}
                <div className="crafted-cinema-wrapper grid grid-cols-1 lg:grid-cols-[42%_58%] gap-5 items-stretch">
                    
                    {/* LEFT COLUMN */}
                    <div className="crafted-cinema-left flex flex-col h-full">
                        <div className="crafted-cinema-left-btns flex flex-wrap gap-3 w-full mb-6">
                            <a href="#" className="flex-1 text-center px-6 py-3 border border-dark rounded-full font-manrope text-sm font-semibold hover:bg-dark hover:text-white transition-all">Shop Now</a>
                            <a href="#" className="flex-1 text-center px-6 py-3 bg-yellow text-dark rounded-full font-manrope text-sm font-semibold shadow-md">New Releases</a>
                        </div>
                        
                        <div className="crafted-cinema-left-img relative min-h-[450px] lg:flex-grow rounded-[25px] overflow-hidden group">
                            <Image 
                                src={Imageone} 
                                alt="Movie T-Shirts" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            {/* Overlay removed, text now has shadow for readability on light images */}
                            <div className="z-10 p-6 absolute bottom-0 left-0 right-0">
                                <span className="crafted-highlight bg-yellow px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-dark inline-block shadow-sm">Movie T-Shirt</span>
                                <h2 className="text-white text-2xl lg:text-3xl font-moralana mt-3 drop-shadow-lg">Wear your favorite films.</h2>
                                <p className="text-gray-100 font-manrope text-sm mt-2 drop-shadow-md">Iconic poster art and cinematic moments printed on premium fabrics.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="crafted-cinema-right grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        {/* Sub-column 1 */}
                        <div className="flex flex-col gap-5 h-full">
                            <div className="relative min-h-[300px] flex-grow rounded-[25px] overflow-hidden group">
                                <Image 
                                    src={Imagetwo} 
                                    alt="Fibre Frames" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="z-10 p-6 absolute bottom-0 left-0 right-0">
                                    <span className="crafted-highlight bg-yellow px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-dark inline-block shadow-sm">Fibre Frames</span>
                                    <h2 className="text-white text-xl font-moralana mt-3 drop-shadow-lg">Framed forever.</h2>
                                    <p className="text-gray-100 font-manrope text-xs mt-2 drop-shadow-md">Handcrafted fibre sculptures inspired by movie characters.</p>
                                </div>
                            </div>
                            
                            {/* Promo Box */}
                            <div className="bg-yellow p-8 rounded-[25px] flex flex-col justify-between min-h-[220px] shadow-sm">
                                <div>
                                    <h4 className="font-manrope font-bold uppercase text-[10px] tracking-[0.2em] text-dark/60">Limited Drop</h4>
                                    <h2 className="text-3xl lg:text-4xl font-moralana text-dark leading-tight mt-2">Save 15% on New Merch</h2>
                                </div>
                                <p className="text-xs font-manrope text-dark/80 text-right mt-4 italic">
                                    Use code <span className="font-bold underline">REEL15</span>
                                </p>
                            </div>
                        </div>

                        {/* Sub-column 2 */}
                        <div className="relative min-h-[400px] sm:h-full rounded-[25px] overflow-hidden group">
                            <Image 
                                src={Imagethree} 
                                alt="Sculptures" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="z-10 p-6 absolute bottom-0 left-0 right-0">
                                <span className="crafted-highlight bg-yellow px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-dark inline-block shadow-sm">Sculptures</span>
                                <h4 className="text-white text-2xl font-moralana mt-3 drop-shadow-lg">Cinema Sculptures</h4>
                                <p className="text-gray-100 font-manrope text-sm mt-2 drop-shadow-md">Handcrafted fibre sculptures inspired by characters.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Crafted;