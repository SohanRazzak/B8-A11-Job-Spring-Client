import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
            
        scrollTo(0,0)
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
            
        scrollTo(0,0)
        }
    };

    const handlePageClick = (page) => {
        onPageChange(page);
        scrollTo(0,0)
    };

    const pages = [...Array(totalPages).keys()];

    return (
        <div className="flex justify-center items-center my-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className="px-4 py-2 mx-1 bg-gray-200 disabled:opacity-50"
            >
                Previous
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-4 py-2 mx-1 ${
                        currentPage === page
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    {page + 1}
                </button>
            ))}
            <button
                onClick={handleNext}
                disabled={currentPage === (totalPages-1)}
                className="px-4 py-2 mx-1 bg-gray-200 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
