
import connectDB from "../../utils/connection"

export default async function getAllPosts(req, res) {

    if (req.method === 'GET'){

        const { db } = await connectDB()

        const allPosts = await db.collection("blog").find({}).toArray()

        return res.status(200).json({posts: allPosts})

    } else return res.status(400).json({message: 'Bad method request'})
}