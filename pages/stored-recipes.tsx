import { GetStaticProps, GetStaticPropsContext } from "next";
import { getRecipes } from "./api/user";

interface Recipe {
  id: string;
  uri: string;
  label: string;
  image: string;
  // source: string;
  // url: string;
  // shareAs: string;
  // yield: number;
  // dietLabels: string[];
  // healthLabels: string[];
  // cautions: string[];
  // ingredientLines: string[];
  // ingredients: { text: string; weight: number }[];
  // calories: number;
  // totalWeight: number;
  // totalTime: number;
  // cuisineType: string[];
  // mealType: string[];
  // dishType: string[];
  // totalNutrients: Record<string, any>;
  // totalDaily: Record<string, any>;
  // digest: any[];
}

interface HomeProps {
  recipes: Recipe[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const data = await getRecipes();
  console.log("£££", data[0].data.recipe.uri, "--------");
  const filteredData = data.map(({ _id, uri }) => ({
    id: _id.toString(),
    uri: data[0].data.recipe.uri,
    label: data[0].data.recipe.label,
    image: data[0].data.recipe.image
    // source: data[1].recipe.source || null,
    // url: data[1].recipe.url || null,
    // shareAs: data[1].recipe.shareAs || null,
    // yield: data[1].recipe.yield || null,
    // dietLabels: data[1].recipe.dietLabels || [],
    // healthLabels: data[1].recipe.healthLabels || [],
    // cautions: data[1].recipe.cautions || [],
    // ingredientLines: data[1].recipe.ingredientLines || [],
    // ingredients: data[1].recipe.ingredients || [],
    // calories: data[1].recipe.calories || null,
    // totalWeight: data[1].recipe.totalWeight || null,
    // totalTime: data[1].recipe.totalTime || null,
    // cuisineType: data[1].recipe.cuisineType || [],
    // mealType: data[1].recipe.mealType || [],
    // dishType: data[1].recipe.dishType || [],
    // totalNutrients: data[1].recipe.totalNutrients || {},
    // totalDaily: data[1].recipe.totalDaily || {},
    // digest: data[1].recipe.digest || []
  }));
  // console.log(filteredData, "!!!!!");

  return {
    props: {
      recipes: filteredData
    }
  };
};

const storedRecipes = ({ recipes }: HomeProps) => {
  return (
    <div>
      <p>Stored recipes</p>
      {recipes.map((recipe, i) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.id}</p>
            <p>{recipe.uri}</p>
            <p>{recipe.label}</p>
            <img src={recipe.image} />
          </div>
        );
      })}
    </div>
  );
};

export default storedRecipes;
