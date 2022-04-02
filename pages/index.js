import axios from 'axios'
import { useState } from 'react';

import Header from '../components/Header';
import HomeSection from '../components/HomeSection'
import PostsSection from '../components/PostsSection';

export default function Home(props) {

  const { posts } = props;

  const [post, setPost] = useState(posts);

  return (
    <div>

      <div className='mx-auto max-w-full'>

        <Header/>
        
        <HomeSection text={"Este é meu blog pessoal para registrar aprendizados novos adiquiridos sobre linguagens e frameworks."}/>

        <PostsSection posts={post} />

      </div>
      
      
    </div>
  )
}

export async function getServerSideProps(context) {

  const post = await axios.get(`${process.env.URL}/api/getAllPosts`)
  const { posts } = post.data

  return {
    props: {
      posts: posts
    }
  }

}