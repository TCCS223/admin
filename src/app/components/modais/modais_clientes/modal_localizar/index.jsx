// Importa os estilos CSS específicos para o modal da pasta indicada
import styles from '../modal_localizar/index.module.css';

// Importa um ícone de fechamento (no formato SVG) da pasta public
import Close from "/public/close.svg";

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
            <div className={styles.teste} onClick={handleOutsideClick}>
                {/* Div interna do modal */}
                <div className={styles.modal}>
                    {/* Span que funciona como botão para fechar o modal */}
                    <span className={styles.close} onClick={onClose}></span>

                    {/* Título principal do modal */}
                    <h1 className={styles.titulo}>
                        Busca avançada
                    </h1>

                    {/* Subtítulo do modal */}
                    <h2 className={styles.titulonome}>
                        Pesquisar por nome
                    </h2>

                    {/* Campo de entrada de texto para pesquisa */}
                    <input type="text" className={styles.input1} id="input1"/>

                    {/* Botão para iniciar a pesquisa */}
                    <button className={styles.botaopesquisar}>
                        Pesquisar
                    </button>
                </div>
            </div>
        );
    }
    // Se a prop 'isOpen' for falsa, não renderiza nada
    return null;
}
