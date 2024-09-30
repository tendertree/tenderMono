import MaxWidthWrapper from '@/layout/wrapper/MaxWidthWrapper';
import { LucideIcon } from 'lucide-react';
import React from 'react'
import { IconType } from 'react-icons';


interface FeatureProps {
    icon: LucideIcon | IconType;
    title: string;
    description: string;
}

interface FeatureListProps{
	list:FeatureProps[]
}

export default function Feature({ icon: Icon, title, description }: FeatureProps) {
    return (

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20" >

            <div className="p-6  rounded-lg bg-darkWeak">

                <div className="mb-5">
                    <Icon size={24} className='bg-strong rounded-full' />
                </div>

                <h3 className="text-lg font-bold mb-2 text-light">
                    {title}
                </h3>

                <p className="text-sm leading-6 text-white">
                    {description}
                </p>

            </div>
        </div>
    )
}


/**
 * feature with icon and description
 */
export function IconWithDescription({ list}:FeatureListProps) {
    return (
        <section className='border-t border-gray-200 bg-gray-50'>
            <MaxWidthWrapper className='py-20'>
                <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
                    {list.map((feature) => (
                        <div
                            key={feature.title}
                            className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                            <div className='md:flex-shrink-0 flex justify-center'>
                                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                                    {<feature.icon className='w-1/3 h-1/3' />}
                                </div>
                            </div>

                            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                                <h3 className='text-base font-medium text-gray-900'>
                                    {feature.title}
                                </h3>
                                <p className='mt-3 text-sm text-muted-foreground'>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}



