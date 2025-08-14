import React from "react";

const Loading = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <span className="relative flex size-50">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      </span>
    </section>
  );
};

export default Loading;
