
import React from 'react'

interface IButton{
    text: string;
    onClick: Function;
    variant: string; // solid outline
}

const Button: React.FC<IButton> = (props) => {
    return( 
        <button
            className={
                props.variant === 'solid' ?
                "inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                :
                "inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            }
             
        >
            {props.text}
        </button>
    )
}

export default Button