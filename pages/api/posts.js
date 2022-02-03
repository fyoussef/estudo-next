
import posts from '../../json/posts.json'

export default function getPosts(req, res) {

    res.status(200).json(posts)

}