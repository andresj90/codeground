import React, { Component, FC } from "react";

export interface InputProps {
    name: string;
    label: string;
    type: string;
}
export const Input: FC<InputProps> = ({
    name,
    label,
    type,
}) => {
    const displayLabel = label && <label htmlFor={name}>{label}</label>
    return (
        <>
            {displayLabel}
            <input type={type} id={name}></input>
        </>
    );
}