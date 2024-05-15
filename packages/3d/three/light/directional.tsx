export const Map=() => {
	return(
	<>
        <directionalLight position={[25, 18, -25]}
			intensity={0.3}
			castShadow 
				showdow-camera-near={0}
				showdow-camera-far={80}
showdow-camera-left={-30}
				showdow-camera-right={30}
showdow-camera-top={0}
				showdow-camera-bottom={-25}
			/>
	</>
	)
}
