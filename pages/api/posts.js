
import posts from '../../json/posts.json'
import connectDB from '../../utils/connection'

export default async function getPosts(req, res) {

    const { db } = await connectDB()

    const response = db.collection("blog")

    res.status(200).json(posts)

}