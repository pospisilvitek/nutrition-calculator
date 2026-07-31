import RangeField from "../RangeField/RangeField";
import "./NutritionCalculator.css";

export default function NutritionCalculator(): React.JSX.Element {
    return (
        <div className="nutrition-calculator">
            <h1>Nutrition Calculator - BMR/BMI</h1>
            <RangeField 
                id="weight" 
                label="Weight"
                defaultValue={75}
                unit="kg"
                min={40}
                max={200}
            />
            <RangeField 
                id="height" 
                label="Height"
                defaultValue={175} 
                unit="cm"
                min={100}
                max={220}
            />
            <RangeField 
                id="age" 
                label="Age"
                defaultValue={30}
                unit="years"
                min={18}
                max={100}
            />
        </div>
    );
}