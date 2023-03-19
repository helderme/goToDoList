import React, { useContext } from "react"
import AppContext from "../context/AppContext";

function NewCategoryInput() {
    const {
        newCategoryInput,
        handleCategoryInput,
        addCategory,
        categoryAlreadyExists
    } = useContext(AppContext);

    return (
        <div className='input-group mb-3'>
            <input
                type='text'
                className='form-control'
                aria-describedby='inputGroup-sizing-default'
                value={newCategoryInput}
                onChange={handleCategoryInput}
            />
            <button
                type='button'
                className='btn btn-primary'
                onClick={addCategory}
                disabled={newCategoryInput.length < 1 || categoryAlreadyExists}
            >
                Save Category
            </button>
            {categoryAlreadyExists && <span>Category Already Exists</span>}
        </div>
    );
}

export default NewCategoryInput