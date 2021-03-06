import { useState } from 'react';
import axios from 'axios'

import Header from '../../components/Header';
import { InputText, InputTextArea } from '../../components/Inputs';
import Spinner from '../../components/Spinner';
import { AtentionModal, SuccessModal } from '../../components/Modal.js';

export default function NewPost() {

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [postContent, setPostContent] = useState('')

    const [clicked, setClicked] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false)

    async function registerPost(event) {

        event.preventDefault()

        if( title == "" || postContent == "" ) {

            setOpenModal(true)

            setClicked(false)
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

        const createPost = await axios.post(`/api/createPost`, postStruct)
        
        const { created } = createPost.data

        if( created ){

            setTitle('')
            setSubTitle('')
            setIntroduction('')
            setPostContent('')
            setClicked(false)

            setOpenSuccessModal(true);

        }
        
    }

    return (
        <div>
            <Header />

            
            {openModal ? <AtentionModal setOpenModal={setOpenModal} 
                                modalText="Para criar um post é obrigatório ter um Título e conteúdo para o Post."
                                btnText="ENTENDI"
                                /> : ''}

            {openSuccessModal  ? <SuccessModal setOpenModal={setOpenSuccessModal} modalText="O Post foi criado com sucesso !" btnText="OK" /> : '' }

            <div className="flex flex-col items-center justify-center mt-20 pb-5">

                <form onSubmit={registerPost}>
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