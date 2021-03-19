import React, { useState, SetStateAction } from 'react';

import { Dropdown as ReactstrapDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

import styles from './index.module.scss';

type Props = {
    currentSelectionLabel: string | number,
    options: { id: string | number, label: string }[],
    isDisabled?: boolean,
    performSelection: React.Dispatch<SetStateAction<string | number>>,
}

const Dropdown = ({
    currentSelectionLabel,
    options,
    isDisabled,
    performSelection,
}: Props ) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handlePerformSelection = (id: string | number) => () => {
        performSelection(id);
    };

    return (
            <ReactstrapDropdown
                direction='down'
                className={styles.dropdown}
                isOpen={isOpen}
                toggle={handleToggle}
                disabled={isDisabled}
            >
                <DropdownToggle caret className={styles.dropdownToggler} disabled={isDisabled}>
                    {currentSelectionLabel}
                </DropdownToggle>
                <DropdownMenu className={styles.dropdownMenu}>
                    {
                        options.map(option =>
                            <DropdownItem
                                key={`selector-${option.id}`}
                                className={styles.dropdownItem}
                                onClick={handlePerformSelection(option.id)}
                                toggle
                            >
                                <div className='d-inline-flex'>
                                    <span className={styles.label}>{option.label}</span>
                                </div>
                            </DropdownItem>
                        )
                    }
                </DropdownMenu>
            </ReactstrapDropdown>
    );
};

export default Dropdown;