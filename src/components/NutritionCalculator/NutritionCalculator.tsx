import { useState } from "react";
import RangeField from "../RangeField/RangeField";
import "./NutritionCalculator.css";

import { WEIGHT_FIELD, HEIGHT_FIELD, AGE_FIELD } from "../../constants/nutritionCalculatorConstants";

interface UserMeasurements {
    weight: number;
    height: number;
    age: number;
}

export default function NutritionCalculator(): React.JSX.Element {
    const [values, setValues] = useState<UserMeasurements>({
        weight: WEIGHT_FIELD.defaultValue,
        height: HEIGHT_FIELD.defaultValue,
        age: AGE_FIELD.defaultValue
    });

    const handleValueChange = (id: string, value: number): void => {
        setValues((previous) => ({ ...previous, [id]: value }));
    };

    const bmr: number = Math.round(
        10 * values.weight + 6.25 * values.height - 5 * values.age + 5
    );

    const formatBmi = (bmi: number): string => {
        if (bmi < 18.5) return "<18.5";
        if (bmi > 40) return ">40.0";
        return bmi.toFixed(1);
    };

    const getBmiCategory = (bmi: number): string => {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25) return "Normal weight";
        if (bmi < 30) return "Overweight";
        if (bmi < 35) return "Obesity I.";
        if (bmi < 40) return "Obesity II.";
        return "Obesity III.";
    };

    const heightInMeters: number = values.height / 100;
    const bmi: number = values.weight / (heightInMeters * heightInMeters);

    const bmiDisplay: string = formatBmi(bmi);
    const bmiCategory: string = getBmiCategory(bmi);
    
    return (
        <div className="nutrition-calculator">
            <h1>Nutrition Calculator - BMR/BMI</h1>
            <RangeField 
                id={WEIGHT_FIELD.id}
                label={WEIGHT_FIELD.label}
                unit={WEIGHT_FIELD.unit}
                min={WEIGHT_FIELD.min}
                max={WEIGHT_FIELD.max}
                value={values.weight}
                onValueChange={handleValueChange}
            />
            <RangeField 
                id={HEIGHT_FIELD.id}
                label={HEIGHT_FIELD.label}
                unit={HEIGHT_FIELD.unit}
                min={HEIGHT_FIELD.min}
                max={HEIGHT_FIELD.max}
                value={values.height}
                onValueChange={handleValueChange}
            />
            <RangeField 
                id={AGE_FIELD.id} 
                label={AGE_FIELD.label}
                unit={AGE_FIELD.unit}
                min={AGE_FIELD.min}
                max={AGE_FIELD.max}
                value={values.age}
                onValueChange={handleValueChange}
            />
            <div className="nutrition-calculator__results">
                <div className="bmi-result">
                    <p>BMI:</p>
                    <div className="bmi-result__value-wrapper">
                        <p className="bmi-result__value">{bmiDisplay}</p>
                    </div>
                    <p>Your weight category: {bmiCategory}</p> 
                </div>
                <div className="bmr-result">
                    <p>BMR:</p>
                    <div className="bmr-result__value-wrapper">
                        <p className="bmr-result__value">{bmr}</p>
                        <p>kcal/day</p>
                    </div>
                </div>
            </div>
        </div>
    );
}