import React, { Component } from 'react';
import './InputBox_JT.scss';

class InputBox_JT extends Component {
    render() {
        const { id, name, type, placeholder, value, handleInput } = this.props
        return(
            <div className="InputBox_JT">
                <input 
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder} 
                    value={value}
                    onChange={handleInput} 
                />
            </div>
        );
    }
};

export default InputBox_JT;