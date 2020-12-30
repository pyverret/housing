import React from 'react';

// interface Props {
//     details: {
//         defaultValue?: number,
//         name: string,
//         text: string,
//         type: string
//     },
//     values?: object,
//     onChange?: any
// };

function Input(props: any): JSX.Element {
    const {name, text, type} = props.details;

    function getValue(value:number | undefined): string {
        return value ? value.toString() : '';
    }
    
    function setValue(value: string | undefined): any {
        if (type === 'number') {
            return Number(value);
        }

        return value;
    }

    return (<div>
        <label htmlFor={name}>{text}</label>
        <input 
            id={name}
            name={name}
            type={type}
            defaultValue={getValue(props.values[name])}
            onChange={(event) => props.setData({[name]: setValue(event.target.value)})} 
            />
    </div>);
}

export default Input;