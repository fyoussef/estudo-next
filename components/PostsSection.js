import Link from 'next/link'

function PostsSection({ posts }) {

    return(
        // CONTAINER DOS POSTS
        <div className='mx-auto max-w-3xl mt-40'>
          {/* CADA POST VEM AQUI */}
          {posts.map((post, key) => (
            <div key={key}>
              <h3 key={key}
                  className="text-slate-900 font-semibold text-2xl sm:text-2xl lg:text-2xl tracking-tight"
                >
                {post.title}
              </h3>
              <p className="py-5 text-gray-500">
                {post.introduction.length > 200 ? `${post.introduction.substring(0, 200)}... ` : post.introduction}
                <Link href={`/posts/${post['_id']}`}>
                  <a className="text-neutral-900 cursor-pointer hover:text-sky-500 hover:font-semibold">ver mais</a>
                </Link>
              </p>
              <p>{post.createdAt}</p>
              <p className='mb-5'>{post.author}</p>
            </div>
          ))}
        </div>
    )
}

export default PostsSection