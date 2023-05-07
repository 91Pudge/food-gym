import styles from "@/styles/card.module.css";

export interface Recipe {
  [x: string]: any;
  calories: string;

  data: {
    [x: string]: any;
    cuisine: any;
    calories: number;
    cautions: [];
    cuisineType: string[];
    dietLabels: string[];
    digest: [{}];
    dishType: string[];
    healthLabels: [];
    image: string;
    ingredientLines: string[];
    ingredients: [{}];
    label: string;
    mealType: string[];
    shareAs: string;
    source: string;
    totalDaily: [{}];
    totalNutrients: [{}];
    totalTime: number;
    totalWeight: number;
    uri: string;
    url: string;
    yield: number;
  };
}

const Card = ({ apiData }: any) => {
  console.log(apiData);
  return (
    <div>
      {" "}
      {apiData.map((meal: Recipe, i: number) => {
        return (
          <div key={i}>
            <div>
              <h1>{meal.recipe.label}</h1>

              <a href={meal.recipe.url}>See the full recipe here</a>
              <img src={meal.recipe.image} />
            </div>
          </div>
        );
      })}
      //{" "}
    </div>
  );
};

export default Card;
