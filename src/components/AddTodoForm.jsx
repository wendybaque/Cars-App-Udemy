// Vidéo 79 : useState

import React, {useState} from 'react'

function AddTodoForm({addNewTodo}) {

const [addTodo, setAddTodo] = useState('');

const handleTodo = (e) => {
    e.preventDefault()
    addNewTodo(addTodo);

    setAddTodo('');
}

  return (
    <div className='mt-4'>
        <div className='card card-body'>
            <form className='form-group' onSubmit={handleTodo}>
                <label className='fw-bold'>Ajouter une tâche</label>
                <input type="text" className='form-control m-4 text-center' value={addTodo} onChange={(e) => setAddTodo(e.target.value)}></input>
                <input type="submit" className='btn btn-success'></input>
            </form>
        </div>
    </div>
  )
}

export default AddTodoForm;