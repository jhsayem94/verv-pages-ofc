"use client"

import React from 'react';
import { Check, Plus, Star } from 'lucide-react';
import profileImage from '../../assets/image/landlord-profile-img.png';
import translate from '../../assets/image/translate.png';
import marker from '../../assets/image/marker.png';
import Image from 'next/image';
import PropertyDemand from '../Shared/PropertyDemand/PropertyDemand';
import TenentReview from '../Shared/ReviewSection/TenentReview';
import './AboutLandlord.css'

const AboutLandlord = () => {


    return (
        <div className='inter-tight-font'>
            <div className="bg-[#eef1f3] ">
                <div className="lg:w-[1216px] w-96 mx-auto lg:py-[86px]  py-12 lg:grid grid-cols-1 flex justify-between items-start relative">
                    <div className='lg:flex grid grid-cols-1  gap-x-10 gap-y-6'>
                        <div><Image className="w-[104px] h-[104px] rounded-full" src={profileImage} alt="landlord profile" /></div>
                        <div className='grid grid-cols-1 content-between gap-y-4'>
                            <h1 className="text-[#233244] lg:text-[48px] text-[26px] font-bold font-['Inter'] "> About Nolan Lubin </h1>
                            <div className='grid lg:grid-cols-2 grid-cols-1  gap-y-2'>
                                <div className='flex gap-2  items-center'>
                                    <div><Image src={translate} alt="icon" /></div>
                                    <h6 className="text-[#30455f] lg:text-lg text-sm font-medium font-['Inter'] ">  Speaks English and French</h6>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div><Image src={marker} alt="icon" /></div>
                                    <h6 className="text-[#30455f] lg:text-lg text-sm font-medium font-['Inter']">  Lives in London, United Kingdom</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:hidden grid grid-cols-1 gap-y-1'>
                        <div className='bg-[#FFFFFF] rounded px-2 py-2 flex items-center gap-x-2'>
                            <Check className='h-[12px] w-[12px] text-[#50B533] ' />  <p className='text-xs'>  Identity</p>
                        </div>
                        <div className='bg-[#FFFFFF] rounded px-2 py-2 flex items-center gap-x-2'>
                            <Check className='h-[12px] w-[12px] text-[#50B533] ' /> <p className='text-xs'>Email address</p>
                        </div>
                        <div className='bg-[#FFFFFF] rounded px-2 py-2 flex items-center gap-x-2'>
                            <Check className='h-[12px] w-[12px] text-[#50B533] ' /> <p className='text-xs'>Phone number</p>
                        </div>
                    </div>
                    <div className='w-[264px] bg-white rounded-xl lg:block hidden shadow absolute top-20 right-0'>
                        <div className='p-9 grid grid-cols-1 gap-y-3'>
                            <div className=''>
                                <h2 className="text-[#233244] text-4xl font-semibold font-['Inter'] leading-[44px] flex items-center">430
                                    <Plus strokeWidth={3} /></h2>
                                <h4 className="text-[#233244] text-lg font-medium font-['Inter'] leading-7" >Review</h4>
                            </div>
                            <div className=" h-px  bg-[#ced3d9]" />
                            <div>
                                <h2 className="text-[#233244] text-4xl font-semibold font-['Inter'] leading-[44px] flex items-evenly">4.99<Star className='text-[#233244] fill-[#233244] h-[18px] w-[18px]' /></h2>
                                <h4 className="text-[#233244] text-lg font-medium font-['Inter'] leading-7" >Rating</h4>
                            </div>
                            <div className=" h-px  bg-[#ced3d9]" />
                            <div>
                                <h2 className="text-[#233244] text-4xl font-semibold font-['Inter'] leading-[44px] flex items-center">12 <Plus strokeWidth={3} /></h2>
                                <h4 className="text-[#233244] text-lg font-medium font-['Inter'] leading-7" >Years as a Landlord</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='  lg:w-[1216px] w-96 mx-auto '>
                <div className=' lg:mt-20 mt-12 lg:grid hidden grid-cols-1 content-between gap-y-6'>
                    <h1 className="text-[#233244] lg:text-[30px] text-[20px] font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">Nolan Lubin confirmed information</h1>
                    <div className='flex lg:gap-1 gap-2'>
                        <div className='bg-[#eef1f3] rounded px-2 py-1 flex items-center gap-x-2'>
                            <Check className='h-[20px] w-[20px] text-[#50B533] ' />  <p className='lg:text-[16px]'>  Identity</p>
                        </div>
                        <div className='bg-[#eef1f3] rounded px-2 py-1 flex items-center gap-x-2'>
                            <Check className='h-[20px] w-[20px] text-[#50B533] ' /> <p className='lg:text-[16px]'>Email address</p>
                        </div>
                        <div className='bg-[#eef1f3] rounded px-2 py-1 flex items-center gap-x-2'>
                            <Check className='h-[20px] w-[20px] text-[#50B533] ' /> <p className='lg:text-[16px]'>Phone number</p>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-26 mt-16'>
                    <h1 className="text-[#233244] lg:text-[30px] text-[26px] font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">What tenants are saying about Nolan Lubin</h1>
                    <TenentReview></TenentReview>
                </div>
                <div className='lg:mt-25 mt-16 mb-10'>
                    <h1 className="text-[#233244] lg:text-[30px] text-[26px]  font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">Nolan Lubin listings</h1>
                    <PropertyDemand></PropertyDemand>
                </div>
            </div>
        </div>
    );
};

export default AboutLandlord;