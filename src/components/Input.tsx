import { Input } from '@/components/ui/input';
import { InputProps } from '@/types/Props';

export const InputComponent = (props: InputProps) => {
    return <Input type="text" value={props.content} placeholder={props.placeholder} />;
};
