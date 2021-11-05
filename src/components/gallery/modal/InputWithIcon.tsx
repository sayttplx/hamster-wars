import React from 'react'
import { InputContainer, IconContainer, ModalInput } from './Input'

type InputWithIconProps = { icon?: JSX.Element } & JSX.IntrinsicElements['input']

const InputWithIcon: React.FC<InputWithIconProps> = ({ icon, ref, ...props }) => {
  return (<InputContainer>
    {icon && <IconContainer>{icon}</IconContainer>}
    <ModalInput {...props} />
  </InputContainer>);
}

export default InputWithIcon