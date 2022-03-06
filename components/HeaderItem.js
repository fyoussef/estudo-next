
import Link from 'next/link'

function HeaderItem({ item, route }){
    return(

        <div className="flex group">
            <p className="px-5 font-semibold group-hover:animate-bounce hover:text-gray-500 cursor-pointer">
                { 
                    route ? 
                    <Link href={route}>
                        <a>
                            {item}
                        </a>
                    </Link>
                    : item
                }
            </p>
        </div>
        
    )
}

export default HeaderItem