import { GetStaticProps, GetStaticPropsContext } from "next";
import { getRecipes } from "./api/user";

interface Recipe {
  data: any;
  id: string;
  uri: string;
  label: string;
  image: string;
}

interface HomeProps {
  recipes: Recipe[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getRecipes();
  let store = [];
  for (const i of data) {
    store.push(i);
  }

  const recipes = store.map((recipe) => ({
    ...recipe,
    _id: recipe._id.toString() // Convert _id to string
  }));

  return {
    props: {
      recipes
    }
  };
};

const storedRecipes = ({ recipes }: HomeProps) => {
  return (
    <div>
      <p>Stored recipes</p>
      {recipes.map((recipe, i) => {
        return (
          <div key={i}>
            <p>{recipe.id}</p>
            <p>{recipe.data.recipe.uri}</p>
            <p>{recipe.data.recipe.label}</p>
            <img src={recipe.data.recipe.image} />
          </div>
        );
      })}
    </div>
  );
};

export default storedRecipes;
