import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.100</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Steam</td>
                        <td className="withdraw">-R$500,00</td>
                        <td>Jogos</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Jogo do bixo</td>
                        <td className="deposit">R$47.000</td>
                        <td>Lazer</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}