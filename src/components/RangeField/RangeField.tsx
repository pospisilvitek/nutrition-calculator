import { useState } from "react";
import "./RangeField.css";

interface RangeFieldProps {
    id: string;
    label: string;
    unit: string; 
    min: number;
    max: number;
    value: number;
    onValueChange: (id: string, value: number) => void;
}

export default function RangeField({
    id,
    label,
    unit,
    min,
    max,
    value,
    onValueChange
}: RangeFieldProps): React.JSX.Element {
    const [numberInputValue, setNumberInputValue] = useState<number | "">(value);

    const handleNumberInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const rawValue: string = event.target.value;
        
        if (rawValue === "") {
            setNumberInputValue("");
            return;
        }
        
        if (!/^\d+$/.test(rawValue)) return;
        
        const numericValue: number = Number(event.target.value);

        if (numericValue >= max) {
            setNumberInputValue(max);
            return;
        } 
        
        setNumberInputValue(numericValue);
    };

    const handleRangeInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const numericValue: number = Number(event.target.value);

        setNumberInputValue(numericValue);
        onValueChange(id, numericValue);
    };

    const handleNumberInputBlur = (): void => {
        if (numberInputValue === "") {
            setNumberInputValue(value);
            return;
        }

        if (numberInputValue < min) {
            setNumberInputValue(min);
            onValueChange(id, min);
            return;
        }

        onValueChange(id, numberInputValue);
    };

    const handleNumberInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            event.currentTarget.blur();
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
                className="range-field__slider"
                type="range" 
                min={min}
                max={max}
                step={1}
                value={value}
                onChange={handleRangeInputChange}
            />
            <div className="range-field__result">
                <input 
                    className="range-field__number-input"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={numberInputValue}
                    onChange={handleNumberInputChange}
                    onBlur={handleNumberInputBlur}
                    onKeyDown={handleNumberInputKeyDown}
                />
                <span className="range-field__unit">{unit}</span>
            </div>
        </div>
    );
}