import React from 'react';
import style from './Typography.module.scss';

interface TitleProps {
    content: string;
    children: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({ content, children }) => {
    return (
        <h2 className={style.title}>
            {content} {children}
        </h2>
    );
};

interface TextProps {
    content: string;
    children: React.ReactNode;
}
interface BaseTextProps extends TextProps {
    type: 'subject' | 'description' | null;
}
const BaseText: React.FC<BaseTextProps> = ({ content, children, type }) => {
    const styleType = type === 'subject' ? style.subject : style.descripton;
    return (
        <p className={type ? styleType : undefined}>
            {content} {children}
        </p>
    );
};
const Description: React.FC<TextProps> = ({ content, children }) => (
    <BaseText content={content} type="description">
        {children}
    </BaseText>
);
const Subject: React.FC<TextProps> = ({ content, children }) => (
    <BaseText content={content} type="subject">
        {children}
    </BaseText>
);
export default Title;
export { Title, Description, Subject };
