import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export const getRecipes = async () => {

  const client = await clientPromise;
  const users = await client
    .db("food-gym")
    .collection("stored-recipe")
    .find({})
    .toArray();

  return users
}

export const addRecipe = async (recipe: any): Promise<ObjectId> => {

  const client = await clientPromise;
  const response = await client.db("food-gym").collection("stored-recipe").insertOne(recipe)

  return response.insertedId
}

export const deleteRecipe = async (id: string) => {

  const client = await clientPromise;
  return await client.db("food-gym").collection("stored-recipe").deleteOne({ _id: id })

}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id
  if (req.method === 'GET') {
    const data = await getRecipes()
    res.status(200).json(JSON.stringify(data))

  } else if (req.method === 'POST') {

    console.log(req.body)
    const insertedId = await addRecipe(req.body)
    res.status(200).json(insertedId)

  } else if (req.method === "DELETE") {
    const data = await deleteRecipe(id)
  }

};
