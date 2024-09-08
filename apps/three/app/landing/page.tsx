"use client"
import Testimonial from '@ui/custom/carousel/Testimonial'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Hero from '@ui/custom/section/HTextWithImage'
import IconDescButton from '@ui/custom/section/IconDescButton'
import Banner from '@ui/custom/info/Banner'
import Footer from '@ui/custom/footer/footer'
import CarouselPerson from '@ui/custom/carousel/Person'
import Feature from '@ui/custom/section/FeatureLImage'
export default function Page() {
    return (
        <div>
            <ReactLenis root>
                <Hero title={'This is Title'} desc={'Some thing Interseting story'} />
                <CarouselPerson />
                <Feature />
                <IconDescButton />
                <Testimonial />
                <Banner />
                <Footer />
                <div className="h-[8000px]">
                </div>
            </ReactLenis>
        </div >
    )
}



