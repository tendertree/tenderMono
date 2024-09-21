import createClient from '@infra/supabase/src/server'
import { redirect } from 'next/navigation'
import TextInfo from '@ui/custom/cards/TextInfo'
import Blog from "@ui/custom/cards/blog"
import Config from "@ui/shadcn/sections/Config"
export default async function PrivatePage() {
    const supabase = createClient()
    //@ts-ignore
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (<div className='bg-batang'>
        Hello {data.user.email}
		<Config/>
        <Blog tag={'mal'} day={'24.2.2'} title={'what is yur himo'} description={'rstrest'} image={'img.src.hi.jpg'} />
        <section className="text-gray-600 dark:text-gray-50 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-4xl pb-8 mb-4 font-bold  text-center">About Our Services</h2>
                <div className="flex flex-wrap -m-4">
                    <TextInfo subject={'currentyl'} title={'work'} description={'나는 밥을 좋아해'} viewer={'12'} comment={'32'} />
                </div>
            </div>
        </section>

    </div>
    )
}
