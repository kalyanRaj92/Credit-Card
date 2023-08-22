/* import {useState} from 'react'

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
export default CreditCard  */


import {useState} from 'react'

import {
  MainContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardholderNameText,
  CardholderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardHolderName] = useState('')
  const cardholderNameInUppercase = cardholderName.toUpperCase()

  const onChangeCardholderName = event => {
    setCardHolderName(event.target.value)
  }

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardholderNameText>CARDHOLDER NAME</CardholderNameText>
            <CardholderName>{cardholderNameInUppercase}</CardholderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardholderName}
            onChange={onChangeCardholderName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard

