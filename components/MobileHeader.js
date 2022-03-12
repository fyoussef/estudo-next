

import HeaderItem from "./HeaderItem"

import { signIn, signOut } from "next-auth/react"

import { BsGithub } from 'react-icons/bs'

export default function MobileHeader({session}){
    return (
        <div className='absolute w-full h-1/2 bg-slate-200'>
            <div className='flex flex-col items-center text-2xl'>

                <div className='mt-10'><HeaderItem item='Home' route='/'/></div>

                <div className='mt-10'><HeaderItem item='Sobre'/></div>

                { session && session.user.name === 'Filipi Youssef' ? <div className='mt-10'><HeaderItem item='Novo Post' route='/posts/newPost'/></div> : '' }

                <button type="button"
                            className="flex mt-10 items-center justify-evenly bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 w-32 rounded"
                            onClick={() => session ? signOut() : signIn()}
                        >
                    <BsGithub className="text-2xl" />
                    { session && session.user.name === 'Filipi Youssef' ? 'SignOut' : 'Login' }
                </button>

            </div>
            
        </div>
    )
}