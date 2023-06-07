import { useState, Fragment } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Grid, Game, Panel, Result, NextMove } from './components'
import { whoWin } from './utils/win'

let history = [Array(9).fill(null)]
let historyIndex = 0

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [next, setNext] = useState('X')
  const winner = whoWin(board)

  const handleClick = (index) => {
    const boardCopy = [...board]

    if (boardCopy[index] || winner) return

    history = history.slice(0, historyIndex + 1)
    boardCopy[index] = next

    history = history.concat([boardCopy])
    historyIndex++

    setBoard(boardCopy)
    setNext(next === 'X' ? 'O' : 'X')
  }

  const handleUndo = () => {
    if (historyIndex === 0) return

    historyIndex--
    const boardCopy = history[historyIndex]
    setBoard(boardCopy)
    setNext(next === 'X' ? 'O' : 'X')
  }

  const handleRedo = () => {
    if (historyIndex === history.length - 1) return

    historyIndex++
    const boardCopy = history[historyIndex]
    setBoard(boardCopy)
    setNext(next === 'X' ? 'O' : 'X')
  }

  const handleRestart = () => {
    setBoard(Array(9).fill(null))
    setNext('X')
    history = [Array(9).fill(null)]
    historyIndex = 0
  }

  return (
    <Fragment>
      <Canvas
        camera={{
          position: [-5, 0, 10],
        }}
      >
        <OrbitControls
          dampingFactor={0.2}
          enableDamping={true}
          enableRotate={true}
          enablePan={false}
          maxAzimuthAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.2}
          minAzimuthAngle={-Math.PI / 3}
          minPolarAngle={-Math.PI / 2}
          rotateSpeed={0.5}
        />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Grid />

        <Game board={board} handleClick={handleClick} />
      </Canvas>
      <Panel
        restart={handleRestart}
        undo={handleUndo}
        redo={handleRedo}
        canUndo={historyIndex !== 0}
        canRedo={historyIndex !== history.length - 1}
      />
      <Result winner={winner} />
      <NextMove next={next} />
    </Fragment>
  )
}

export default App
