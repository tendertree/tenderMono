/*
 *  Simple person component 
 */

// const PersonList = [
//     {
//         name: "1.kim",
//         desc: "this is good",
//         type: "design"
//     },
//     {
//         name: "2.choi",
//         desc: "ths good",
//         type: "party"
//     },
//     {
//         name: "3.kim",
//         desc: "this is good",
//         type: "design"
//     },
// ]

interface Prop {
    name: string;
    desc: string;
    type: string;
}

export default function Person({ name, desc, type}: Prop): React.ReactElement {
    return (
        <div className={` shadow-md rounded-lg p-3 mt-2 bg-white object-fill`}>
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-600 mb-2">{desc}</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {type}
            </span>
        </div>
    );
}


