function Home({ text }) {
    return (
        <div className='mx-auto xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-sm xs:max-w-xs pt-20 sm:pt-24 lg:pt-32 '>
          <h1 className="text-slate-900 font-extrabold text-3xl sm:text-3xl lg:text-5xl tracking-tight text-center ">{text}</h1>
        </div>
    )
}

export default Home