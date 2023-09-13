import style from './Pagination.module.css';

const Pagination = ({ page, setPage, max }) => {
    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    };

    const pageNumbers = Array.from({ length: max }, (_, i) => i + 1);

    const currentPage = style.currentPage
    const paginationButton = style.paginationButton

    return (
        <div className={style.paginationContainer}>
            <button
                disabled={page === 1 || page < 1}
                onClick={previousPage}
                className={style.paginationButton}
            >
                {'<'}
            </button>
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={pageNumber === page ? currentPage : paginationButton}
                >
                    {pageNumber}
                </button>
            ))}
            <button
                disabled={page === max}
                onClick={nextPage}
                className={style.paginationButton}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;
