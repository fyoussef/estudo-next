
import Header from '../../components/Header';
import HomeSection from '../../components/HomeSection'
import axios from 'axios';

function Post({ posts }) {

    const postContent = posts.postContent.split('\n')

    return(
        <div>
            <Header/>

            <HomeSection text={posts.title} />
            <div className='max-w-3xl mx-auto mt-16'>
                <p className='mb-5'>{posts.introduction}</p>
                <h2 className='font-semibold mb-5'>{posts.subTitle}</h2>
                {
                    
                    postContent.map((paragraph, key) => (
                        <p className='mb-5' key={key}>{paragraph}</p>
                    ))
                }
                
            </div>

        </div>
        
    )
}

export default Post

export async function getServerSideProps(context){

    const { id } = context.query

    const post = await axios.get(`${process.env.URL}/api/getAllPosts`)
    const { posts } = post.data

    return {
        props: {
         posts: posts.find(post => post['_id'] === id)
        },
    }

}