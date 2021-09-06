import React from "react";
import styled from 'styled-components';

const ButtonStyled = styled.button`
background: ${props => props.theme};
color: ${props => props.theme};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid Chartreuse;
border-radius: 3px;
`;

export enum ButtonTypes {
    DANGER, 
    SUCCESS,
    WARNING
}

export type Props = {
    theme: ButtonTypes,
    children: React.ReactElement | string,
    onClick(event: React.MouseEvent<HTMLElement>):void
} 

export const Button:React.FC<Props> = ({
    theme,
    children,
    onClick
}) => {
    return (
        <ButtonStyled onClick={onClick} theme={theme}>{children}</ButtonStyled>
    );
};