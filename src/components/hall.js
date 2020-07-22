const { useEffect, useState } = wp.element
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { useReplace100vh } from '../hooks/usereplace100vh'
import { Components } from './components'

const globalStyles = `
font-family: 'Londrina Solid', cursive;
font-size: 14px;
`

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        ${globalStyles}
      }
    `}
  />
)

export const Hall = () => {
  useReplace100vh()

  const [{ attrs: attributes }, setWp] = useState({})

  useEffect(() => {
    setWp(wp_theme_kuworking.blocks[0])
  }, [])

  if (!attributes) return <></>

  return (
    <>
      <GlobalStyles />
      <Components attributes={attributes} />
    </>
  )
}

export const HallGutenberg = ({ attributes }) => (
  <Body>
    <Components attributes={attributes} />
  </Body>
)

const Body = styled.div`
  ${globalStyles}
  display: flex;
  flex-direction: column;
  align-items: center;
`
