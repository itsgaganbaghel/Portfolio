import React from "react";

const Fallback = ({ data }) => {
  return (
    <section className="min-h-screen bg-primary flex justify-center items-center">
      <h1 className="text-4xl font-extrabold font-serif tracking-wide">{data} is Loading.....</h1>
    </section>
  );
};

export default Fallback;
