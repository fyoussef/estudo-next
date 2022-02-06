
import Link from 'next/link'

function HeaderIcons({ children, link }) {
    return(
        <div className="group pl-5" >
            <Link href={link}>
                <a>
                    {children}
                </a>
                
            </Link>
        </div>
    )
}

export default HeaderIcons