import React, { useContext } from "react"
import AppContext from "../context/AppContext";
import SelectCategory from "./SelectCategory";

function EditTaskModal() {
    const { taskToEdit, setTaskToEdit, tasksList, setTasksList, previousFilter, setCategoryFilter, categoryFilter } = useContext(AppContext)

    const handleDescription = (event) => {
        const editedDescripiton = { ...taskToEdit }
        editedDescripiton.description = event.target.value
        setTaskToEdit(editedDescripiton)
    }

    const saveEditedTask = () => {
        const editedTask = { ...taskToEdit }
        editedTask.category = categoryFilter;
        const newList = tasksList.map((task) => task.id === editedTask.id ? editedTask : task)
        setTasksList(newList)
        setCategoryFilter(previousFilter)
        setTaskToEdit({})
    }


    return (
        <div className='modal' tabIndex='-1' aria-labelledby="editTaskModal" aria-hidden="true" id="editTaskModal">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Edit Task</h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                        />
                    </div>
                    <div className='modal-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text' id='inputGroup-sizing-default'>
                                Task
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                aria-describedby='inputGroup-sizing-default'
                                value={taskToEdit.description}
                                onChange={handleDescription}
                            />
                        </div>
                        <SelectCategory allButton={false} newCategory={false} />
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                            Close
                        </button>
                        <button type='button' className='btn btn-primary' onClick={saveEditedTask} data-bs-dismiss='modal'>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;