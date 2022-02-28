import Card from './Card'
import styles from './Item.module.css'

const Item = ({ name, age }) => {
  return (
    <Card>
      <li className={styles.item}>
        Name: {name} <br/> Age: {age}
      </li>
    </Card>
  )
}

export default Item
