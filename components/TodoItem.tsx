import React, { useState, MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';
import todoStore, { Todo } from '../stores/TodoStore';
import {
    CheckButton,
    CompleteButton,
    DeleteButton,
    EditButton,
} from './Button';
import { Description, Subject } from './Typography';
import style from './TodoItem.module.scss';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const [opened, setOpened] = useState(false);
    const [editing, setEditing] = useState(false);
    const { id, title, description, checked } = todo;

    const handleDelete = () => {
        todoStore.delete(id);
    };
    const handleCheck = (e: MouseEvent) => {
        e.preventDefault();
        todoStore.setCheck(id, !checked);
        setOpened(opened);
    };
    const handleEdit = () => setEditing(true);
    const handleComplete = () => setEditing(false);

    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <CheckButton onClick={handleCheck} checked={checked} />
                <div
                    className={`${style.titleWrapper} ${
                        checked && style.checked
                    }`}
                    onClick={() => setOpened(!opened)}
                    role="button"
                    onKeyDown={undefined}
                    tabIndex={0}
                >
                    <Subject content={title} />
                </div>
                {opened && <DeleteButton onClick={handleDelete} />}
            </div>

            {opened && (
                <div className={style.descriptionContainer}>
                    <Description content={description} />
                    {!editing && <EditButton onClick={handleEdit} />}
                    {editing && <CompleteButton onClick={handleComplete} />}
                </div>
            )}
        </div>
    );
};

export default observer(TodoItem);
