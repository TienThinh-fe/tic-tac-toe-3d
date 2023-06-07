import styled from 'styled-components'

const Text = styled.span`
  position: absolute;
  right: 100px;
  top: calc(50vh - 40vh);
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
`

export const NextMove = ({ next }) => {
  return <Text>{next}'s turn</Text>
}
