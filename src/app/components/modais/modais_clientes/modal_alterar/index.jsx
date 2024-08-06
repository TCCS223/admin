'use client';

import styles from '../modal_alterar/index.module.css'

export default function Modal({isOpen}) {

    if (isOpen) {
        return (
            <div className={styles.teste}>
                <div className={styles.modal}>alterar</div>
            </div>
        )
    }
return null;
}