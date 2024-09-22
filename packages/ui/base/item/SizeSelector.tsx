/**
 * @module simple size selector
 */
import React from 'react'

export default function SizeSelector() {
    return (
        <div>
            <span className="mr-3">Size</span>
            <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-black pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
        </div>
    )
}
