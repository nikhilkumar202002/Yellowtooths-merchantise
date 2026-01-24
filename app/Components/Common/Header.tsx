'use client'

import Logo from "../../../public/Logo/yellowtooths.svg"
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import "../../Styles/Common.css";
import Image from "next/image"


const Header = () => {
  return (
    <>
        <nav className="main-header">
            <div className="top-nav">
                <div className="top-nav-left"></div>
                    <div className="top-nav-middle">
                        <p>Free Shipping all bulk orders!</p>
                    </div>
                <div className="top-nav-right">
                    <div className="top-nav-menus">
                        <div className="top-nav-menu"><a href="">Our stores</a></div>
                        <div className="top-nav-menu"><a href="">Login</a></div>
                        <div className="top-nav-menu"><a href="">Register</a></div>
                    </div>
                </div>
            </div>

            <div className="main-nav">
                <div className="main-nav-left">
                    <div className="main-nav-logo">
                        <Image src={Logo} alt="Logo" width={150} height={50} />
                    </div>
                </div>
                <div className="main-nav-left">
                    <div className="main-nav-items">
                        <div className="main-nav-item"><a href="">Movie Merch</a></div>
                        <div className="main-nav-item"><a href="">Sculptures</a></div>
                        <div className="main-nav-item"><a href="">T-Shirts</a></div>
                        <div className="main-nav-item"><a href="">Fibre Frames</a></div>
                        <div className="main-nav-item"><a href="">New Drops</a></div>
                    </div>
                </div>
                <div className="main-nav-left">
                    <div className="main-nav-search"></div>
                    <div className="main-nav-wishlist"><IoMdHeartEmpty/></div>
                    <div className="main-nav-cart"><LiaShoppingCartSolid/></div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header