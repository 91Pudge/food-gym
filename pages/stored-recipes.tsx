import { GetStaticProps, GetStaticPropsContext } from "next";
import { getRecipes } from "./api/user";

interface Recipe {
  id: string;
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: { text: string; weight: number }[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: Record<string, any>;
  totalDaily: Record<string, any>;
  digest: any[];
}

interface HomeProps {
  recipes: Recipe[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async (
  context: GetStaticPropsContext
) => {
  const data = await getRecipes();
  console.log(data[1].recipe.uri, "***");
  const filteredData = data.map(({ _id, ...recipe }) => ({
    id: _id.toString(),
    uri: data[1].recipe.uri || null,
    label: data[1].recipe.label
  }));
  console.log(filteredData, "!!!!!");

  return {
    props: {
      recipes: filteredData
    }
  };
};

const storedRecipes = ({ recipes }: HomeProps) => {
  //   console.log(recipes);

  return (
    <div>
      <p>Stored recipes</p>
      {recipes.map((recipe, i) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.id}</p>
            <p>{recipe.uri}</p>
            <p>{recipe.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default storedRecipes;
