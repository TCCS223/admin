// Importa os estilos CSS específicos para o modal da pasta indicada
import styles from '../modal_localizar/index.module.css';

// Importa um ícone de fechamento (no formato SVG) da pasta public
// import Close from "/public/close.svg";

// Exporta a função do componente ModalConsulta como padrão
export default function ModalConsulta({ isOpen, onClose }) {
    // Função para lidar com cliques fora do modal
    const handleOutsideClick = (e) => {
        // Verifica se o clique foi na área fora do modal usando a classe 'teste'
        if (e.target.classList.contains(styles.teste)) {
            // Chama a função onClose para fechar o modal
            onClose();
        }
    };

    // Se a prop 'isOpen' for verdadeira, renderiza o modal
    if (isOpen) {
        return (
            // Div principal do modal que detecta cliques fora do modal
            <div className={styles.container} onClick={handleOutsideClick}>
                {/* Div interna do modal */}
                <div className={styles.modal}>
                    {/* Span que funciona como botão para fechar o modal */}
                    <span className={styles.close} onClick={onClose}></span>

                    <div className={styles.searchOptions}>
                        <div className={styles.optionGroup}>
                            <p className={styles.optionGroupTitle}>opções de pesquisa</p>
                            <div className={styles.radioContainer}>
                                <div className={styles.radioColumn}>
                                    <label className={styles.radioLabel}>
                                        <input type="radio" name="search" className={styles.radioInput} /> nome
                                    </label>
                                    <label className={styles.radioLabel}>
                                        <input type="radio" name="search" className={styles.radioInput} /> CPF
                                    </label>
                                </div>
                                <div className={styles.radioColumn}>
                                    <label className={styles.radioLabel}>
                                        <input type="radio" name="search" className={styles.radioInput} /> telefone
                                    </label>
                                    <label className={styles.radioLabel}>
                                        <input type="radio" name="search" className={styles.radioInput} /> email
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.filterGroup}>
                            <p className={styles.optionGroupTitle}>filtro</p>
                            <div className={styles.radioRow}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="filter" className={styles.radioInput} /> começa
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="filter" className={styles.radioInput} /> contém
                                </label>
                            </div>
                        </div>

                        <div className={styles.situationGroup}>
                            <p className={styles.optionGroupTitle}>situação</p>
                            <div className={styles.radioRow}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="status" className={styles.radioInput} /> ativo
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="status" className={styles.radioInput} /> inativo
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="status" className={styles.radioInput} /> todos
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="digite aqui" className={styles.searchInput} />
                        <button className={styles.searchButton}>pesquisar</button>
                    </div>
                    <div className={styles.resultTable}>
                        {/* Aqui vai a tabela de resultados */}
                    </div>
                    {/* <div className={styles.filtros}>
                        <div className={styles.opcoesPesquisa}>
                            <h1>Opções de pesquisa</h1>
                        </div>
                        <div className={styles.filtro}></div>
                        <div className={styles.situacao}></div>
                    </div>
                    <div className={styles.pesquisa}></div>
                    <div className={styles.tabela}></div> */}


                </div>
            </div>
        );
    }
    // Se a prop 'isOpen' for falsa, não renderiza nada
    return null;
}
