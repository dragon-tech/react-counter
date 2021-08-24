import PropTypes from "prop-types";
import styles from "./Todos.module.css";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";
import classnames from "classnames";
const Todos = ({ todos, onAddition, onSubstraction }) => {
    return (
        <div className={styles.todos}>
            {todos.map((todo, index, arr) => {
              return (
                <div 
                    className={classnames(styles.todo, {
                        [styles.todoDivider] : !(arr.length === index + 1)
                    })} 
                    key={index}
                >
                  <span className="todo-title">{todo.title}</span>
                  <div className={styles.todoIconWrapper}>
                    <button onClick={() => onSubstraction(index)} className={styles.todoActionButton}>
                      <img src={minusIcon} alt="Minus Icon" />
                    </button>
                    <div className={styles.todoCount}>{todo.count}</div>
                    <button onClick={() => onAddition(index)} className={styles.todoActionButton}>
                      <img src={plusIcon} alt="Plus Icon" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
    )
}

Todos.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstraction: PropTypes.func,
    onAddition: PropTypes.func
}
export default Todos;