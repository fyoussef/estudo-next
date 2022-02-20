import connectDB from "../../utils/connection";

export default async function createPost(req, res){

    if(req.method === 'POST'){

        const { db } = await connectDB()

        if( req.body )
            await db.collection("blog").insertOne(req.body)
        
        return res.status(200).json({message: 'Post created'})

    } else return res.status(400).json({message: 'Bad method request'})

}