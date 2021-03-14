import React, { useState, useEffect } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

type Props = {
    error: string | null,
    clearErrorHandler: () => void;
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
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader color='danger'>
                <span>Error</span>
            </ModalHeader>
            <ModalBody>
                <span>elo</span>
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

