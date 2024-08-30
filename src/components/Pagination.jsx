import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  
  const {page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className='flex justify-center mb-3 fixed border-t-2 shadow-2xl border-gray-400 border-opacity-50 -bottom-3 w-full h-12 bg-white'>
      <div className='flex w-[39%] items-center justify-between'>
        <div>
          { page > 1 &&
              (
                <button onClick={() => handlePageChange(page - 1)}
                  className='py-1 px-4 rounded-md border-[3px] border-slate-200 mr-2'
                >
                  Previous
                </button>
              )
          }
          {
            page < totalPages &&
              (
                <button onClick={() => handlePageChange(page + 1)}
                  className='py-1 px-4 rounded-md border-[3px] border-slate-200'
                >
                  Next
                </button>
              )
          }    
        </div>

        <p className='font-bold'>
            Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination