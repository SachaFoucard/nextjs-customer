import React, { PropsWithChildren } from 'react'
import { Section } from './Section'
import { Button } from '@/components/ui/button'
import { CustomeIcon } from './icons/CustomeIcon'
export default function Hero() {
    return (
        <Section className='flex flex-col gap-2 lg:gap-4 absol'>
            <h1 className='text-3xl lg:text-5xl font-bold'>Hey I'm Sacha 👋</h1>
            <p className='text-lg leading-9 text-muted-foreground'>I help {" "}
                <Code>
                    <CustomeIcon className='inline mr-0.5' name='youtube' size={16} />
                    Youtuber
                </Code>{" "}
                growing on Youtube with captivating
                <Code className='whitespace-nowrap'>  <CustomeIcon className='inline mr-0.5' name='video' size={16} />video editing</Code>.
            </p>
            <div className='mt-4 lg:mt-6 flex items-center flex-wrap gap-4'>
                <Button size="lg" className='w-fit mt-5'>Schedul a call</Button>
                <Button variant="ghost" size="lg" className='w-fit mt-5'>
                    <CustomeIcon size={16} name='twitter' className='mr-3' />@Ana_tutu</Button>
            </div>
        </Section>
    )
}

export const Code = (props: PropsWithChildren<{ className?: string }>) => {
    return (
        <span className='px-1 mx-0.5 rounded-md items-center bg-card/20 border-accent border py-1 '>
            {props.children}
        </span>
    )
}
