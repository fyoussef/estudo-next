import { ObjectId } from "mongodb";
import connectDB from "../../utils/connection";

export default async function deletePost (req, res){
    
    if(req.method === 'DELETE'){

        const { postId } = req.query

        const { db } = await connectDB()

        if( postId )
            await db.collection('blog').deleteOne({ "_id": ObjectId(postId) })

        return res.status(200).json({deleted: true})


    } else return res.status(400).json({message: 'Bad method request'})

}