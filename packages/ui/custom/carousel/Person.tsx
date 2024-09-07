import { motion } from "framer-motion";
import { fadeInOnScroll } from "../utils/motionVariants"
const PersonList = [
    {
        name: "1.kim",
        desc: "this is good",
        type: "design"
    },
    {
        name: "2.choi",
        desc: "ths good",
        type: "party"
    },
    {
        name: "3.kim",
        desc: "this is good",
        type: "design"
    },
    {
        name: "4.choi",
        desc: "ths good",
        type: "party"
    },
    {
        name: "5.kim",
        desc: "this is good",
        type: "design"
    },
    {
        name: "6choi",
        desc: "ths good",
        type: "party"
    }
]

interface CardProps {
    name: string;
    desc: string;
    type: string;
    className?: string;
}

function Card({ name, desc, type, className = '' }: CardProps): React.ReactElement {
    return (
        <div className={` shadow-md rounded-lg p-3 mt-2 bg-white ${className}`}>
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-600 mb-2">{desc}</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {type}
            </span>
        </div>
    );
}


export default function CarouselPerson(): JSX.Element {
    return (
        <section className="w-full h-[24vh] pt-24 justify-center items-center">
            <p className="text-[20px]  mx-auto  text-center font-bold mb-2">Join us </p>
            <motion.div variants={fadeInOnScroll(0.2, 0.6)} initial="hidden" whileInView="visible" className="container mx-auto overflow-hidden">
                <div className="flex">
                    <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex">
                        {PersonList.map((item, index) => {
                            return <div className="relative w-52 h-32 mr-12" key={index}>
                                <Card className="object-contain" name={item.name} desc={item.desc} type={item.type}></Card>
                            </div>
                        })}

                    </motion.div>
                    <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex">
                        {PersonList.map((item, index) => {
                            return <div className="relative w-52 h-20 mr-12" key={index}>
                                <Card className="object-contain" name={item.name} desc={item.desc} type={item.type}></Card>
                            </div>
                        })}

                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
