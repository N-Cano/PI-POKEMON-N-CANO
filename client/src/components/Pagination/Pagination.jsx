import style from "./Pagination.module.css";

const Pagination = ({ page, setPage, max }) => {

    const nextPage = () => { // Esto nos sirve para ir a la siguiente página
        setPage(page + 1);
    }

    const prevPage = () => { // Esto nos sirve para ir a la página anterior
        setPage(page - 1);
    }

    const pageNumbers = Array.from({ length: max }, (_, i) => i + 1); // Creamos un array de números que va desde 1 hasta el número máximo de páginas

    const currentPage = style.currentPage
    const paginationButton = style.paginationButton

    return (
        <div className={style.pagination}>
            <button
                disabled={page === 1 || page < 1}
                onClick={prevPage}
                className={style.paginationButton}
            >
                {'<'}
            </button>
            {pageNumbers.map((pageNumber) => ( // Mapeamos el array de números y creamos un botón por cada uno
                <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={pageNumber === page ? currentPage : paginationButton} // Si el número de página es igual a la página actual, le aplicamos un estilo diferente
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
}

export default Pagination;