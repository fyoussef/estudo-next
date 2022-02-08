
import Header from '../../components/Header';
import HomeSection from '../../components/HomeSection'
import axios from 'axios';

function Post({ posts }) {

    return(
        <div>
            <Header/>

            <HomeSection text={posts.title} />
            <div className='max-w-3xl mx-auto mt-16'>
                <p className='mb-5'>{posts.paragraphs[0]}</p>
                <h2 className='font-semibold mb-5'>{posts['sub-title']}</h2>
                <p className='mb-5'>{posts.paragraphs[1]}</p>
                <p className='mb-5'>{posts.paragraphs[2]}</p>
            </div>

        </div>
        
    )
}

export default Post

export async function getStaticProps({ params }) {

    // params => contem o post.id que foi retornado na func getStaticPaths

    const post = await axios.get(`http://localhost:3000/api/posts`);
    const { data } = post;
  
    return {
      props: {
        posts: data.find(item => item.id === params.id)
      },
    }
}

// This function gets called at build time
// FUnção chamada para criar as rotas dinâmicas
export async function getStaticPaths() {

    // Pegar os posts
    const post = await axios.get('http://localhost:3000/api/posts');
    const { data } = post;

    // Pegar os caminhos necessaŕios para PRÉ renderizar
    const paths = data.map(post => ({ params: {id: post.id} }))

    // Pré renderizar apenas os post fornecidos
    return { paths, fallback: false };
}