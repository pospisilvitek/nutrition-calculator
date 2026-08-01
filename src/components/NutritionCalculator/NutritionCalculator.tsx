import { useState } from "react";
import RangeField from "../RangeField/RangeField";
import "./NutritionCalculator.css";

interface UserMeasurements {
    weight: number;
    height: number;
    age: number;
}

export default function NutritionCalculator(): React.JSX.Element {
    const [values, setValues] = useState<UserMeasurements>({
        weight: 75,
        height: 175,
        age: 30
    });

    const handleValueChange = (id: string, value: number): void => {
        // "id" matches a RangeField's "id" prop (e.g. "weight")
        setValues((previous) => ({ ...previous, [id]: value }));
    };
    
    return (
        <div className="nutrition-calculator">
            <h1>Nutrition Calculator - BMR/BMI</h1>
            <RangeField 
                id="weight" 
                label="Weight"
                unit="kg"
                min={40}
                max={200}
                value={values.weight}
                onValueChange={handleValueChange}
            />
            <RangeField 
                id="height" 
                label="Height"
                unit="cm"
                min={100}
                max={220}
                value={values.height}
                onValueChange={handleValueChange}
            />
            <RangeField 
                id="age" 
                label="Age"
                unit="years"
                min={18}
                max={100}
                value={values.age}
                onValueChange={handleValueChange}
            />
        </div>
    );
}