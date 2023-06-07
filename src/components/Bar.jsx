export const Bar = (props) => {
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.1, 0.1, 8, 28]} />
      <meshNormalMaterial />
    </mesh>
  )
}
