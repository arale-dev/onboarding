import { makeAutoObservable } from 'mobx';

export interface User {
    id: number;
    name: string;
}

const AuthStore = () =>
    makeAutoObservable({
        id: 0,
        name: 'testId',
    });

const authStore = AuthStore();
export default authStore;
