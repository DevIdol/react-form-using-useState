import { useState } from 'react'
import styles from './Form.module.css'

const Form = ({addUser}) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, age);
    addUser(name, age);
    setName('');
    setAge('');
  }

  const nameInputHandler = (e) => {
    setName(e.target.value)
  }
  const ageInputHandler = (e) => {
    setAge(e.target.value)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label className={styles.label}>Enter Your Name: </label>
        <br />
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={nameInputHandler}
        />
      </div>
      <div>
        <label className={styles.label}>Enter Your Age: </label>
        <br />
        <input
          className={styles.input}
          type="number"
          value={age}
          onChange={ageInputHandler}
        />
      </div>
      <div>
        <input className={styles.submit} type="submit" />
      </div>
    </form>
  )
}
export default Form
