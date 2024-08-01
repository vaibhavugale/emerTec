import React, { useEffect, useRef } from 'react';
import spices from "../assets/spices-7925125_640.jpg"
import ProccessSection from './ProccessSection';
import {process} from "../data";
import gsap from 'gsap';

const OrderTraking = () => {
    const uses = [  
        "Cowdung compost.",
        "Stermeal , Neem Cake Powder."   
    ]
   
   const pageStack = useRef(null); 
 
   useEffect(() => {
    const tl = gsap.timeline();

    // Sequential animations
    tl.fromTo(pageStack.current,
        { y: '100vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
    )


  }, []);


        
  return (
    <div className="h-[100vh] flex  overflow-hidden  flex-col  bg-custom-image relative  xs:w-[30vw] md:w-[30vw] w-[100vw] bg-white overflow-y-scroll  ">
    {/* Image */}
    <div className=" w-full h-[20vh]"></div>

     <div ref={pageStack} className=" w-full h-[70vh] ">
    {/* section 01 :Name of spices  */}
    <div className=" bg-black/50 rounded-t-3xl flex justify-between  p-5 font-semibold   ">
      <p className=" text-2xl">Black Pepper <br/> Karimunda</p>
      <div>Logo</div>
    </div>


    {/* section 02 : Farm description */}
    <div className="bg-[#222041] flex gap-4 min-h-[10vh] border-white border-t rounded-t-3xl  p-6 -mt-3">
     {/* logo */}
     <div className=' '>Logo</div>
     {/* Description */}
     <div className=' leading-tight'>
       <div>
        <p className='text-xl font-bold tracking-wide'>Valiyaparambil Farm</p>
        <p className=' text-lg text-white/70'>Thomas.V.Thomas</p>
       </div>

       <div className=' mt-2'>
        <p className='text-sm font-bold tracking-wide'>Fertilizer Used</p>
         {uses.map((item)=><p className='text-sm font-bold text-white/70 tracking-wide'>{item}</p>)}
       </div>
     </div>

    </div>




    {/* section 03 : Process */}
    <div className="bg-[#FFFFFF] gap-8 px-8 py-8 h-[60vh] flex flex-col items-center overflow-y-scroll border-white border-t rounded-t-3xl  -mt-4">

         {
            process?.map((data,index)=>  <ProccessSection data={data} index={index}  length={process.length} /> )
         }
    </div>







    </div>
 </div>
  )
}

export default OrderTraking