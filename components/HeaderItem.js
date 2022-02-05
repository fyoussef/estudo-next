

function HeaderItem({ item }){
    return(

        <div className="flex group">
            <p className="px-5 font-semibold group-hover:animate-bounce hover:text-gray-500 cursor-pointer">{item}</p>
        </div>
        
    )
}

export default HeaderItem