'use client';

import styles from '../modal_excluir/index.module.css'

export default function Modalexcluir({isOpen}) {

    if (isOpen) {
        return (
            <div className={styles.teste}>
                <div className={styles.modal}>excluir</div>
            </div>
        )
    }
return null;
}



