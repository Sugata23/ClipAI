"use client";
import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({onUserSelect}) {
    const styleOption=[
        {
            name:'Cartoon',
            image:'/cartoon.jpeg'
        },
        {
            name:'Realistic',
            image:'/real.jpeg'
        },
        {
            name:'Comic',
            image:'/comic.jpeg'
        },
        {
            name:'Watercolor',
            image:'/watercolor.jpeg'
        },
        {
            name:'gta',
            image:'/gta.jpeg'
        }
    ]
    const[selectedOption, setSelectedOption]=useState();
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-primary text-xl'>Style</h2>
            <p className='text-gray-500'>Select your video style</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>{
                styleOption.map((item,index)=>(
                    <div className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl
                    ${selectedOption===item.name?'border-4 border-primary':''}
                    `}>
                        <Image src={item.image} alt={item.name} width={100} height={100}
                        className='w-full h-48 object-cover rounded-lg'
                        onClick={()=>{
                            setSelectedOption(item.name)
                            onUserSelect('imageStyle',item.name)
                        }}
                        />
                        <h2 className='absolute p-1 bottom-0 bg-black/50 w-full text-center text-white rounded-b-lg'>{item.name} </h2>
                    </div>
                ))
            }</div>
        </div>
    )
}

export default SelectStyle