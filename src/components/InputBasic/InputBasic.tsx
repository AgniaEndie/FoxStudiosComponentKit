import React, { useState } from 'react';
import './InputBasic.css';
//ввод данных
interface TextInputProps {
    label: string;
    onInputChange: (inputValue: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ label, onInputChange }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    };

    return (
        <div>
            <label>{label}:</label>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    );
};




