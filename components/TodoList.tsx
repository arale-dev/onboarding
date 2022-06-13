import { observer } from 'mobx-react-lite';
import authStore from '../stores/AuthStore';
import todoStore from '../stores/TodoStore';
import TodoItem from './TodoItem';
import style from './TodoList.module.scss';

const TodoListFooter: React.FC = () => {
    let remaining = 'Nothing to Do';
    if (todoStore.getRemaining)
        remaining = `${todoStore.getRemaining} TASK${
            todoStore.getRemaining > 1 ? 'S' : ''
        }`;

    return (
        <div className={style.footer}>
            <p className={style.remain}>{remaining}</p>
            <p className={style.userName}>{authStore.name}</p>
        </div>
    );
};

const TodoList: React.FC = () => {
    return (
        <div className={style.container}>
            {todoStore.todoList.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
            <TodoListFooter />
        </div>
    );
};
export default observer(TodoList);
