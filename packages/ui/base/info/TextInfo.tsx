/**
 * @module simple text info card
 */
import React from 'react'

interface Props{
	subject: string
	title: string
	description: string
	viewer: string
	comment: string
}


function TextInfo({subject,title,description,viewer,comment}: Props) {
    return (

        <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h2 className="tracking-widest text-xs title-font font-medium  mb-1">{subject}</h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">{title}</h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50  ">
					{description}
                </p>
                <a className=" inline-flex items-center hover:text-indigo-700">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 dark:text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>{viewer} Views
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>{comment} Comments
                    </span>
                </div>
            </div>
        </div>

    )
}

export default TextInfo