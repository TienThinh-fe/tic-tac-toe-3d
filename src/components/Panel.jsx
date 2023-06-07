import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import { ReactComponent as MenuIcon } from '../assets/menu.svg'

// #region styles
const Container = styled(motion.div)`
  position: absolute;
  right: 40px;
  top: 160px;
  height: 40vh;
  width: 200px;
  background: rgb(98, 111, 157);
  background: linear-gradient(
    0deg,
    rgba(98, 111, 157, 1) 0%,
    rgba(49, 45, 133, 1) 100%
  );
  z-index: 1000;
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(131, 127, 127, 0.589);
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h2``

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
`

const Option = styled.span`
  font-weight: 700;
  font-size: 2.2rem;
  user-select: none;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  transition: all 0.2s ease;
  padding: 4px 10px;

  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
    transform: ${({ isActive }) => (isActive ? 'translateX(6px)' : 'none')};
  }
`

const Toggle = styled.button`
  all: unset;
  position: absolute;
  right: 40px;
  top: calc(50vh - 40vh);
  z-index: 1000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(98, 111, 157);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgb(49, 45, 133);
  }

  &:active {
    background: rgb(49, 45, 133);
    transform: scale(0.9);
  }
`
// #endregion

export const Panel = ({ restart, undo, canUndo, redo, canRedo }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Container
            initial={{
              x: 300,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: 300,
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              bounce: 0.5,
              duration: 0.8,
              delay: 0.1,
            }}
            key='menu'
          >
            <Header>
              <Title>TicTac Panel</Title>
            </Header>
            <Options>
              <Option isActive={canUndo} onClick={undo}>
                Undo
              </Option>
              <Option isActive={canRedo} onClick={redo}>
                Redo
              </Option>
              <Option isActive={true} onClick={restart}>
                Restart
              </Option>
            </Options>
          </Container>
        )}
      </AnimatePresence>
      <Toggle onClick={() => setIsOpen((prev) => !prev)}>
        <MenuIcon />
      </Toggle>
    </>
  )
}
