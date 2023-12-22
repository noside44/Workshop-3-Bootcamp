import "../Styles/SearchBar.css"
import { IoSearchOutline } from "react-icons/io5";
import { RiCloseCircleFill } from "react-icons/ri";

function SearchBar( {searchValue, setSearchValue} ){
    return (
        <div className="searchBar-container p-4">
            <div className="SearchBar input-group flex-nowrap w-50">
                <span className="input-group-text" id="addon-wrapping">
                    <IoSearchOutline />
                </span>
                <input 
                    type="text" 
                    className="form-control rounded-end" 
                    placeholder="Busca por cargo, salario, ubicación o empresa" 
                    aria-label="Username" 
                    aria-describedby="addon-wrapping" 
                    value={searchValue}
                    onChange={ (event) => {
                        setSearchValue( event.target.value ) }
                    } 
                />
                <span>
                    <RiCloseCircleFill 
                        className={searchValue === "" ? "close-icon inactive" : "close-icon"}
                        onClick={ () =>{ 
                            setSearchValue("") }}
                    />
                </span>
            </div>
        </div>
    )
}

export { SearchBar }
