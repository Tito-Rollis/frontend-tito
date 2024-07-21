import { Textarea } from '@/components/ui/textarea';
import { TextAreaProps } from '@/types/Props';

export const TextAreaComponent = (props: TextAreaProps) => {
    return (
        <Textarea
            readOnly
            className="bg-gray-500 placeholder:text-gray-300 text-slate-200 border-0"
            value={props.value}
        />
    );
};
