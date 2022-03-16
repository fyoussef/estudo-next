import connectDB from "../../utils/connection";

export default async function createPost(req, res){

    if(req.method === 'POST'){

        const { db } = await connectDB()


        const dados =  JSON.parse(req.body.post)

        // dados.postContent = dados.postContent.split('\n')

        if( req.body )
            await db.collection("blog").insertOne(dados)
        
        return res.status(200).json({created: true})

    } else return res.status(400).json({message: 'Bad method request'})

}