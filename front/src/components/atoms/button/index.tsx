import React, { Component} from "react";

export enum ButtonTypes {
    DANGER, 
    SUCCESS,
    WARNING
}

export type Props = {
    type: ButtonTypes,
    children: React.ReactElement | string
} 


export const Button:React.FC<Props> = ({
    type,
    children
}) => {
    return (
        <button>{children}</button>
    );
};

