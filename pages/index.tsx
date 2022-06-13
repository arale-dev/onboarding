/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Head from 'next/head';
import { FaPenFancy } from 'react-icons/fa';
import TodoList from '../components/TodoList';
import { Title } from '../components/Typography';
import styles from './index.module.scss';

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>Onboarding Project</title>
            <meta name="description" content="Onboarding Project : Todo List" />
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <Title content="">
                        <a>To Do List</a>
                        <FaPenFancy />
                    </Title>
                </div>

                {/* <p>{JSON.stringify(todoStore.todoList)}</p> */}

                <TodoList />
            </div>
        </main>
    </div>
);

export default Home;
