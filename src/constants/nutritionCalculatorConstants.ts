export interface RangeFieldConfig {
    id: "weight" | "height" | "age";
    label: string;
    unit: string;
    min: number;
    max: number;
    defaultValue: number;
}

export const WEIGHT_FIELD: RangeFieldConfig = {
    id: "weight",
    label: "Weight",
    unit: "kg",
    min: 40,
    max: 200,
    defaultValue: 75
};

export const HEIGHT_FIELD: RangeFieldConfig = {
    id: "height",
    label: "Height",
    unit: "cm",
    min: 100,
    max: 220,
    defaultValue: 175
};

export const AGE_FIELD: RangeFieldConfig = {
    id: "age",
    label: "Age",
    unit: "years",
    min: 18,
    max: 100,
    defaultValue: 30
};