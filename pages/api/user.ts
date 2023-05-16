import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export const getRecipes = async () => {

  const client = await clientPromise;
  // const db = client.db("food-gym");

  const users = await client
    .db("food-gym")
    .collection("stored-recipe")
    .find({})
    // .limit()
    .toArray();
  return users
}

export const add = async (recipe: any): Promise<ObjectId> => {
  const client = await clientPromise;

  const response = await client.db("food-gym").collection("stored-recipe").insertOne(recipe)

  return response.insertedId

}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {

    const data = await getRecipes()
    res.status(200).json(JSON.stringify(data))
  } else if (req.method === 'POST') {
    console.log(req.body)
    const insertedId = await add(req.body)
    res.status(200).json(insertedId)
  }

};
