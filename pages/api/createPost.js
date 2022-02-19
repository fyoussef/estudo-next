import connectDB from "../../utils/connection";

export default async function createPost(req, res){

    if(req.method === 'POST'){
        
        return res.status(200).json({message: 'Request OK'})

    } else return res.status(200).json({message: 'Bad method request'})

}