const { useRef } = wp.element
import styled from '@emotion/styled'

export const Components = ({ attributes }) => {
  const { theme_link, text_0, text_1, text_2, text_3, image_0 } = attributes

  const stickValue = 30
  const stick = [...Array(5)].map((el, i) => i*stickValue)
  return (
    <>
      <Div onClick={() => (window.location = '/')} bg="#f3ba51" stick={stick[0]} id="block_0_start">
        <h1>{text_0}</h1>
      </Div>
      <Div bg="#f36451" stick={stick[1]} id="block_1_start">
        <h2>{text_1}</h2>
      </Div>
      <Div bg="#6987a0" stick={stick[2]} id="block_2_start">
        <h2>{text_2}</h2>
      </Div>
      <Div bg="#deaec2" stick={stick[3]} id="block_3_start">
        <h2>{text_3}</h2>
      </Div>
      <Div bg="linear-gradient(45deg,#feffe7,#0addff)" stick={stick[4]} id="block_4_start">
        <Img>
          <img src={`${theme_link}${image_0}`} alt="" />
        </Img>
      </Div>
      <Space />
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Space = styled.div`
  margin-bottom: 500px;
`

const Div = styled.div`
  box-sizing: border-box;
  border: 5px solid #000;
  border-radius: 3px;
  margin: 5px 0px;
  padding: 20px;
  background: ${props => props.bg};
  height: calc(var(--vh, 1vh) * 80);
  max-height: 800px;
  max-width: 500px;

  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: sticky;
  top: ${props => props.stick}px;

  color: #fff;

  && h1,
  && h2,
  && h3,
  && h4,
  && h5 {
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
  }

  && > h1 {
    text-align: center;
    font-size: 70px;
    ${q(500)} {
      font-size: 100px;
    }
    font-weight: 400;
    width: auto;
    margin: 40px 0px 0px 0px;
  }

  && > h2 {
    margin-top: 10px;
    font-weight: 400;
  }
`

const Img = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    max-width: 400px;
    max-height: 424px;
    width: 100%;
    height: 100%;
  }
`
