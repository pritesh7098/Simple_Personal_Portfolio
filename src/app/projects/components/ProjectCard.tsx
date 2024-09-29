import { MagicCard } from '@/components/ui/magic-card'
import ShineBorder from '@/components/ui/shine-border'
import { Project } from '@/types/project'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import { Badge, Link } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const ProjectCard = ({logo,title, description, techStack, link, source } : Project) => {
  return (
        <MagicCard className="cursor-pointer shadow-2xl w-[45%] max-sm:!w-fit h-[300px]" gradientColor= "#262626">
            <ShineBorder className="border h-full w-full relative rounded-lg flex flex-col justify-center items-start md:shadow-xl !bg-transparent !pointer-events-none" color={["#FF9933", "#FFFFFF", "#138808"]}>
                
                <div className='px-3'>
                    <Image src={logo} alt='project-logo' width={30} height={30} />
                </div>
                <div className="px-3 mt-4">
                    <h1 className='text-xl font-bold tracking-tight text-start font-sans'>{title}</h1>
                    <p className='mt-2 text-sm text-gray-400'>{description}</p>
                </div>
                <div className="flex gap-1 px-3 mt-4 flex-wrap">
                    {
                        techStack.map((tech, idx) => (
                            <Badge key={idx} color="gray" variant="outline" highContrast className='text-[10px]'>
                                {tech}                     
                            </Badge>
                        ))
                    }
                </div>
                <div className='px-3 mt-3 !pointer-events-auto flex gap-1'>
                    <Link href={link}>
                        <Badge color="gray" variant="solid" highContrast className='text-[10px] hover:bg-gray-300'>
                            <GlobeIcon width={11} height={11}/> Website
                        </Badge>
                    </Link>
                    <Link href={source}>
                        <Badge color="gray" variant="solid" highContrast className='text-[10px] hover:bg-gray-300'>
                            <GitHubLogoIcon width={11} height={11}/> Source
                        </Badge>
                    </Link>
                </div>
            </ShineBorder>
        </MagicCard>
  )
}

export default ProjectCard