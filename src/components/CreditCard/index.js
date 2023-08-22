import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  CardContainer,
  DetailsContainer,
  CardNumber,
  NameText,
  CardPersonName,
  CardHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setCardNumber] = useState('')
  const [name, setCardName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setCardName(event.target.value)
  }
  return (
    <MainContainer>
      <SubContainer bgColor>
        <Heading>CREDIT CARD</Heading>
        <CardContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <DetailsContainer>
            <NameText>CARDHOLDER NAME</NameText>
            <CardPersonName>{name.toLocaleUpperCase()}</CardPersonName>
          </DetailsContainer>
        </CardContainer>
      </SubContainer>
      <SubContainer>
        <CardHeading>Payment Method</CardHeading>
        <Input
          value={number}
          type="text"
          placeholder="Card Number"
          onChange={onChangeNumber}
        />
        <Input
          value={name}
          type="text"
          placeholder="Cardholder Name"
          onChange={onChangeName}
        />
      </SubContainer>
    </MainContainer>
  )
}
export default CreditCard
