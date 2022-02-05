import HeaderItem from "./HeaderItem"
import { BsGithub, BsInstagram } from 'react-icons/bs'
import HeaderIcons from "./HeaderIcons"

function Header() {
    return (
        <div className="mt-3">
            <header className="flex p-5 justify-evenly items-center">

                <div>
                    <h2 className="text-3xl	font-bold">BLOG</h2>
                </div>

                <div className="flex items-center">
                    <HeaderItem item='Home'/>
                    <HeaderItem item='Sobre'/>
                    <div className="flex border-l border-slate-200">
                        <HeaderIcons link="https://github.com/fyoussef">
                            <BsGithub className="group-hover:animate-bounce text-2xl hover:text-gray-500 cursor-pointer" />
                        </HeaderIcons>
                        <HeaderIcons link="https://www.instagram.com/yousseffilipi/">
                            <BsInstagram className="group-hover:animate-bounce text-2xl hover:text-gray-500 cursor-pointer" />
                        </HeaderIcons>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header