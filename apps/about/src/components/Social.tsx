import React from 'react'
import { Github, Instagram } from 'lucide-react'
import Link from 'next/link'

const socials = [
    { icon: <Github />, path: '' },
    { icon: <Instagram />, path: '' }
]

interface SocialProps {
    containerStyle?: string;
    iconStyle?: string;
}

export default function Social({ containerStyle = '', iconStyle = '' }: SocialProps) {
    return (
        <div className={containerStyle}>
            {socials.map((social, index) => {
                return (
                    <Link href={social.path} key={index} className={iconStyle}>
                        {social.icon}

                    </Link>
                )


            })}
        </div>
    )
}
