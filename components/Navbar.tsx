import { UserButton } from '@clerk/nextjs';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-white border-b-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center"></div>
            <div className=" sm:ml-6 ">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Electronics
                </Link>
                <Link
                  href="/products"
                  className="text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Jewelery
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Men&apos;s clothing
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Women&apos;s clothing
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative mr-3">
              <ShoppingBag />
            </div>
            <div className="relative ml-3">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
