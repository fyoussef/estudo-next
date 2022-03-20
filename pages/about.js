import axios from "axios";
import Image from "next/image";

import Header from "../components/Header";

export default function About({ data }) {
    
    return(

        <div>

            <Header />

            <div className='mx-auto max-w-full flex flex-col items-center justify-center mt-20'>

                <Image 
                    className="rounded-full"
                    src={data.avatar_url}
                    width={300}
                    height={300}
                />

                <div className="mx-auto xl:max-w-2xl lg:max-w-2xl md:max-w-2xl sm:max-w-sm xs:max-w-xs">
                    <p className="mt-10 tracking-tight text-center">Olá, meu nome é Filipi Yussef Oliveira e sou iniciante na área de Programação. Atualmente estou cursando o 2º ano do de Ciêncida de Computação na Universidade Paulista (UNIP) e fazendo estágio como programador na TechTrust Soluções em TI e Processos</p>
                    {/* <p></p> */}
                </div>

            </div>

        </div>
    )
}

export async function getServerSideProps(context) {

    // https://api.github.com/users/fyoussef

    const request = await axios.get('https://api.github.com/users/fyoussef')

    const userData = request.data

    /* console.log(request) */

    return {
        props: {
            data: userData
        }
    }

}