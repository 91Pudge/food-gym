import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import router from "next/router";
import { useEffect, useState } from "react";
import Card, { Recipe } from "../components/card";

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
    <div>
      <title>Food Gym</title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search.."
          onChange={(event) => setInput(event.target.value)}
        />
        <button>Search</button>
      </form>
      <Card apiData={apiData} />
    </div>
  ) : (
    // <card />
    <div>Please log in to use this website</div>
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
