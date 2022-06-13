import { MouseEvent } from 'react';
import { FaRegCheckSquare, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import style from './Button.module.scss';

interface TodoButtonProps {
    onClick: () => void;
}

interface CheckButtonProps {
    // eslint-disable-next-line no-unused-vars
    onClick: (e: MouseEvent) => void;
    checked: boolean;
}

const CheckButton = ({ onClick, checked }: CheckButtonProps) => {
    return (
        <button
            type="button"
            className={`${style.checkButton} ${checked && style.checked}`}
            onClick={onClick}
        />
    );
};

const DeleteButton = ({ onClick }: TodoButtonProps) => {
    return (
        <button
            type="button"
            className={`${style.button} ${style.deleteButton}`}
            onClick={onClick}
        >
            <FaTrashAlt />
        </button>
    );
};

const EditButton = ({ onClick }: TodoButtonProps) => {
    return (
        <div className={style.buttonWrapper}>
            <button
                type="button"
                className={`${style.button} ${style.editButton}`}
                onClick={onClick}
            >
                <FaRegEdit />
            </button>
        </div>
    );
};

const CompleteButton = ({ onClick }: TodoButtonProps) => {
    return (
        <div className={style.buttonWrapper}>
            <button
                type="button"
                className={`${style.button} ${style.completeButton}`}
                onClick={onClick}
            >
                <FaRegCheckSquare />
            </button>
        </div>
    );
};

export { CheckButton, DeleteButton, EditButton, CompleteButton };
