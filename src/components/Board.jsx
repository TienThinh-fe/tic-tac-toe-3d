import { Fragment } from 'react'
import { Marker } from './Marker'

import { BOARD_POSITIONS } from '../libs/constants'

export const Board = ({ squares, onClick }) => {
  return (
    <Fragment>
      {BOARD_POSITIONS.map((position, index) => (
        <Marker
          key={index}
          shape={squares[index]}
          position={position}
          onClick={() => onClick(index)}
        />
      ))}
    </Fragment>
  )
}
