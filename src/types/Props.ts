import { ReactNode } from 'react';

export type DropdownProps = {
    title: string;
    content: string | undefined;
    handler?: (id: string) => void;
    children?: ReactNode;
};

export type InputProps = {
    content: string;
    placeholder: string;
};
