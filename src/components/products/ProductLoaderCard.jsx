import React from "react";

const ProductLoadingCard = () => {
  return (
    <>
      <div className="border h-60 p-3 bg-slate-200 space-y-2 rounded-xl shadow-lg animate-pulse">
        <div className="bg-slate-300 w-full h-24 rounded-md "></div>
        <div className="bg-slate-300 w-4/6 h-6 "></div>
        <div className="bg-slate-300 w-1/4 h-5"></div>
        <div className="bg-slate-300 w-5/12 h-4"></div>
        <div className="bg-slate-300 w-full h-3 "></div>
      </div>
    </>
  );
};

export default ProductLoadingCard;
