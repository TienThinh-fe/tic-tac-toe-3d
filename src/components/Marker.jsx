import { Fragment } from 'react'
import { DoubleSide } from 'three'
import { X } from './X'
import { O } from './O'

export const Marker = ({ shape, position, onClick }) => {
  let mark = null

  shape === 'X'
    ? (mark = <X position={position} />)
    : shape === 'O'
    ? (mark = <O position={position} />)
    : (mark = null)

  // render mark if there is a selection, else render a mesh for clicking event
  return (
    <Fragment>
      {mark}
      <mesh position={position} onClick={(e) => onClick(e)}>
        <planeGeometry args={[2, 2]} />
        <meshLambertMaterial
          side={DoubleSide}
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>
    </Fragment>
  )
}
