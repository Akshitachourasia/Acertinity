"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiAngular, SiExpress, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiReactivex, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {
    const skills = [
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs
        },
        {
            text: "React Native",
            Icon: SiReactivex
        },
        {
            text: "Javascript",
            Icon: SiJavascript
        },
        {
            text: "Typescript",
            Icon: SiTypescript
        },
        {
            text: "Angular",
            Icon: SiAngular
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs
        },
        {
            text: "Postman",
            Icon: SiPostman
        },
        {
            text: "MongoDB",
            Icon: SiMongodb
        },
        {
            text: "Express",
            Icon: SiExpress
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss
        },
        {
            text: "Git Hub",
            Icon: SiGithub
        },

    ]
    return (
        <div>
            <Title text="Skills" className="flex flex-col items-center" />
            <HoverEffect items={skills} />
        </div>
    )
}

export default Skills
