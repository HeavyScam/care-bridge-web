import Image from 'next/image'
import React from 'react'
import { Facebook } from './FooterIcons'
import { Instagram } from './FooterIcons'
import { Twitter } from './FooterIcons'

function Footer() {
  return (
    <footer className="bg-[#121127] flex flex-col justify-center items-center py-10 px-[10%]">
        <Image src='/logowhite.svg' alt="logo" width={200} height={200} />
        <p className='text-[#9796A0] text-2xl pt-5 text-center'>Connecting Hearts, Empowering Lives</p>
        <div className='flex pt-5 pb-16 gap-8'>
            <Facebook/>
            <Instagram/>
            <Twitter/>
        </div>
        <hr className='border-1 w-full'/>
        <p className='text-[#9796A0] text-lg pt-5 text-center'>© 2023 CareBridge, Inc. <br className='block lg:hidden'/> All rights reserved</p>
    </footer>
  )
}

export default Footer