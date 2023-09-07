import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ handleSearchSubmit }) => {

    const [search, setSearch] = useState("")

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearchSubmit(search) // Envía el valor del input al componente padre
        setSearch("") // Limpia el input
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className={style.inputBar} type="text" placeholder="Search Pokemon..." value={search} onChange={handleInputChange} />
            <button className={style.btnBar} type="submit">Search</button>
        </form>
    );
}

export default SearchBar;