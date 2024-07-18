import { useState } from 'react';
import styles from './index.module.css';

export default function Veiculos() {
    const [nomeMarca, setNomeMarca] = useState("");

    const marcas = [
        "Selecione",
        "Acura",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "Bugatti",
        "Buick",
        "Cadillac",
        "Chevrolet",
        "Chrysler",
        "Citroën",
        "Dodge",
        "Ferrari",
        "Fiat",
        "Ford",
        "Genesis",
        "GMC",
        "Honda",
        "Hyundai",
        "Infiniti",
        "Jaguar",
        "Jeep",
        "Kia",
        "Lamborghini",
        "Land Rover",
        "Lexus",
        "Lincoln",
        "Maserati",
        "Mazda",
        "McLaren",
        "Mercedes-Benz",
        "Mini",
        "Mitsubishi",
        "Nissan",
        "Pagani",
        "Peugeot",
        "Porsche",
        "Ram",
        "Renault",
        "Rolls-Royce",
        "Saab",
        "Subaru",
        "Suzuki",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
    ];

    const handleMarcaChange = (event) => {
        const selectedMarca = event.target.value;
        setNomeMarca(selectedMarca);
    };

    const dados = {
        'mar_nome': nomeMarca,
    }

    return (
        <div id="veiculos" className={styles.content_section}>
            <h2 className={styles.h2}>Gerenciamento de Veículos</h2>
            <div className={styles.button_group}>
                <button id="novoVeiculo">Novo</button>
                <button id="alterarVeiculo">Alterar</button>
                <button id="excluirVeiculo">Excluir</button>
                <button id="localizarVeiculo">Localizar</button>
            </div>
            <form id="veiculoForm" className={styles.form}>
                <input type="hidden" id="veiculoId" className={styles.input_veiculos} />

                <div className={styles.grid}>
                    <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                        <label htmlFor="codigo_veiculo" className={styles.label_veiculos}>Código:</label>
                        <input type="text" id="placa_veiculo" name="placa_veiculo" required className={styles.input_veiculos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_large}`}>
                        <label htmlFor="modelo_veiculo" className={styles.label_veiculos}>Modelo:</label>
                        <input type="text" id="modelo_veiculo" name="modelo_veiculo" required className={styles.input_veiculos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                        <label htmlFor="marca_veiculo" className={styles.label_veiculos}>Marca:</label>
                        <select id="marca" name="marca" required className={`${styles.select} ${styles.input_small_select}`} onChange={handleMarcaChange}>
                            <option value="" disabled>Selecione</option>
                            {marcas.map((name) => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                        <label htmlFor="placa_veiculo" className={styles.label_veiculos}>Placa:</label>
                        <input type="text" id="placa_veiculo" name="placa_veiculo_veiculo" required className={styles.input_veiculos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                        <label htmlFor="ano_veiculo" className={styles.label_veiculos}>Ano:</label>
                        <input type="number" id="ano_veiculo" name="ano_veiculo" required className={styles.input_veiculos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                        <label htmlFor="cor_veiculo" className={styles.label_veiculos}>Cor:</label>
                        <select id="cor" name="cor" required className={`${styles.select} ${styles.input_small_select}`} defaultValue="">
                            <option value="">Selecione</option>
                            <option value="Amarelo">Amarelo</option>
                            <option value="Azul">Azul</option>
                            <option value="Bege">Bege</option>
                            <option value="Branco">Branco</option>
                            <option value="Cinza">Cinza</option>
                            <option value="Dourado">Dourado</option>
                            <option value="Laranja">Laranja</option>
                            <option value="Marrom">Marrom</option>
                            <option value="Preto">Preto</option>
                            <option value="Prata">Prata</option>
                            <option value="Rosa">Rosa</option>
                            <option value="Roxo">Roxo</option>
                            <option value="Verde">Verde</option>
                            <option value="Vermelho">Vermelho</option>
                            <option value="Vinho">Vinho</option>
                            <option value="Personalizado">Personalizado</option>
                        </select>
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_medium}`}>
                        <label htmlFor="categoria_veiculo" className={styles.label_veiculos}>Categoria:</label>
                        <select id="categoria_veiculo" name="categoria_veiculo" required className={`${styles.select} ${styles.input_medium_select}`}>
                            <option value="" disabled>Selecione</option>
                            <option value="hatch">Hatch</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="pickup">Pickup</option>
                            <option value="van">Van</option>
                            <option value="moto">Moto</option>
                            <option value="caminhao">Caminhão</option>
                            <option value="onibus">Ônibus</option>
                        </select>
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_medium}`}>
                        <label htmlFor="combustivel_veiculo" className={styles.label_veiculos}>Combustível:</label>
                        <select id="combustivel_veiculo" name="combustivel_veiculo" required className={`${styles.select} ${styles.input_medium_select}`}>
                            <option value="" disabled>Selecione</option>
                            <option value="gasolina">Gasolina</option>
                            <option value="alcool">Álcool</option>
                            <option value="diesel">Diesel</option>
                            <option value="flex">Flex</option>
                            <option value="gnv">GNV (Gás Natural Veicular)</option>
                            <option value="eletrico">Elétrico</option>
                            <option value="hibrido">Híbrido</option>
                        </select>
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_large} ${styles.grid_item_observacoes}`}>
                        <label htmlFor="observacoes_veiculo" className={styles.label_veiculos}>Observações</label>
                        <input type="text" id="observacoes_veiculo" name="observacoes_veiculo" required className={styles.input_veiculos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                        <label htmlFor="proprietario_veiculo" className={styles.label_veiculos}>Proprietário:</label>
                        <input type="text" id="proprietario_veiculo" name="proprietario_veiculo" required className={styles.input_veiculos} />
                    </div>
                </div>
            </form>
            <div className={styles.footer_form}>
                <button type="submit" className={styles.button_submit}>Salvar</button>
                <button type="reset" className={styles.button_cancel}>Cancelar</button>
            </div>
        </div>
    );
}
