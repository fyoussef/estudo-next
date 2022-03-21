
import { BsFillTrashFill } from 'react-icons/bs'
import { ImPencil2 } from 'react-icons/im'

import axios from 'axios'
import { useState } from 'react'
import Spinner from './Spinner'

import Link from 'next/link'

export function BtnDeletePost ({ id, setAllPosts }){

    const [clicked, setClicked] = useState(false)

    async function deletePost(e) {

        e.preventDefault()
        setClicked(!clicked)

        const postId = id
        const deletePost = await axios.delete(`${process.env.URL}/api/${postId}`);
        const { deleted } = deletePost.data

        if( deleted ){
            const post = await axios.get(`${process.env.URL}/api/getAllPosts`)
            const { posts } = post.data
            setClicked(false)
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

export function BtnEditPost({ route }) {

    return(
        <button type='submit'
                className='flex items-center justify-center bg-sky-600  hover:bg-sky-700 duration-300 text-white h-10 w-10 rounded'
                >
                    {route ?
                        <Link href={route}>
                            <a>
                                <ImPencil2/>
                            </a>
                        </Link> 
                        : 
                        <ImPencil2/>}
        </button>
    )
}