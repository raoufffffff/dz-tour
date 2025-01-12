
const Loading = () => {
    const num = [1, 2, 3, 4, 5, 6].map(e => (
        <div
            key={e}
            className="animate-pulse flex flex-col min-w-[200px] md:min-w-[250px] mx-1 my-2"
        >
            <div
                className='h-[150px] rounded-xl w-full bg-slate-700'
            ></div>
            <div
                className='h-[15px] rounded-xl w-11/12 my-2  bg-slate-700'
            ></div>
            <div
                className='h-[15px] rounded-xl w-6/12  bg-slate-700'
            ></div>
        </div>
    ))
    return (
        <>
            {num}
        </>
    )
}

export default Loading