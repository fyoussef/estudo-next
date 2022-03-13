import { ObjectId } from "mongodb";
import connectDB from "../../utils/connection";

export default async function deletePost (req, res){

    const { postId } = req.query
    
    if( req.method === 'DELETE' ){

        const { db } = await connectDB()

        if( postId )
            await db.collection('blog').deleteOne({ "_id": ObjectId(postId) })

        return res.status(200).json({deleted: true})


    } else if( req.method === 'GET' ){

        const { db } = await connectDB()

        const post = await db.collection("blog").find({"_id": ObjectId(postId)}).toArray()

        return res.status(200).json({post: post})

    }
    
    else return res.status(400).json({message: 'Bad method request'})

}