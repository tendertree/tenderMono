import React from 'react'

export default function Scene() {
    return (
        <mesh>
			<planeGeometry args={[2, 3]} />
            <meshNormalMaterial />
        </mesh>
)
}
