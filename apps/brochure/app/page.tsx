"use client"
import Brands from '@src/components/Brands'
import Feature from '@src/components/Feature'
import Header from '@src/components/Header'
import Testimonial from '@src/components/Testimonial'
import Intergration from '@src/components/Integration'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Trial from '@src/components/Trial'
import Footer from '@src/components/Footer'
import ColorPresetList from '@src/components/ColorPresetList'
import Hero from '@ui/custom/section/Hero'

export default function Page() {
    return (
        <div>
            <ReactLenis root>
                <ColorPresetList />
                <Hero title={'This is Title'} desc={'Some thing Interseting story'} />
                <Brands />
                <Feature />
                <Intergration />
                <Testimonial />
                <Trial />
                <Footer />
                <div className="h-[8000px]">
                </div>
            </ReactLenis>
        </div >
    )
}



