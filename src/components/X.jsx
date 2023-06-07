import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const X = (props) => {
  const ref = useRef()

  // animate the X
  useFrame(() => {
    ref.current.rotation.z += Math.PI / 360
  })

  return (
    // using 2 cylinder geometries to make an X
    <group {...props} ref={ref}>
      <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderBufferGeometry args={[0.15, 0.15, 2, 32]} />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderBufferGeometry args={[0.15, 0.15, 2, 32]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}
