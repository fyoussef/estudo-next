
import Link from 'next/link'
import { useSession } from "next-auth/react"

import { useState } from 'react'

import { BtnDeletePost, BtnEditPost } from './Buttons'

function PostsSection({posts}) {

    const { data: session } = useSession()

    const [ allPosts, setAllPosts ] = useState(posts)

    return(
        // CONTAINER DOS POSTS
        <div className='mx-auto mt-20 xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-sm xs:max-w-xs'>
          {/* CADA POST VEM AQUI */}
          {allPosts.map((post, key) => (
            <div key={key}>
              <h3 key={key}
                  className="text-slate-900 font-semibold text-2xl sm:text-2xl lg:text-2xl tracking-tight"
                >
                {post.title}
              </h3>
              <p className="py-5 text-gray-500">
                {post.introduction.length > 200 ? `${post.introduction.substring(0, 200)}... ` : post.introduction}
                <Link href={`/posts/${post['_id']}`}>
                  <a className="text-neutral-900 cursor-pointer hover:text-sky-500 hover:font-semibold"> ver mais</a>
                </Link>
              </p>
              <div className='flex justify-between'>
                <div>
                  <p>{post.createdAt}</p>
                  <p className='mb-5'>{post.author}</p>
                </div>
                <div className='flex gap-3'>
                  { session && session.user.name === 'Filipi Youssef' ?  <BtnDeletePost id={post['_id']} setAllPosts={setAllPosts} /> : ''}
                  { session && session.user.name === 'Filipi Youssef' ?  <BtnEditPost id={post['_id']} route={`/posts/updatePost/${post['_id']}`} /> : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}

export default PostsSection
