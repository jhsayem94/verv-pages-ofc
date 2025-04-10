import React from 'react';

const PaginationButtons = ({ currentPage, totalPages, setCurrentPage }) => {
    return (
        <div className="flex justify-center items-center mt-4 gap-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          className={` w-[150px] px-4 py-2 ${(currentPage === 0) ? 'hidden' : 'block'} bg-[#50B533] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#50B533]  border border-[#50B533] rounded-full `}
        >
          Previous
        </button>
  
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
          className={` w-[150px] px-4 py-2 ${(currentPage === totalPages - 1) ? 'hidden' : 'block'} bg-[#50B533] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#50B533]  border border-[#50B533] rounded-full `}
        >
          Next
        </button>
      </div>
    );
};

export default PaginationButtons;