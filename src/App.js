import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import styles from './App.module.css'
import Item from './components/Item'
const App = () => {
  const [user, setUser] = useState([])
  const addUser = (name, age) => {
    const id = user.length + 1
    setUser([...user, { id, name, age }])
  }
  return (
    <div>
      <h1 className={styles.title}>Welcome From React Form</h1>
      <Card>
        <Form addUser={addUser} />
      </Card>

      
        <ul>
          {user.map((u) => {
            return <Item key={u.id} name={u.name} age={u.age} />
          })}
        </ul>
      
    </div>
  )
}

export default App
