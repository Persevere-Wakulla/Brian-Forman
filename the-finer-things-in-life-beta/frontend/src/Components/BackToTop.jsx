

const BackToTop =()=>{

    const handleScrollToTop =()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return(
        <div>
            <h2 className="opacity-70 text-4xl cursor-pointer fixed right-0 bottom-1" onClick={handleScrollToTop}>🔝</h2>
        </div>
    )

}

export default BackToTop
