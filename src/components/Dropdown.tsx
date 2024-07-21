import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownProps } from '@/types/Props';
import React from 'react';

export const DropdownComponent = (props: DropdownProps) => {
    const [id, setId] = React.useState('1');
    const idHandler = (value: string) => {
        if (props.handler) {
            props.handler(value);
        }
        setId(value);
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    {props.content} <ChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-fit">
                <DropdownMenuLabel>{props.title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={id} onValueChange={(value) => idHandler(value)}>
                    {props.children}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
