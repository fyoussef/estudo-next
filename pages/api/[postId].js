import { ObjectId } from "mongodb";
import connectDB from "../../utils/connection";

export default async function deletePost (req, res){

    const { postId } = req.query
    
    if( req.method === 'DELETE' ){

        const { db } = await connectDB()

        if( postId )
            await db.collection('blog').deleteOne({ "_id": ObjectId(postId) })

        return res.status(200).json({deleted: true})

    } else if ( req.method === 'GET' && postId ) {

        const { db } = await connectDB()

        const post = await db.collection('blog').findOne({ "_id": ObjectId(postId) })
        
        return res.status(200).json({ post })

    } else if ( req.method === 'PUT' && postId ) {
        const { db } = await connectDB()

        const dados =  JSON.parse(req.body.post)

        if( req.body )
            await db.collection('blog').updateOne({ "_id": ObjectId(postId) }, {$set: dados})

        return res.status(200).json({updated: true})
    }
    
    else return res.status(400).json({message: 'Bad method request'})

}