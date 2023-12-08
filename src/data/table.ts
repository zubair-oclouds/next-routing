export interface IRow {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    price: number;
    public?: boolean;
    nested?: IRow[];
}

export const tableData: IRow[] = [
    {
        "name": "Beef Chow Mein",
        "calories": 357,
        "fat": 15,
        "carbs": 47,
        "protein": 17,
        "price": 35.12,
        "public": true,
        "nested": [
            {
                "name": "Pizza",
                "calories": 420,
                "fat": 21,
                "carbs": 54,
                "protein": 15,
                "price": 18.75,
                "public": false
            },
            {
                "name": "Chicken Alfredo",
                "calories": 310,
                "fat": 14,
                "carbs": 29,
                "protein": 20,
                "price": 22.5,
                "public": true
            }
        ]
    },
    {
        "name": "Shrimp Scampi",
        "calories": 265,
        "fat": 12,
        "carbs": 31,
        "protein": 15,
        "price": 23.45,
        "public": false,
        "nested": [
            {
                "name": "Salmon Teriyaki",
                "calories": 280,
                "fat": 16,
                "carbs": 25,
                "protein": 18,
                "price": 19.99,
                "public": true
            },
            {
                "name": "Vegetarian Stir-Fry",
                "calories": 180,
                "fat": 8,
                "carbs": 24,
                "protein": 9,
                "price": 15.75,
                "public": false
            }
        ]
    },
    {
        "name": "Pasta Carbonara",
        "calories": 450,
        "fat": 22,
        "carbs": 54,
        "protein": 18,
        "price": 27.85,
        "public": true
    },
    {
        "name": "Chicken Caesar Salad",
        "calories": 320,
        "fat": 18,
        "carbs": 14,
        "protein": 22,
        "price": 14.5,
        "public": false
    },
    {
        "name": "Chocolate Cake",
        "calories": 380,
        "fat": 20,
        "carbs": 45,
        "protein": 5,
        "price": 12.99,
        "public": true,
        "nested": [
            {
                "name": "Cheesecake",
                "calories": 280,
                "fat": 15,
                "carbs": 30,
                "protein": 8,
                "price": 18.25,
                "public": false
            },
            {
                "name": "Apple Pie",
                "calories": 320,
                "fat": 14,
                "carbs": 40,
                "protein": 4,
                "price": 16.99,
                "public": true
            }
        ]
    }
]

