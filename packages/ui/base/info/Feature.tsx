import { LucideIcon } from 'lucide-react';
import React from 'react'
import { IconType } from 'react-icons';


interface FeatureProps {
  icon: LucideIcon|IconType;
  title: string;
  description: string;
}

export default function Feature({ icon: Icon, title, description }: FeatureProps) {
    return (

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20" >

                <div className="p-6  rounded-lg bg-darkWeak">

                    <div className="mb-5">
						      <Icon size={24}  className='bg-strong rounded-full' />
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

