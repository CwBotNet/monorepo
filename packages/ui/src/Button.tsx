import React from "react"


interface Button {
    label: string
    fnc: () => void;
}


export default function Button(button: Button) {
    return <button onClick={button.fnc}>{button.label}</button>
}