'use client'

import React from "react";
import HamBtn from "../ux/HamBtn";
import Link from 'next/link';

export default function Header() {

  const menuList = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className="fixed z-50 w-full max-w-full flex justify-between items-center h-20 px-14 md:px-20 lg:px-32 xl:px-52"
      style={{ border: "1px solid #eee" }}>
      <div className="text-xl">
        <Link href="/">LOGO</Link>
      </div>
      <nav className="items-center flex">
        {menuList.map((list, index) => (
          <Link
            key={index}
            href={list.to}
            className={`px-5 text-xl hidden xl:block`}>
            {list.label}
          </Link>
        ))}
        <HamBtn menuList={menuList} />
      </nav>
    </header>
  );
}