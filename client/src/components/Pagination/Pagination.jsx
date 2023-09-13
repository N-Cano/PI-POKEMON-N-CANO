import style from './Pagination.module.css';

const Pagination = ({ page, setPage, max }) => {
    const nextPage = () => { // Función para ir a la página siguiente
        setPage(page + 1);
    };

    const previousPage = () => { // Función para ir a la página anterior
        setPage(page - 1);
    };

    const pageNumbers = Array.from({ length: max }, (_, i) => i + 1); // Genera un arreglo de números de página desde 1 hasta 'max'

    const currentPage = style.currentPage  // Estilo para la página actual
    const paginationButton = style.paginationButton // Estilo para los botones de paginación

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
