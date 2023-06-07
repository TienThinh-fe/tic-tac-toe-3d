import { Fragment } from 'react'

import { Bar } from './Bar'

// tic-tac-toe grid with 4 bars
export const Grid = () => {
  return (
    <Fragment>
      <Bar position={[2.5, 0, 0]} />
      <Bar position={[-0.1, 0, 0]} />
      <Bar position={[1.2, -1.3, 0]} rotation={[0, 0, Math.PI / 2]} />
      <Bar position={[1.2, 1.3, 0]} rotation={[0, 0, Math.PI / 2]} />
    </Fragment>
  )
}
