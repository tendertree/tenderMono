

interface ButtonProps {
    text: string;
}

export default function ButtonSecondary({ text }: ButtonProps): React.ReactElement {
    return (

        <button className='relative min-w-[160px] inline-flex items-center justify-center px-6 py-[15x] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group'>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-dark via-neutral to-dark"></span>
            <span className="absolute bottim-9 right-9 block w-64 h-64 mb-32 mr-4 transition suration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-red-200 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white text-sm uppercase tracking-[1px]">
                {text}
            </span>
        </button>
    )
}

