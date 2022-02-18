
import posts from '../../json/posts.json'

export default async function getPosts(req, res) {

    res.status(200).json(posts)

}