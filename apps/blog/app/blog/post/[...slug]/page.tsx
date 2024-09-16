import React from 'react'



type Props = {
  params: { slug: string, title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}



export default function Page({ params }: { params: { slug: string } }) {
    const content = `
     <div> I'm your energy</div>
	`
    return (
        <div className='flex flex-col mx-auto justify-between'>
            <h1 className='text-lg font-bold'>Title</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {params.slug}
        </div>
    )
}

