import { motion, AnimatePresence } from 'framer-motion'
import { Fragment } from 'react'
import styled from 'styled-components'

const Container = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 200px;
  height: 50px;
  background: rgb(98, 111, 157);
  background: linear-gradient(
    0deg,
    rgba(98, 111, 157, 1) 0%,
    rgba(49, 45, 133, 1) 100%
  );
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
`

export const Result = ({ winner }) => {
  return (
    <Fragment>
      <AnimatePresence>
        {winner && (
          <Container
            initial={{ opacity: 0, y: -100, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -100, x: '-50%' }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              bounce: 0.25,
            }}
          >
            {winner !== 'tie' ? (
              <Text>{winner} WON! 🎉</Text>
            ) : (
              <Text>tie 🚧</Text>
            )}
          </Container>
        )}
      </AnimatePresence>
    </Fragment>
  )
}
