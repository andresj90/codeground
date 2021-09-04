import React, { FC } from "react";
import styled from 'styled-components';
/* type definition and enums */
enum Type {
    paragraph,
    heading1, 
    heading2,
    heading3, 
    heading4, 
    heading5,
    heading6,
}

enum Size {
    extrasmall,
    small,
    medium,
    large, 
    extralarge
}

enum Weight {
    normal,
    bold,
    light
}

type Props = {
    children: React.ReactChild,
    className: string, 
    size:Size,
    weight: Weight,
}


/* styles */


const Text: FC<Props> = ({
    children,
    className,
    size,
    weight,
}) => {
    return (
        <Text
        className={className} 
        size={size}
        weight={weight}
        >
            {children}
        </Text>
    )
}

const TextEle = styled(Text)`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;

`


export const P = (className:string, children: React.ReactChild) => {
    return (
        <Text
         className={className}
         size={Size.medium}
         weight={Weight.light}

        >
              {children}
        </Text>
    )
}