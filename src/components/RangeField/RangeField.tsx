import { useState } from "react";
import "./RangeField.css";

interface RangeFieldProps {
    id: string;
    label: string;
    defaultValue: number;
    unit: string; 
    min: number;
    max: number;
}

export default function RangeField({
    id,
    label,
    defaultValue,
    unit,
    min,
    max
}: RangeFieldProps): React.JSX.Element {
    const [value, setValue] = useState<number>(defaultValue);
    const [numberInput, setNumberInput] = useState<number | "">(defaultValue);

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const rawValue: string = event.target.value;
        
        if (rawValue === "") {
            setNumberInput("");
            return;
        } 
        
        if (!/^\d+$/.test(rawValue)) return;
        
        const numericValue: number = Number(event.target.value);

        if (numericValue >= max) {
            setValue(max);
            setNumberInput(max);
            return;
        } 
        
        setValue(numericValue);
        setNumberInput(numericValue);
    };

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const numericValue: number = Number(event.target.value);

        setValue(numericValue);
        setNumberInput(numericValue);
    };

    const handleNumberBlur = (): void => {
        if (numberInput === "") {
            setValue(min);
            setNumberInput(min);
            return;
        }

        if (value < min) {
            setValue(min);
            setNumberInput(min);
        }
    };

    return (
        <div className="range-field">
            <label 
                htmlFor={id}
                className="range-field__label"
            >
                {label}
            </label>
            <input 
                id={id}
                name={id}
                className="range-field__slider"
                type="range" 
                min={min}
                max={max}
                step={1}
                value={value}
                onChange={handleRangeChange}
            />
            <div className="range-field__result">
                <input 
                    className="range-field__number-input"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={numberInput}
                    onChange={handleNumberChange}
                    onBlur={handleNumberBlur}
                />
                <span className="range-field__unit">{unit}</span>
            </div>
        </div>
    );
}