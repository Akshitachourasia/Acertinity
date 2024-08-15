import React from 'react'
import { SiAngular, SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiReactivex, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

const Project = () => {

    const projects = [
        {
            title: 'Front Mentor',
            tech: [SiReact, SiJavascript, SiMongodb, SiExpress, SiTailwindcss],
            link: 'https://www.frontendmentor.io/',
            background: 'bg-[#ececec]',
            cover: '/project1.png'
        },
        {
            title: 'Behance',
            tech: [SiReact, SiJavascript, SiMongodb, SiExpress, SiTypescript, SiTailwindcss],
            link: 'https://www.behance.net/',
            background: 'bg-[#9fd3c7]',
            cover: '/project2.png'
        },
        {
            title: 'Dribble',
            tech: [SiAngular, SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiNodedotjs],
            link: 'https://dribbble.com/handoff/about',
            background: 'bg-[#385170]',
            cover: '/project3.png'
        },
        {
            title: 'Dev Challenges',
            tech: [SiReactivex, SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiNextdotjs],
            link: 'https://devchallenges.io/',
            background: 'bg-[#142d4c]',
            cover: '/project4.png'
        }
    ]

    return (
        <div className="py-10 p-5 sm:p-0">
            <Title
                text="Projects"
                className='flex flex-col items-center justify-center'
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index) => (
                    <Link href={project.link} key={index}>
                        <div className={cn('p-5 rounded-md', project.background)}>
                            <DirectionAwareHover
                                imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'
                            >

                                <div className="space-y-5">





                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className="flex items-center gap-5 ">
                                        {
                                            project.tech.map((Icon, index) => {
                                                return <Icon key={index} className="w-8 h-8" />
                                            })
                                        }
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Project
