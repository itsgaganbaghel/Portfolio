import React from 'react';

const Blogs = () => {
  return (
    <section className="h-[90vh] bg-gradient-to-br from-black via-[#101010] to-black text-white flex flex-col items-center justify-center px-4 text-center cursor-none">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Blog's on Web Development
      </h1>
      
      <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-xl">
        Unlock the skills to build websites, apps, and digital experiences — from beginner to pro.
      </p>

      <section className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full text-lg animate-pulse">
        🚀 Coming Soon
      </section>
    </section>
  );
};

export default Blogs;
