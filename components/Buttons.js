
import { BsFillTrashFill } from 'react-icons/bs'
import axios from 'axios'
import { useState } from 'react'
import Spinner from './Spinner'

export function BtnDeletePost ({ id, setAllPosts }){

    const [clicked, setClicked] = useState(false)

    async function deletePost(e) {

        e.preventDefault()
        setClicked(!clicked)

        const postId = id
        const deletePost = await axios.delete(`http://localhost:3000/api/${postId}`);
        const { deleted } = deletePost.data

        if( deleted ){
            const post = await axios.get('http://localhost:3000/api/getAllPosts')
            const { posts } = post.data
            setAllPosts(posts)
        }

    }

    return (
        <button type='submit' 
                className='flex items-center justify-center bg-red-600  hover:bg-red-700 duration-300 text-white h-10 w-10 rounded'
                onClick={deletePost}
                >
            {clicked ? <Spinner/> : <BsFillTrashFill />} 
        </button>
    )
}