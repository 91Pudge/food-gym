import { GetStaticProps } from "next";
import { getUsers } from "./api/user";

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

interface HomeProps {
  users: User[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const data = await getUsers();

  console.log("!!!", data);

  const filteredData = data.map(({ _id, name, email, age }) => ({
    id: _id.toString(),
    name,
    email,
    age
  }));

  return {
    props: {
      users: filteredData
    }
  };
};

const storedRecipes = ({ users }: HomeProps) => {
  return (
    <>
      <p>Stored recipes</p>;
      {users.map((i: User) => {
        return (
          <>
            <p>{i.email}</p>
            <p>{i.age}</p>
          </>
        );
      })}
    </>
  );
};

export default storedRecipes;
