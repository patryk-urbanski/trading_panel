import React, { SetStateAction } from 'react';
import { ButtonGroup as Group, Button } from 'reactstrap';

type Option = {
    id: string | number;
    label: string;
};

type Props = {
    options: Option[];
    performSelect: React.Dispatch<SetStateAction<string | number>>;
    className?: string,
    currentSelection: string | number;
};

const ButtonGroup = ({
    options,
    performSelect,
    className,
    currentSelection
}: Props) => {

    const handleSelect = (option: Option) => () => {
        performSelect(option.id);
    };

    return (
        <Group size='sm' className={className}>
            {
                options.map(option =>
                    <Button
                        key={`${option}--option`}
                        onClick={handleSelect(option)}
                        outline={currentSelection !== option.id ? true : false}
                        color='secondary'
                    >
                        {option.label}
                    </Button>
                )
            }
        </Group>
    );
};

export default ButtonGroup;