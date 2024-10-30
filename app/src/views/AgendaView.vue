<template>
    <div class="solicitacoes_dashboard">
        <header class="flex header">
    <div class="header_content">
        <router-link to="/HomePrestador">
            <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP" />
        </router-link>
        <nav class="dashboard_nav">
            <router-link to="/perfil">Meu Perfil</router-link>
            <router-link to="/servicos">Serviços Ofertados</router-link>
            <router-link to="/disponibilidade">Disponibilidade</router-link>
            <router-link to="/agenda">Agenda</router-link>
        </nav>
        <router-link to="/" class="logout_link">Sair</router-link> <!-- Link para Sair -->
    </div>
</header>


        <main class="solicitacoes main_content">
            <!-- Seção de Solicitações Disponíveis -->
            <h2>Solicitações Disponíveis</h2>
            <div class="solicitacoes-container">
                <div v-if="solicitacoes.length === 0" class="no-solicitacoes">
                    Nenhuma solicitação disponível.
                </div>

                <div v-if="solicitacoes.length > 0" class="solicitacao-dados">
                    <ul class="solicitacao-list">
                        <li v-for="solicitacao in solicitacoes" :key="solicitacao.id" class="solicitacao">
                            <div class="solicitacao-info">
                                <h3 class="solicitacao-titulo">{{ solicitacao.tipo }}</h3>
                                <div class="solicitacao-detalhes">
                                    <p class="solicitacao-area">
                                        <strong>Área:</strong> {{ solicitacao.area }}
                                    </p>
                                    <p class="solicitacao-data">
                                        <strong>Data:</strong> {{ new Date(solicitacao.data).getTime() }}
                                    </p>
                                    <p class="solicitacao-id">
                                        <strong>ID Cliente:</strong> {{ solicitacao.idCliente }}
                                    </p>
                                    <p class="solicitacao-id">
                                        <strong>ID Serviço:</strong> {{ solicitacao.idServico }}
                                    </p>
                                    <p class="valor">
                                        <strong>Valor:</strong> R$ {{ solicitacao.valor.toFixed(2) }}
                                    </p>
                                </div>
                                <div class="solicitacao-actions">
                                    <button class="aceitar" @click="aceitarSolicitacao(solicitacao)">Aceitar</button>
                                    <button class="recusar" @click="recusarSolicitacao(solicitacao)">Recusar</button>
                                </div>
                                <div v-if="solicitacao.feedbackMessage"
                                    :class="['feedback', solicitacao.feedbackClass]">
                                    {{ solicitacao.feedbackMessage }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Seção de Solicitações Aceitas -->
            <h2>Solicitações Aceitas</h2>
            <div class="solicitacoes-container">
                <div v-if="solicitacoesAceitas.length === 0" class="no-solicitacoes">
                    Nenhuma solicitação aceita.
                </div>

                <div v-if="solicitacoesAceitas.length > 0" class="solicitacao-dados">
                    <ul class="solicitacao-list">
                        <li v-for="solicitacao in solicitacoesAceitas" :key="solicitacao.id" class="solicitacao">
                            <div class="solicitacao-info">
                                <h3 class="solicitacao-titulo">{{ solicitacao.tipo }}</h3>
                                <div class="solicitacao-detalhes">
                                    <p class="solicitacao-area">
                                        <strong>Área:</strong> {{ solicitacao.area }}
                                    </p>
                                    <p class="solicitacao-data">
                                        <strong>Data:</strong> {{ new Date(solicitacao.data).getTime() }}
                                    </p>
                                    <p class="solicitacao-id">
                                        <strong>ID Cliente:</strong> {{ solicitacao.idCliente }}
                                    </p>
                                    <p class="solicitacao-id">
                                        <strong>ID Serviço:</strong> {{ solicitacao.idServico }}
                                    </p>
                                    <p class="valor">
                                        <strong>Valor:</strong> R$ {{ solicitacao.valor.toFixed(2) }}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            solicitacoes: [], // Lista de solicitações pendentes
            solicitacoesAceitas: [], // Lista de solicitações aceitas
        };
    },
    mounted() {
        this.fetchSolicitacoes(); // Busca solicitações ao montar o componente
    },
    methods: {
        async fetchSolicitacoes() {
            try {
                const response = await fetch("http://localhost:3000/order/solicitacoes");
                if (response.ok) {
                    const solicitacoes = await response.json();
                    this.solicitacoes = solicitacoes
                        .filter((solicitacao) => solicitacao.idPrestador === 0)
                        .map((solicitacao) => ({
                            ...solicitacao,
                            feedbackMessage: "",
                            feedbackClass: "",
                        }));

                    // Filtrar as solicitações com idPrestador igual a 1
                    this.solicitacoesAceitas = solicitacoes.filter(
                        (solicitacao) => solicitacao.idPrestador === 1
                    );
                } else {
                    throw new Error("Erro ao buscar solicitações");
                }
            } catch (error) {
                console.error(error);
            }
        },

        async aceitarSolicitacao(solicitacao) {
            try {
                const response = await fetch("http://localhost:3000/order/aceitar", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ idServico: solicitacao.idServico }),
                });

                if (!response.ok) {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage || "Erro ao aceitar a solicitação");
                }

                solicitacao.feedbackMessage = "Solicitação aceita com sucesso.";
                solicitacao.feedbackClass = "success";
                this.fetchSolicitacoes();
            } catch (error) {
                solicitacao.feedbackMessage = error.message || "Erro ao aceitar a solicitação.";
                solicitacao.feedbackClass = "error";
                console.error(error);
            }
        },

        async recusarSolicitacao(solicitacao) {
            try {
                const response = await fetch("http://localhost:3000/order/recusar", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ idServico: solicitacao.idServico }),
                });

                if (!response.ok) {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage || "Erro ao recusar a solicitação");
                }

                solicitacao.feedbackMessage = "Solicitação recusada com sucesso.";
                solicitacao.feedbackClass = "success";
                this.fetchSolicitacoes(); // Atualiza a lista de solicitações após recusar
            } catch (error) {
                solicitacao.feedbackMessage = error.message || "Erro ao recusar a solicitação.";
                solicitacao.feedbackClass = "error";
                console.error(error);
            }
        }

    },
};
</script>

<style scoped>
.provider_dashboard {
    padding: 20px;
    background-color: #f4f4f4;
    font-family: 'Arial', sans-serif;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header_content {
    display: flex;
    align-items: center;
}

.dashboard_header {
    background-color: #372D90;
    color: #d5dbfc;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.dashboard_nav {
    margin-left: 20px;
}

.dashboard_nav a {
    margin: 0 15px;
    color: #E3E0E0;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

.dashboard_nav a:hover {
    color: #0073e6;
}


.solicitacoes {
    display: flex;
    flex-direction: column;
    /* Coloca os itens em coluna */
    align-items: center;
    /* Centraliza todos os itens horizontalmente */
    
}

h2 {
    text-align: center;
    /* Centraliza o texto */
    margin-top: 40px;
    /* Adiciona espaço abaixo do título */

}

.solicitacoes-container {
    background-color: #d5dbfc;
    color: #372D90;
}

.solicitacao-list {
    display: flex;
    flex-wrap: wrap;
    /* Permite que os itens pulem para a próxima linha */
    gap: 20px;
    /* Espaço entre os itens */
    justify-content: center;
    /* Centraliza os itens */
}

.solicitacao {
    flex: 1 1 300px;
    background-color: #f2f1fb;
    border: 1px solid #000002;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.2s;
}


.solicitacao:hover {
    transform: scale(1.02);
    /* Aumenta ligeiramente ao passar o mouse */
}

.solicitacao-titulo {
    font-size: 1.5em;
    /* Tamanho do título */
    color: #372d90;
}


.solicitacao h3 {
    margin: 0;
}

.solicitacao-info {
    display: flex;
    flex-direction: column;
    /* Alinha os itens em coluna */
    justify-content: center;
    /* Centraliza verticalmente */
    align-items: flex-start;
    /* Alinha os itens à esquerda */
    padding: 20px;
    /* Adiciona padding interno */
}

.solicitacao-detalhes {
    display: flex;
    flex-direction: column;
    /* Alinha os detalhes em coluna */
    margin-top: 10px;
    /* Adiciona espaço acima dos detalhes */
}

.solicitacao-area,
.solicitacao-data,
.solicitacao-id {
    margin: 5px 0;
    /* Mantém o espaçamento entre os itens */
}

.valor {
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.2em;
    /* Aumenta o tamanho da fonte do valor */
    color: #372D90;
    /* Muda a cor do valor para um destaque */
}


.feedback {
    margin-top: 15px;
    font-weight: bold;
}

.error {
    color: red;
    /* Cor de erro */
}

.no-solicitacoes {
    margin-top: 15px;
    font-style: italic;
    color: #6f0485;
    font-weight: bold;
}



.solicitacao-actions button.aceitar {
    margin-right: 10px;
    padding: 10px 15px;
    background-color: #2d9062;
    /* Cor do botão */
    color: white;
    /* Cor do texto */
    border: none;
    /* Remove bordas */
    border-radius: 5px;
    /* Arredonda os cantos */
    cursor: pointer;
    /* Muda o cursor ao passar o mouse */
    transition: background-color 0.3s;
    /* Transição suave */
}

.solicitacao-actions button.recusar {
    margin-right: 10px;
    padding: 10px 15px;
    background-color: #7c0202;
    /* Cor do botão */
    color: white;
    /* Cor do texto */
    border: none;
    /* Remove bordas */
    border-radius: 5px;
    /* Arredonda os cantos */
    cursor: pointer;
    /* Muda o cursor ao passar o mouse */
    transition: background-color 0.3s;
    /* Transição suave */
}

.solicitacao-actions button.aceitar:hover {
    background-color: #218838;
    /* Tom mais escuro de verde ao passar o mouse */
}

.solicitacao-actions button.recusar:hover {
    background-color: #c82333;
    /* Tom mais escuro de vermelho ao passar o mouse */
}

.header_content {
    display: flex;
    justify-content: space-between; /* Distribui espaço entre os itens */
    align-items: center; /* Alinha verticalmente os itens */
}

.dashboard_nav {
    display: flex;
    gap: 20px; /* Espaçamento entre os links do menu */
}

.logout_link {
    margin-left: auto; /* Empurra o link "Sair" para a direita */
    color: rgb(253, 247, 247); /* Cor do texto (opcional) */
    text-decoration: none; /* Remove o sublinhado */
    font-weight: bold;
}


@media (max-width: 768px) {

.recArea,
.recValor {
  width: 90%;
  padding: 15px;
}

.navigation-buttons {
  flex-direction: column;
  align-items: center;
}

.button-left,
.button-right {
  width: 100%;
  margin-bottom: 10px;
}
}


@media (max-width: 480px) {

.recArea,
.recValor {
  width: 100%;
  padding: 10px;
}

.input-area {
  width: 100%;
  font-size: 14px;
}

.button-left,
.button-right {
  font-size: 16px;
}

.title {
  font-size: 18px;
}
}

</style>
