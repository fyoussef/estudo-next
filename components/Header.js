
import Head from 'next/head'

import HeaderItem from "./HeaderItem"
import MobileHeader from './MobileHeader'

import { BsGithub, BsInstagram } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import HeaderIcons from "./HeaderIcons"

import { useSession, signIn, signOut } from "next-auth/react"


function Header() {

    const { data: session } = useSession()

    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Blog estudos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <div className="mt-3 relative">
                <header className="flex p-5 justify-evenly items-center">

                    <div>
                        <h2 className="text-3xl	font-bold">BLOG</h2>
                    </div>

                    <div className="flex items-center xs:hidden">

                        <HeaderItem item='Home' route='/'/>

                        <HeaderItem item='Sobre'/>

                        { session && session.user.name === 'Filipi Youssef' ? <HeaderItem item='Novo Post' route='/posts/newPost'/> : '' }
                        
                        <div className="flex border-l border-slate-200">
                            <HeaderIcons link={"https://github.com/fyoussef"}>
                                <BsGithub className="group-hover:animate-bounce text-2xl hover:text-gray-500 cursor-pointer" />
                            </HeaderIcons>
                            <HeaderIcons link={"https://www.instagram.com/yousseffilipi/"}>
                                <BsInstagram className="group-hover:animate-bounce text-2xl hover:text-gray-500 cursor-pointer" />
                            </HeaderIcons>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between xs:hidden">
                        <button type="button"
                                className="flex items-center justify-evenly bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 w-32 rounded"
                                onClick={() => session ? signOut() : signIn()}
                            >
                            <BsGithub className="text-2xl " />
                            { session && session.user.name === 'Filipi Youssef' ? 'SignOut' : 'Login' }
                        </button>
                    </div>

                    <button className='xl:hidden lg:hidden md:hidden text-3xl hover:text-slate-700'>
                        < BiMenu />
                    </button>


                </header>
            </div>
            <div className="w-full h-px bg-gray-200" style={{opacity: '1', transformOrigin: '50% 50% 0px'}}></div>

            {/* <MobileHeader session={session}/> */}

        </div>

    )
}

export default Header