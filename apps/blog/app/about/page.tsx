import React from 'react'
import TheaterBasicScene from "@feature/three/theater/basic"
import { Bottle } from '@src/model/Bottle'
function page() {
    return (
        <div className='h-screen bg-red-100'>
            <TheaterBasicScene projectName="Demo Project!">
				<Bottle/>
            </TheaterBasicScene>
        </div >
    )
}

export default page
