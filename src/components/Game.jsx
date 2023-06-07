import { Board } from './Board'

export const Game = ({ board, handleClick }) => {
  return <Board squares={board} onClick={handleClick} />
}
