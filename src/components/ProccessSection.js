import React, { useEffect, useRef } from 'react'
import Spices from "../assets/spices-7925125_640.jpg"
import gsap from 'gsap';

const ProccessSection = ({data,index,length}) => {
    const processSectionRef = useRef(null);
    // useEffect(() => {
    //     const tl = gsap.timeline();
    
    //     // Sequential animations
    //     tl.fromTo(processSectionRef.current,  
    //         {  opacity: 0 },
    //         {  opacity: 1, duration: 2 })
    
    //   }, []);
    
  return (
    <div ref={processSectionRef} className=' border-b border-slate-500/20 flex text-black relative   w-full  gap-7 leading-loose'>
        <img src={Spices} className='  z-10  rounded-full w-[70px] h-[70px]' />
       <div>
        <p>Month of Harvest</p>
        <p className=' font-bold'>{data?.HarvestMonth}</p>
        <p>{data?.Location}</p>
       </div>

       {index!==length-1 && <div className=' border-l-2 border-dashed border-orange-400 bottom-0  left-8  top-[30px]  absolute w-1 h-[90%]'></div>} 
    </div>
  )
}

export default ProccessSection