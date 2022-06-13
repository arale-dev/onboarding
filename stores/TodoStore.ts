import { makeAutoObservable } from 'mobx';

export interface Todo {
    id: number;
    title: string;
    description: string;
    checked: boolean;
    ownerId: string;
}

const TodoStore = () =>
    makeAutoObservable({
        todoList: [
            {
                id: 0,
                description:
                    'this is test descripton ~~~~~~ 길이가 길면 어떻게 될지 정해야 합니다ㅏㅏㅏ',
                title: 'test title',
                checked: false,
                ownerId: 'a;sldkfj',
            },
            {
                id: 1,
                description:
                    't1222222222222his is test descripton ~~~~~~ 길이가 길면 어떻게 될지 정해야 합니다ㅏㅏㅏ길이가 길면 어떻게 될지 정해야 합니다ㅏㅏㅏ',
                title: 'test title2222',
                checked: true,
                ownerId: 'a;sldkfj222',
            },
        ] as Array<Todo>,
        counter: 2,
        getTodo(id: number) {
            return this.todoList.find((todo) => todo.id === id);
        },
        getTodoIdx(id: number) {
            return this.todoList.findIndex((todo) => todo.id === id);
        },
        get getRemaining() {
            return this.todoList.filter((todo: Todo) => !todo.checked).length;
        },
        check(id: number) {
            this.todoList[this.getTodoIdx(id)].checked = true;
        },
        uncheck(id: number) {
            this.todoList[this.getTodoIdx(id)].checked = false;
        },
        setCheck(id: number, checked: boolean) {
            this.todoList[this.getTodoIdx(id)].checked = checked;
        },
        delete(id: number) {
            this.todoList = this.todoList.filter((todo) => todo.id !== id);
        },
        add(id: number) {
            //
            console.log(id);
        },
    });

const todoStore = TodoStore();
export default todoStore;
