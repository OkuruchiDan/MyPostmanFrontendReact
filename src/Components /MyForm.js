import React from 'react';
import {ButtonGetMethod} from "./ButtonGetMethod /ButtonGetMethod";
import {ButtonPostMethod} from "./ButtonPostMethod/ButtonPostMethod";

export const MyForm = () => {
    return (
        <div>
            <ButtonGetMethod>get</ButtonGetMethod>
            <div>
                <ButtonPostMethod>post</ButtonPostMethod>
            </div>
        </div>
    )
}