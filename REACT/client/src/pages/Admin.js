import React, { useState } from 'react'
import '../site.css'
import CreateAnimal from '../components/CreateAnimal'
import EditAnimal from '../components/EditAnimal'
import DeleteAnimal from '../components/DeleteAnimal'

const Admin = () => {
  const [showForm, setShowForm] = useState(null);

  const handleCreateAnimalClick = () => {
    setShowForm('add');
  };
  const handleEditAnimalClick = () => {
    setShowForm('edit');
  };
  const handleDeleteAnimalClick = () => {
    setShowForm('delete');
  }

  const handleCloseForm = () => {
    setShowForm(null);
  }
  const handleFormSubmit = () => {
    handleCloseForm();
  }

  return (
    <div align='center' style={{marginTop: '250px'}}>
      {showForm === 'add' && <CreateAnimal onSubmit={handleFormSubmit} onCancel={handleCloseForm} />}
      {showForm === 'edit' && <EditAnimal onSubmit={handleFormSubmit} onCancel={handleCloseForm} />}
      {showForm === 'delete' && <DeleteAnimal onSubmit={handleFormSubmit} onCancel={handleCloseForm} />}

      {showForm === null && (
        <div>
          <button onClick={handleCreateAnimalClick}>Add service</button>
          <button onClick={handleEditAnimalClick}>Edit service</button>
          <button onClick={handleDeleteAnimalClick}>Delete service</button>
        </div>
      )}
    </div>
  )
}

export default Admin
