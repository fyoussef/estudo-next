
import { useState } from 'react';
import { useRouter } from 'next/router';

import Header from '../../../components/Header';
import { InputText, InputTextArea } from '../../../components/Inputs';
import Spinner from '../../../components/Spinner';

import axios from 'axios';

export default function UpdatePostPage({ post }) {

    const postId = post["_id"]

    const router = useRouter();

    const [openModal, setOpenModal] = useState(false);

    const [title, setTitle] = useState(post.title);
    const [subTitle, setSubTitle] = useState(post.subTitle)
    const [introduction, setIntroduction] = useState(post.introduction)
    const [postContent, setPostContent] = useState(post.postContent)

    const [clicked, setClicked] = useState(false);

    async function updatePost(e){
        e.preventDefault()

        if( title == "" || postContent == "" ) {
            setOpenModal(true)
            return
        }

        const currentDate = new Date()
        const currentDateFormated = currentDate.toLocaleString('pt-BR').split(' ')[0]

        const postStruct = {
            post: JSON.stringify({
                title, 
                subTitle, 
                introduction, 
                postContent,
                createdAt: currentDateFormated,
                author: "Filipi Youssef (fyoussef)"
            })
        }

        const updatePost = await axios.put(`/api/${postId}`, postStruct)
        const { updated } = updatePost.data

        if( updated )
            router.push('/');
    }


    return (
        <div>
            <Header />

            <div className="flex flex-col items-center justify-center mt-20 pb-5">
                <form onSubmit={updatePost}>
                    <InputText label="Título" 
                               placeholder="Título do Post" 
                               value={title}
                               handleText={(event => setTitle(event.target.value))}
                            />

                    <InputText label="Sub-Título" 
                               placeholder="Sub-Título do Post" 
                               value={subTitle}
                               handleText={(event => setSubTitle(event.target.value))}
                            />

                    <InputTextArea label="Introdução" 
                                   placeholder="Introdução do Post" 
                                   value={introduction}
                                   rows={"3"} 
                                   handleText={(event => setIntroduction(event.target.value))}
                                />

                    <InputTextArea label="Post" 
                                   placeholder="Conteúdo do Post" 
                                   value={postContent}
                                   rows={"5"} 
                                   handleText={(event => setPostContent(event.target.value))}
                                />

                    
                    <button type="submit" 
                            className="flex justify-evenly bg-violet-700 hover:bg-violet-900 text-white font-bold py-2 w-32 xl:w-96 lg:w-72 md:w-64 sm:w-56 xs:w-full rounded"
                            onClick={() => setClicked(!clicked)}
                            >
                            {clicked ? <Spinner/> : 'Salvar Post'}
                    </button>
                </form>

            </div>

        </div>
    )
}

export async function getServerSideProps(context){

    const { id } = context.query

    const getPost = await axios.get(`${process.env.URL}/api/${id}`)
    const { post } = getPost.data;

    return {
        props: {
            post
        }
    }

}