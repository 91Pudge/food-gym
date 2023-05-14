import { FormEventHandler } from "react";
import { add } from "../pages/api/user";
import styles from "../styles/card.module.css";

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
  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    await fetch("/api/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ image: "josh", email: "j@j.j" })
    });
  };
  console.log(apiData);
  return (
    <div className={styles["cardStyling"]}>
      {" "}
      {apiData.map((meal: Recipe, i: number) => {
        return (
          <div key={i} className={styles["singleRecipes"]}>
            <div className={styles["container"]}>
              <img src={meal.recipe.image} />
              <p>{meal.recipe.label}</p>
              <a href={meal.recipe.url}>See the full recipe here</a>
            </div>
            <form onSubmit={handleSubmit}>
              <button>Store</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
