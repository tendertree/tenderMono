import React from 'react'
import TextInfo from '../cards/TextInfo';

interface TextInfoProps {
    subject: string;
    title: string;
    description: string;
    viewer: string;
    comment: string;
}


const textInfoDataExample: TextInfoProps[] = [
    { subject: 'currently', title: 'work', description: '현재 작업 중입니다', viewer: '12', comment: '32' },
    { subject: 'currently', title: 'work', description: '추가 작업 필요', viewer: '12', comment: '32' },
    { subject: 'currently', title: 'work', description: '또 다른 작업', viewer: '12', comment: '32' },
];


interface InfoWith3TextCardProps {
    title: string;
    TextInfoData: TextInfoProps[];
}

export default function InfoWith3TextCard({ title, TextInfoData }: InfoWith3TextCardProps) {
    return (
        <section className="text-gray-600 dark:text-gray-50 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-4xl pb-8 mb-4 font-bold  text-center">{title}</h2>
                <div className="flex flex-wrap -m-4">
                    {TextInfoData.map((data, index) => (
                        <TextInfo
                            key={index}
                            subject={data.subject}
                            title={data.title}
                            description={data.description}
                            viewer={data.viewer}
                            comment={data.comment}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

