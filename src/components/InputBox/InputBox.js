import React, { Component } from 'react';

class InputBox extends Component {
    
    render() {
        const { id, name, type, placeholder, value, handleInput } = this.props
        return(
            <div className="input_box">
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

export default InputBox;