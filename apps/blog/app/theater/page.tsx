import TheaterBasicScene from '@feature/three/theater/basic'
import { Bottle } from '@src/model/Bottle'
import React from 'react'

export default function page() {
  return (
            <TheaterBasicScene projectName="Demo Project!">
				<Bottle/>
            </TheaterBasicScene>
 

  )
}
