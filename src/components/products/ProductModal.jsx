import React from "react";
import Title from "../Title";
import { RxCross1 } from "react-icons/rx";
const ProductModal = ({isOpen=false,setOpen,label,body,button}) => {
 
  return (
    <div className={isOpen?"block":"hidden"}>
      <div className="bg-slate-300 h-svh  w-full fixed left-0 top-0 z-50 bg-opacity-50 flex items-center justify-around ">
        <div className="w-full md:w-1/2 xl:w-1/3 rounded-3xl min-h-40 px-12 py-10 bg-white">
          <div className="flex items-center justify-between">
            <Title label={label} />
            <button onClick={()=>setOpen(false)}>
              <RxCross1 />
            </button>
          </div>
          <div className="py-5 text-red-500">
          {body}
          </div>
         <div>
            {button}
         </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
