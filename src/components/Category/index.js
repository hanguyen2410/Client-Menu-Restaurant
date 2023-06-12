import React from "react";
import { useState, useEffect } from 'react';
import MenuContent from "../Contents/MenuContent";


function CategoryItem(props){
    const {title, path, categoryId, handleClick, selectedCategory} = props;





    return (
                <div key={categoryId}
                className={`${categoryId === selectedCategory ? 'group hover:bg-btnOverlay bg-cartNumBg w-24 min-w-[6rem] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all  ease-out' : 'group bg-btnOverlay hover:bg-cartNumBg w-24 min-w-[6rem] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all  ease-out'} "`}
                       style={{ transform: "none" }} onClick={() => handleClick(categoryId)}
                           >
                               <div className={`${categoryId === selectedCategory ? 'w-10 h-10 rounded-full group-hover:bg-cartNumBg bg-btnOverlay  flex items-center justify-center' : 'w-10 h-10 rounded-full bg-cartNumBg group-hover:bg-btnOverlay  flex items-center justify-center'} "`}>
                                   <span className={`${categoryId === selectedCategory ? 'text-textColor group-hover:text-btnOverlay text-lg' : 'group-hover:text-textColor text-btnOverlay text-lg'} "`}>
                                       <svg
                                           stroke="currentColor"
                                           fill="currentColor"
                                           strokeWidth={0}
                                           viewBox="0 0 24 24"
                                           height="1em"
                                           width="1em"
                                           xmlns="http://www.w3.org/2000/svg"
                                       >
                                           <path d={path}></path>
                                       </svg>
                                   </span>
                               </div>
                               <p className="text-base text-textColor group-hover:text-white ">{title}</p>
                           </div>
        
    )
}

export default CategoryItem;