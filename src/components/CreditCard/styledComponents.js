import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   padding: 10px;
  height: 80vh;
  width: 30vw;
  background-color: ${props => (props.bgColor ? '#3b4b69' : '#fff')};
`
export const Heading = styled.h1`
  color: #fff;
  font-family: 'Roboto';
  font-size: 20px;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  margin-bottom: 40px;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 30vh;
  width: 25vw;
  border-radius: 15px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
`
export const CardNumber = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 20px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //   align-items: center;
`

export const NameText = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 12px;
`
export const CardPersonName = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`
export const CardHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 2px solid #c3cad9;
`
