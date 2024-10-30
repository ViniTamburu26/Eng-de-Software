<template>
    <div class="provider_dashboard">
        <header class="flex header">
            <div class="header_content">
                <router-link to="/">
                    <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP" />
                </router-link>
                <nav class="dashboard_nav">
                    <router-link to="/perfil">Meu Perfil</router-link>
                    <router-link to="/servicos">Serviços Ofertados</router-link>
                    <router-link to="/disponibilidade">Disponibilidade</router-link>
                    <router-link to="/agenda">Agenda</router-link>
                </nav>
            </div>
        </header>

        <div class="dashboard_header">
            <h1>Bem-vindo</h1>
        </div>

        <div class="content">
            <section class="offer_services">
                <h2>Oferecer Serviços</h2>
                <form @submit.prevent="submitService" class="service_form">
                    <select v-model="selectedService" required>
                        <option disabled value="">Escolha um Serviço</option>
                        <option v-for="service in availableServices" :key="service" :value="service">{{ service }}
                        </option>
                    </select>
                    <button type="submit">Adicionar Serviço</button>
                </form>

                <h3>Serviços Ofertados:</h3>
                <ul class="services_list">
                    <li v-for="service in services" :key="service.id">
                        <span>{{ service.name }}</span>
                        <button @click="removeService(service.id)" class="remove_button">Remover</button>
                    </li>
                </ul>
            </section>

            <section class="availability">
                <h2>Definir Disponibilidade</h2>
                <form @submit.prevent="setAvailability" class="availability_form">
                    <div class="days-selection">
                        <label v-for="day in daysOfWeek" :key="day" class="day_label">
                            <input type="checkbox" :value="day" v-model="tempAvailability.days" /> {{ day }}
                        </label>
                    </div>
                    <select v-model="tempAvailability.startTime" required>
                        <option disabled value="">Escolha um Horário Inicial</option>
                        <option v-for="time in availableTimes" :key="time">{{ time }}</option>
                    </select>
                    <select v-model="tempAvailability.endTime" required>
                        <option disabled value="">Escolha um Horário Final</option>
                        <option v-for="time in availableTimes" :key="time">{{ time }}</option>
                    </select>
                    <button type="submit">Salvar Disponibilidade</button>
                </form>

                <h3>Disponibilidade Atual:</h3>
                <div class="current-availability">
                    <p v-if="availabilityExists">
                        <strong>Disponível em:</strong>
                    </p>
                    <ul v-if="availabilityExists">
                        <li v-for="(day, index) in availability.days" :key="index">
                            {{ day }}<span v-if="index < availability.days.length - 1">, </span>
                        </li>
                    </ul>
                    <span v-if="availabilityExists">das <strong>{{ availability.startTime }}</strong> às <strong>{{
                            availability.endTime }}</strong></span>
                    <button v-if="availabilityExists" @click="removeAvailability" class="remove_button">Remover</button>
                    <p v-else>
                        <strong>Nenhuma disponibilidade definida.</strong> Por favor, adicione horários disponíveis.
                    </p>
                </div>
            </section>

        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            selectedService: '',
            services: [],
            availability: {
                days: [],
                startTime: '',
                endTime: ''
            },
            tempAvailability: {
                days: [],
                startTime: '',
                endTime: ''
            },
            providerId: this.$route.query.userId,
            availableServices: [
                "Limpeza Padrão",
                "Limpeza Pesada",
                "Limpeza Pós Aluguel",
                "Limpeza Pós Reforma"
            ],
            availableTimes: [
                "08:00", "09:00", "10:00", "11:00",
                "12:00", "13:00", "14:00", "15:00",
                "16:00", "17:00"
            ],
            daysOfWeek: [
                "Segunda", "Terça", "Quarta", "Quinta",
                "Sexta", "Sábado", "Domingo"
            ],
            availabilityExists: false
        };
    },
    methods: {
        async submitService() {
            const serviceData = {
                name: this.selectedService,
                providerId: this.providerId
            };
            try {
                const response = await axios.post('http://localhost:3000/service/services', serviceData);
                console.log("Serviço adicionado com ID: ", response.data.id);

                // Adiciona o serviço ao array services
                this.services.push({ id: response.data.id, name: response.data.name });

                // Remove o serviço da lista de opções
                this.availableServices = this.availableServices.filter(service => service !== this.selectedService);
                this.selectedService = '';

            } catch (error) {
                console.error("Erro ao adicionar serviço:", error.response ? error.response.data : error.message);
            }
        },

        async setAvailability() {
            // Verifica se pelo menos um dia foi selecionado
            if (this.tempAvailability.days.length === 0) {
                alert("Por favor, selecione pelo menos um dia da semana.");
                return; // Interrompe a execução se nenhum dia foi escolhido
            }

            const availabilityData = {
                providerId: this.providerId,
                days: this.tempAvailability.days,
                startTime: this.tempAvailability.startTime,
                endTime: this.tempAvailability.endTime
            };
            try {
                await axios.post('http://localhost:3000/service/availability', availabilityData);
                console.log("Disponibilidade salva com sucesso!");
                alert("Disponibilidade salva!");
                this.availabilityExists = true;

                // Atualiza a disponibilidade atual
                this.availability = { ...this.tempAvailability };
            } catch (error) {
                console.error("Erro ao salvar disponibilidade:", error.response ? error.response.data : error.message);
            }
        },


        async fetchServices() {
            try {
                const response = await axios.get('http://localhost:3000/service/services');
                this.services = response.data.filter(service => service.providerId === this.providerId);
                this.updateAvailableServices(); // Atualiza a lista de serviços disponíveis
            } catch (error) {
                console.error("Erro ao buscar serviços:", error.response ? error.response.data : error.message);
            }
        },

        async fetchAvailability() {
            try {
                const response = await axios.get(`http://localhost:3000/service/availability/${this.providerId}`);
                if (response.data) {
                    this.availability = response.data;
                    this.tempAvailability = { ...this.availability };
                    this.availabilityExists = true;
                } else {
                    console.log("Nenhuma disponibilidade encontrada.");
                    this.availabilityExists = false;
                }
            } catch (error) {
                console.error("Erro ao buscar disponibilidade:", error.response ? error.response.data : error.message);
            }
        },
        async removeAvailability() {
            try {
                await axios.delete(`http://localhost:3000/service/availability/${this.providerId}`);
                this.availability = { days: [], startTime: '', endTime: '' };
                this.tempAvailability = { days: [], startTime: '', endTime: '' };
                this.availabilityExists = false;
                console.log("Disponibilidade removida com sucesso!");
            } catch (error) {
                console.error("Erro ao remover disponibilidade:", error.response ? error.response.data : error.message);
            }
        },

        async removeService(serviceId) {
            try {
                // Primeiro, remova o serviço do backend
                await axios.delete(`http://localhost:3000/service/services/${serviceId}`);

                // Em seguida, filtre o serviço da lista local
                const removedService = this.services.find(service => service.id === serviceId);
                this.services = this.services.filter(service => service.id !== serviceId); // Atualiza a lista

                // Adicione o serviço removido de volta à lista de serviços disponíveis
                if (removedService) {
                    this.availableServices.push(removedService.name);
                }

                console.log("Serviço removido com sucesso!");
                this.updateAvailableServices(); // Atualiza a lista de serviços disponíveis
            } catch (error) {
                console.error("Erro ao remover serviço:", error.response ? error.response.data : error.message);
            }
        },


        updateAvailableServices() {
            this.availableServices = this.availableServices.filter(service => {
                return !this.services.some(s => s.name === service);
            });
        },
    },
    created() {
        this.fetchServices(); // Busca serviços ao criar o componente
        this.fetchAvailability(); // Busca disponibilidade ao criar o componente
    }
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
    color: #fff;
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

.content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* Espaçamento entre seções */
}

section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

h2 {
    margin-bottom: 10px;
    color: #372D90;
    font-size: 1.5em;
    text-align: left;
}

h3 {
    margin: 15px 0 10px 0;
    color: #555;
    font-size: 1.2em;
}

form {
    display: flex;
    flex-direction: column;
}

.service_form,
.availability_form {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    background: #f9f9f9;
    margin-bottom: 15px;
}

select {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    background-color: #372D90;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0073e6;
}

ul {
    list-style-type: none;
    padding: 0;
}

.services_list {
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
}

.remove_button {
    background: rgb(110, 23, 23);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
}

.remove_button:hover {
    background: rgb(160, 2, 2);
}

.current-availability {
    margin-top: 20px;
    background: #e9ecef;
    /* Leve cinza para destacar a seção */
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.availability-card {
    padding: 10px;
    background: #ffffff;
    /* Branco para os cartões de disponibilidade */
    border: 1px solid #ddd;
    /* Borda leve */
    border-radius: 4px;
}

.availability-day {
    display: flex;
    justify-content: space-between;
    /* Para distribuir o dia e o horário */
    padding: 8px 0;
    border-bottom: 1px solid #f1f1f1;
    /* Borda inferior leve entre os dias */
}

.availability-time {
    font-weight: normal;
    /* Menor peso para o horário */
    color: #777;
    /* Cinza para o horário */
}

.availability-day:last-child {
    border-bottom: none;
    /* Remove a borda do último item */
}

strong {
    color: #372D90;
    /* Cor dos textos em negrito, consistente com o tema */
}

p {
    margin: 10px 0;
    /* Margem entre parágrafos */
    color: #555;
    /* Cor padrão para parágrafos */
    font-size: 1em;
    /* Tamanho padrão para parágrafos */
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