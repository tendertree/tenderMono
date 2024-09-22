"use client"
import Service from "@ui/base/list/Service"
import Config from "@ui/base/list/Config"
import Logo from "@ui/base/item/Logo"
import { TextInfoList } from "@ui/base/card/TextInfo"
import Caro_Person from "@ui/base/list/Caro_Person"
import { Lism } from "@ui/base/card/Person"

// //
// //
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
]

const List = [
    {
        age: 1,
        school: "this is good",
    },
    {
        age: 2,
        school: "home",
    },
	  {
        age: 3,
        school: "this is good",
    },
    {
        age: 4,
        school: "home",
    },
	  {
        age: 5,
        school: "this is good",
    },
    {
        age: 6,
        school: "home",
    },

]

interface SchoolProp {
    age: number;
    school: string;
}

interface SListProp {
    list: SchoolProp[];
}

export function School({ age, school }: SchoolProp) {
    return (
        <div>
            <div  className="relative w-[468px] h-[300px]  mr-12 rounded-2xl flex flex-col justify-center px-14">
                <p className='text-black mb-3 text-3xl'>icon </p>
                <p className='mb-4 text-lg text-black'>{age}arst</p>
                <p className="text-xl text-xl text-red-100">{school}</p>
            </div>
        </div>
    );
}

export function SchoolList({ list }: SListProp) {
    return (
        list.map((item, index) => {
            return <div className="relative mr-12" key={index}>
                <School
                    age={item.age}
                    school={item.school}
                />
            </div>
        })

    );
}


export default function Home() {
    return (
        <div className="px-8">
            this page is origin page
            <Caro_Person  >
                <SchoolList list={List} />
            </Caro_Person>
        </div>
    );
}
