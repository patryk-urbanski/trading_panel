import React, { useState, useEffect } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import styles from './index.module.scss';

type Props = {
    error: string | null,
    clearErrorHandler?: () => void;
};

const ErrorModal = ({
    error,
    clearErrorHandler
}: Props) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    useEffect(() => {
        setIsOpen(!!error)
    }, [error])

    return (
        <Modal isOpen={isOpen} toggle={toggleModal} className={styles.modal}>
            <ModalHeader className={styles.header}>
                <span><strong>Oups!</strong> Somethig gone wrong... don't panic tho.</span>
            </ModalHeader>
            <ModalBody>
                {`It seems like we got: ${error}. It's a free API plan, go easy with it.` }
            </ModalBody>
            <ModalFooter>
                <Button
                    onClick={clearErrorHandler}
                >
                    <span>Got it!</span>
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ErrorModal;

