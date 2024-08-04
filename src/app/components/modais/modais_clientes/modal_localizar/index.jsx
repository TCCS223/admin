'use client';

import styles from '../modal_localizar/index.module.css'

export default function Modal({isOpen}) {

    if (isOpen) {
        return (
            <div className={styles.teste}>
                <div className={styles.modal}>localizar</div>
            </div>
        )
    }
return null;
}