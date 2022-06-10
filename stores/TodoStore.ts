import { makeAutoObservable } from 'mobx';

interface Todo {
    id: number;
    title: string;
    description: string;
    checked: boolean;
    ownerId: string;
}
const TodoStore = () =>
    makeAutoObservable({
        todoList: [] as Array<Todo>,
        counter: 0,
        complete(id: number) {
            this.todoList[id].checked = true;
        },
        delete(id: number) {
            this.todoList = this.todoList.filter((todo) => todo.id !== id);
        },
        undo(id: number) {
            this.todoList[id].checked = false;
        },
        add(id: number) {
            this.todoList[id].checked = true;
        },
    });

const todoStore = TodoStore();
export default todoStore;
