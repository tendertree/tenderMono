import { Bottle } from '@src/models/Bottle'
//@ts-ignore 
import TheaterBasicScene from "@feature/three/theater/basic"
function page() {
    return (
        <div className='h-screen bg-red-100'>
			  <TheaterBasicScene projectName="shine">
				<Bottle/>
            </TheaterBasicScene>
        </div >
    )
}

export default page
