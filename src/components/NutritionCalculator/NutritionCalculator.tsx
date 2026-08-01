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
        </div>
    );
}