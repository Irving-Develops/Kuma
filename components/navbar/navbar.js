import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
import NavItem from "./NavItem";
import Logo from '../logo'

const NAV_MENU = [
{text: "Home", href: "/"},
{text: "About Us", href: "/about"}
]

export default function Navbar() { 
    return (
        <header >
            <nav className = "flex items-center justify-between flex-wrap p-6 bg-black" >
                <Logo imgSrc={"/favicon.ico"} href={"/"} alt={"Team Kuma Jiu Jitsu Logo"}/>
                <div  className="flex items-center flex-shrink-0 text-white mr-6" >
                    {NAV_MENU.map((item,idx) => (
                        <NavItem key={idx} {...item} />
                    ))}
                    {/* <button className="bg-red-500 hover:bg-blue-500">Hello</button> */}

                </div>
            </nav>
        </header>
    )
}