import styles from '../modal_localizar/index.module.css';

export default function ModalConsulta({ isOpen, onClose }) {
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains(styles.teste)) {
            onClose();
        }
    };

    if (isOpen) {
        return (
            <div className={styles.container} onClick={handleOutsideClick}>
                <div className={styles.modal}>
                    <div className={styles.titleModal}>
                        <h1>Busca avançada</h1>
                        <span className={styles.close} onClick={onClose}></span>
                    </div>

                    <div className={styles.searchOptions}>
                        <div className={styles.optionGroup}>
                            <p className={styles.optionGroupTitle}>Opções de pesquisa</p>
                            <div className={styles.radioRow}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="search" className={styles.radioInput} />
                                    <span className={styles.radioCustom}></span> Código
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="search" className={styles.radioInput} />
                                    <span className={styles.radioCustom}></span> Nome
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="search" className={styles.radioInput} />
                                    <span className={styles.radioCustom}></span> CPF
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="search" className={styles.radioInput} />
                                    <span className={styles.radioCustom}></span> Telefone
                                </label>
                            </div>
                        </div>

                        <hr className={styles.hr} />

                        <div className={styles.situationGroup}>
                            <p className={styles.optionGroupTitle}>Situação</p>
                            <div className={styles.radioRow}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="status" className={styles.radioInput} />
                                    <span className={styles.radioCustom}></span> Ativo
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="status" className={styles.radioInput} />
                                    <span className={styles.radioCustom}></span> Inativo
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="status" className={styles.radioInput} />
                                    <span className={styles.radioCustom}></span> Todos
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Digite aqui..." className={styles.searchInput} />
                        <button className={styles.searchButton}>Pesquisar</button>
                    </div>

                    <div className={styles.resultTableContainer}>
                        <table className={styles.resultTable}>
                            <thead className={styles.tableHead}>
                                <tr className={styles.tableRow}>
                                    <th className={`${styles.tableHeader} ${styles.id}`}>Código</th>
                                    <th className={`${styles.tableHeader} ${styles.nome}`}>Nome</th>
                                    <th className={`${styles.tableHeader} ${styles.cpf}`}>CPF</th>
                                    <th className={`${styles.tableHeader} ${styles.dataNasc}`}>Data de Nascimento</th>
                                    <th className={`${styles.tableHeader} ${styles.sexo}`}>Sexo</th>
                                    <th className={`${styles.tableHeader} ${styles.telefone}`}>Telefone</th>
                                    <th className={`${styles.tableHeader} ${styles.email}`}>Email</th>
                                    <th className={`${styles.tableHeader} ${styles.observ}`}>Observações</th>
                                    <th className={`${styles.tableHeader} ${styles.acesso}`}>Acesso</th>
                                    <th className={`${styles.tableHeader} ${styles.situacao}`}>Situação</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tableBody}>
                                {/* Aqui vão as linhas de dados */}
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
