
import connectDB from '../../utils/connection'

export default async function teste(req, res) {

    if(req.method === 'POST'){
        const { db } = await connectDB()

        const response = await db.collection("blog").insertOne({
            name: 'Filipi Youssef',
            age: 20
        })
    
        res.status(200).json(response)
    } else
        res.status(400).json({error: 'Wrong request method'})

}