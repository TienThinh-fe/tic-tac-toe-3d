import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const O = (props) => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.005
  })

  return (
    <mesh {...props} ref={ref}>
      <dodecahedronGeometry args={[0.8, 0]} />
      <meshNormalMaterial />
    </mesh>
  )
}
