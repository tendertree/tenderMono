/**
 * @module simple carousel 
 * children compnent shoulbe {testimonial.map((item, index) =>  return ()} structure
 */
import { motion } from "framer-motion";
import { fadeInOnScroll } from "../lib/motionVariants"

export default function Carousel(children: React.ReactNode): JSX.Element {
    return (
        <section className="w-full h-[24vh] pt-24 justify-center items-center">
            <p className="text-[20px]  mx-auto  text-center font-bold mb-2">Join us </p>
            <motion.div variants={fadeInOnScroll(0.2, 0.6)} initial="hidden" whileInView="visible" className="container mx-auto overflow-hidden">
                <div className="flex">
                    <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex">
                        {children}

                    </motion.div>
                    <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex">
                        {children}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
