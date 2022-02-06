function Home({ text }) {
    return (
        <div className='mx-auto max-w-4xl pt-20 sm:pt-24 lg:pt-32'>
          <h1 className="text-slate-900 font-extrabold text-3xl sm:text-3xl lg:text-5xl tracking-tight text-center dark:text-white">{text}</h1>
        </div>
    )
}

export default Home