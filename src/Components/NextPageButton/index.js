export default function ButtonPage({setPage, page}) {

    function handleNext() {
        setPage(page + 1);
    }
  
    function handleBack() {
        setPage(page - 1);
    }

  return (
    <>
        <div className="flex justify-center items-center space-x-1">
            <button style={page === 1 ? {display: 'none'} : {display: 'flex'}} onClick={handleBack} className=" items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
            </button>
                <span className='text-white'>{page}</span>
            <button onClick={handleNext} className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>
        </div>
    </>
    )
}