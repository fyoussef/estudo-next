
import { useState } from 'react';
import axios from 'axios'

import Header from '../../components/Header';
import { InputText, InputTextArea } from '../../components/Inputs';

export default function NewPost() {

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [postContent, setPostContent] = useState('')

    async function registerPost(event) {

        event.preventDefault()

        const currentDate = new Date()
        const currentDateFormated = currentDate.toLocaleString('pt-BR').split(' ')[0]

        const postStruct = {
            body: JSON.stringify({ 
                title, 
                subTitle, 
                introduction, 
                postContent,
                createdAt: currentDateFormated,
                author: "Filipi Youssef (fyoussef)"
            })
        }

        /* const body = {body: JSON.stringify(postStruct)} */

        // axios.post('http://localhost:3000/api/createPost', postStruct).then(res => console.log(res));

        const createPost = await axios.post('http://localhost:3000/api/createPost', postStruct)
        
        const { created } = createPost.data

        if( created ){
            setTitle('')
            setSubTitle('')
            setIntroduction('')
            setPostContent('')
        }
        

    }

    return (
        <div>
            <Header />

            <div className="flex flex-col items-center justify-center mt-20">
                <form onSubmit={registerPost}>
                    <InputText label="Título" 
                               placeholder="Título do Post" 
                               handleText={(event => setTitle(event.target.value))} 
                            />

                    <InputText label="Sub-Título" 
                               placeholder="Sub-Título do Post" 
                               handleText={(event => setSubTitle(event.target.value))}
                            />

                    <InputTextArea label="Introdução" 
                                   placeholder="Introdução do Post" 
                                   rows={"3"} 
                                   handleText={(event => setIntroduction(event.target.value))}
                                />

                    <InputTextArea label="Post" 
                                   placeholder="Conteúdo do Post" 
                                   rows={"5"} 
                                   handleText={(event => setPostContent(event.target.value))}
                                />

                    <button type="submit" 
                            className="flex items-center justify-evenly bg-violet-700 hover:bg-violet-900 text-white font-bold py-2 w-32 rounded xl:w-96">
                        Salvar Post
                    </button>
                </form>

            </div>

        </div>
    )
}