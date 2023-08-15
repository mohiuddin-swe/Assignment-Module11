import React from 'react';
import Link from 'next/link';

const Menu = () => {
    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center py-6 sm:flex sm:justify-center sm:items-center">
            <Link href={"/"} className="text-white text-2xl hover:underline mx-4 my-2 sm:my-0">Home</Link>
            <Link href={"/blogs"} className="text-white text-2xl hover:underline mx-4 my-2 sm:my-0">Blog</Link>
            
        </div>
    );
};

export default Menu;
