"use client"
import Feature from '@src/components/Feature'
import Header from '@src/components/Header'
import Testimonial from '@ui/custom/carousel/Testimonial'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Trial from '@src/components/Trial'
import ColorPresetList from '@src/components/ColorPresetList'
import Hero from '@ui/custom/section/HTextWithImage'
import CarouselPerson from '@ui/custom/carousel/Person'
import IconDescButton from '@ui/custom/section/IconDescButton'
import Banner from '@ui/custom/info/Banner'
import Footer from '@ui/custom/footer/footer'
export default function Page() {
    return (
        <div>
            <ReactLenis root>
                <ColorPresetList />
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



