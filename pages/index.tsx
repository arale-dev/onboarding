/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Head from 'next/head';
import { FaPenFancy, FaLongArrowAltRight } from 'react-icons/fa';
import { Subject, Title } from '../components/Typography';
import todoStore from '../stores/TodoStore';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>Onboarding Project</title>
            <meta name="description" content="Onboarding Project : Todo List" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <Title content="Onboarding Project: ">
                <a>ToDo List</a>
                <FaPenFancy />
            </Title>
            <p>{JSON.stringify(todoStore.todoList)}</p>

            <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <Subject content="쿠키 설정">
                        <FaLongArrowAltRight />
                    </Subject>
                    <p>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2>ToDo List 확인하기 &rarr;</h2>
                    <p>
                        Learn about Next.js in an interactive course with
                        quizzes!
                    </p>
                </a>
            </div>
        </main>
    </div>
);

export default Home;
