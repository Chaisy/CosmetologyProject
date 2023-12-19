import React from 'react'
import '../site.css'
import { getAnimalByName, deleteAnimal } from '../http/listApi'

const DeleteAnimal = ({ onSubmit, onCancel }) => {
  class AnimalForm extends React.Component {
    constructor(props) {
      super(props)

      var name = props.name;
      var nameIsValid = this.validateName(name);

      this.state = {name: name, nameValid: nameIsValid}

      this.onNameChange = this.onNameChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
      
    validateName(name){
        return (name) ? name.length >= 3 : false
    }
    onNameChange(e) {
        if (e.target.value) {
          var val = e.target.value
          var valid = this.validateName(val)
          this.setState({name: val, nameValid: valid})
        }
    }
    
    handleSubmit(e) {
        e.preventDefault()

        const {nameValid, name} = this.state;
        
        if (nameValid) {
          getAnimalByName(name).then(data => {
            var currentAnimal = data

            try {
              deleteAnimal(currentAnimal.id).then(data => {
                console.log(data)
              })
            } catch (e) {
              alert('Invalid data!')
            }
          })
        }
        else {
          alert('Invalid data!')
        }
        
        onSubmit()
    }

    render() {
      var nameColor = this.state.nameValid === true ? 'black' : 'red'
      return (
          <form>
            <p>
                <input type='text' value={this.state.name} placeholder='Name'
                    onChange={this.onNameChange} style={{borderColor:nameColor}}/>
            </p>
            <button type="submit" onClick={this.handleSubmit}>OK</button>
            <a className='simpleLink' onClick={onCancel}>Cancel</a>
          </form>
      );
  }
}
  return (
    <AnimalForm name=''></AnimalForm>
  );
};

export default DeleteAnimal