import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export const getUsers = async () => {

  const client = await clientPromise;
  // const db = client.db("food-gym");

  const users = await client
    .db("food-gym")
    .collection("users")
    .find({})
    //   .sort({ metacritic: -1 })
    .limit(10)
    .toArray();
  return users
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getUsers()
  res.status(200).json(JSON.stringify(data))

};
