import React from 'react'
import { CardHeader, CardTitle, CardDescription, CardContent, Card } from '../base/card'
import { Avatar, AvatarImage, AvatarFallback } from '../base/avatar'
import { Badge } from '../base/badge'
import { Briefcase, Lightbulb, Award, GraduationCap, BriefcaseBusiness } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../base/tooltip';

type CareerTypeProps = {
    type: 'work' | 'side' | 'award' | 'education';
};


interface Tag {
    name: string;
}


export interface JobProps {
    thumbnail: string;
    company: string;
    type: CareerTypeProps['type']; // 수정된 부분
    title: string;
    duration: string;
    description: string;
    tags: Tag[];
    index: number;
}

//<AvatarImage src={thumbnail} alt={company} />

export default function Career({ thumbnail, index, company, title, duration, description, tags, type }: JobProps) {
    return (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300 mt-4 w-full mx-auto max-w-lg">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                        <CareerType type={type} />
                        <div>
                            <CardTitle className="flex items-center space-x-2">
                                <span>{title}</span>
                            </CardTitle>
                            <CardDescription>{company}</CardDescription>
                        </div>
                    </div>
                    <Badge
                        variant="secondary"
                        className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]"
                    >
                        {duration}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p className="mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">

                    {tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">{tag.name} </Badge>
                    ))}


                </div>
            </CardContent>
        </Card>
    )
}

const CareerType: React.FC<CareerTypeProps> = ({ type }) => {
    const getIcon = () => {
        switch (type) {
            case 'work':
                return <Briefcase className="h-5 w-5" />;
            case 'side':
                return <Lightbulb className="h-5 w-5" />;
            case 'award':
                return <Award className="h-5 w-5" />;
            case 'education':
                return <GraduationCap className="h-5 w-5" />;
            default:
                return null;
        }
    };

    const getMessage = () => {
        switch (type) {
            case 'work':
                return '직장 경력';
            case 'side':
                return '사이드 프로젝트';
            case 'award':
                return '수상 경력';
            case 'education':
                return '교육 이력';
            default:
                return '';
        }
    };

    return (
        <div className='h-12 w-12 border-black bg-black rounded-full flex items-center justify-center'>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger className='flex items-center justify-center'>
                        <div className=' flex items-center justify-center h-full w-full text-white-100'>
                            {getIcon()}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{getMessage()}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};


