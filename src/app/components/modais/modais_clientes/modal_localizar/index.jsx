// components/Modal.js
'use client';

import styles from '../modal_localizar/index.module.css';
import Close from "/public/close.svg";

export default function Modal({ isOpen, onClose }) {
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains(styles.teste)) {
            onClose();
        }
    };

    if (isOpen) {
        return (
            <div className={styles.teste} onClick={handleOutsideClick}>
                <div className={styles.modal}>
                    <span className={styles.close} onClick={onClose}></span>

                    <h1 className={styles.titulo}>
                        Busca avançada
                    </h1>

                    <h2 className={styles.titulonome}>
                        Pesquisar por nome
                    </h2>

                    <input type="text" className={styles.input1} id="input1"/>

                    <button className={styles.botaopesquisar}>
                        Pesquisar
                    </button>
                </div>
            </div>
        );
    }
    return null;
}
