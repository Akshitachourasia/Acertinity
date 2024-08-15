import { MovingBorderButton } from '@/components/ui/moving-border';
import Link from 'next/link';
import React from 'react';
import Title from './Title';

const HeroSection = () => {
    return (
        <div className="min-h-[60vh] flex justify-between items-center flex-col-reverse lg:flex-row gap-14 lg:gap-0 animate-move-up ">
            {/* Left Side - Content */}
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Nice to Meet You 👋 <br />
                    <span className='underline underline-offset-8 decoration-green-500'>
                        I am Akshita
                    </span>
                </h1>
                <p className='md:w-96 text-lg text-gray-300'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, ipsam ea impedit necessitatibus dignissimos illum iure at minima nostrum, deleniti nihil. Doloremque sit, deleniti molestias nisi at maiores blanditiis temporibus!
                </p>
                <Link href="mailto:some@gmail.com" className='inline-block group'>
                    <Title text="Contact Me 📞" />
                </Link>
            </div>

            {/* Right Side - UI Elements */}
            <div className="relative">


                <div className="flex flex-col items-center justify-end">
                    <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                        <div className='flex gap-3 translate-x-8'>
                            <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                            <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                        </div>
                        <div className='flex gap-3 -translate-x-8'>
                            <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                            <div className='w-32 h-32 rounded-full bg-green-500'></div>
                        </div>
                        <div className='glow absolute top-[40%] right-[50%] -z-10'></div>
                    </div>

                    <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>

                        <MovingBorderButton borderRadius='0.5rem' className='p-3 font-semibold'>
                            <p>Available for Freelance.</p>
                        </MovingBorderButton>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
