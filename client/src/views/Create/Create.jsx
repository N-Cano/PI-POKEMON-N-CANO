import style from "./Create.module.css";

const Create = () => {
    return (
        <form className={style.formContainer} >
            <h1>CREATE YOUR POKEMON</h1>
            <div>
                <label>Name: </label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>HP: </label>
                <input type="number" name="hp" />
            </div>
            <div>
                <label>Attack: </label>
                <input type="number" name="attack" />
            </div>
            <div>
                <label>Defense: </label>
                <input type="number" name="defense" />
            </div>
            <div>
                <label>Speed: </label>
                <input type="number" name="speed" />
            </div>
            <div>
                <label>Height: </label>
                <input type="number" name="height" />
            </div>
            <div>
                <label>Weight: </label>
                <input type="number" name="weight" />
            </div>
            <div>
                <label>Type: </label>
                <select name="" id=""></select>
            </div>
            <div>
                <label>Select an Image: </label>
                <select name="" id=""></select>
            </div>

            <button type="submit">CREATE</button>
        </form>
    );
}

export default Create;