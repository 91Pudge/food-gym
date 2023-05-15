import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import router from "next/router";
import { useEffect, useState } from "react";
import Card, { Recipe } from "../components/card";
import styles from "../styles/recipecard.module.css";

const RecipePage = ({ data }: Recipe) => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [apiData, setapiData] = useState([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push({
      query: { param: input }
    });
  };

  useEffect(() => {
    setapiData(data.hits);
  }, [data.hits]);

  return session ? (
    <div className={styles["container"]}>
      <div>
        <title>Food Gym</title>
        <form onSubmit={handleSubmit}>
          <input
            width={"1000px"}
            type="text"
            placeholder="Discover more than 10,000 recipes on Food Gym"
            onChange={(event) => setInput(event.target.value)}
          />
          <button>Search</button>
        </form>
        <Card apiData={apiData} session={session} />
      </div>
    </div>
  ) : (
    <div className={styles["container"]}>
      <p>Please log in to use this website</p>
    </div>
  );
};

export default RecipePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const myQueryParam = context.query.param;
  // Fetch data from external API
  const res = await fetch(
    `https://api.edamam.com/search?q=${myQueryParam}&app_id=244679ce&app_key=bf33a8f443ed91d0926173d3b054ffe4`
  );
  const data = await res.json();
  // Pass data to the page via props
  console.log(data);
  return { props: { data } };
};
