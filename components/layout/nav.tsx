'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()

  const switchRoute = (route:string) => {
    setOpenMenu(false)
    router.push(route)
  }

    return (
        <div className="container max-w-7xl mx-auto px-6 py-12">
            {/* <!-- Nav/logo --> */}
            <nav className="flex items-center justify-between font-bold text-white">
              {/* <!-- logo --> */}
              <Link href="/">
                <img src="logo.svg" alt=""/>
              </Link>
              {/* <!-- Menu --> */}
              <div className="hidden h-10 font-alata lg:flex lg:space-x-4 items-center">
                <div className="group">
                  <Link href="/">Home</Link>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <Link href="/about-us">About Us</Link>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <Link href="/data-security">Data security</Link>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <Link href="/data-annotation">Data annotation</Link>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <Link href="/data-collection">Data collection</Link>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <Link href="/testing">Testing</Link>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <Link href="/global-sourcing">Global sourcing</Link>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
              </div>
              <button className="hidden w-32 border border-white text-white px-3 py-2 rounded-md lg:block">Contact us</button>
              {/* <!-- Todo Hamburger Button --> */}
              <div className="lg:hidden">
                <button id="menu_btn" type="button" onClick={()=> setOpenMenu(!openMenu)} className={`${openMenu?'open ':""}z-30 block lg:hidden focus:outline-none
                        hamburger`}>
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
                </button>
              </div>
            </nav>
            {/* <!-- Todo Mobile Menu --> */}
            <div id="menu" className={`${openMenu?'flex ':"hidden "}fixed inset-0 z-20 flex-col items-center self-end w-full h-full 
                min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500
                opacity-90 bg-blue-900`}>
              <a onClick={()=> switchRoute("/")} className="cursor-pointer hover:text-pink-500">Home</a>
              <a onClick={()=> switchRoute("/about-us")} className="cursor-pointer hover:text-pink-500 pt-6">About us</a>
              <a onClick={()=> switchRoute("/data-security")} className="cursor-pointer hover:text-pink-500 pt-6">Data security</a>
              <a onClick={()=> switchRoute("/data-annotation")} className="cursor-pointer hover:text-pink-500 pt-6">Data annotation</a>
              <a onClick={()=> switchRoute("/data-collection")} className="cursor-pointer hover:text-pink-500 pt-6">Data collection</a>
              <a onClick={()=> switchRoute("/testing")} className="cursor-pointer hover:text-pink-500 pt-6">Testing</a>
              <a onClick={()=> switchRoute("/global-sourcing")} className="cursor-pointer hover:text-pink-500 pt-6">Global sourcing</a>
              <a onClick={()=> switchRoute("#contact-us")} className="cursor-pointer hover:text-pink-500 pt-6">Contact us</a>
            </div>
        </div>
    )
}

export default Nav