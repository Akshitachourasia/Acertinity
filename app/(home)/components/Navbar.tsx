import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";


const Navbar = ({className}: {className?: string}) => {
    const socials = [

        {
            Link: 'https://github.com/Akshitachourasia',
            Label: 'Git Hub',
            Icon: SiGithub

        },

        {
            Link: 'https://www.instagram.com/',
            Label: 'Instagram',
            Icon: SiInstagram

        },

        {
            Link: 'https://in.linkedin.com/',
            Label: 'Linkedin',
            Icon: SiLinkedin
        },
    ]
    return (
        <nav className={cn('py-10 flex justify-between items-center animate-move-down' , className)}>
          <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500'>
            Akshita
            </h1>  
            <div className='flex items-center gap-4'>
            {
                socials.map((social, index) => {
                    const Icon = social.Icon
                    return <Link href={social.Link} key={index} aria-label={social.Label}>
                        <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                    </Link>
                })
            }
                </div>
        </nav>
    )
}

export default Navbar
