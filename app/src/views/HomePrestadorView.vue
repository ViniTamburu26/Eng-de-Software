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
            <h1>Bem-vindo, Prestador de Serviço {{ providerName }} (ID: {{ providerId }})</h1>
        </div>

        <div class="content">
            <section class="offer_services">
                <h2>Oferecer Serviços</h2>
                <form @submit.prevent="submitService" class="service_form">
                    <select v-model="newService.name" required>
                        <option disabled value="">Escolha um Serviço</option>
                        <option v-for="service in availableServices" :key="service" :value="service">{{ service }}</option>
                    </select>
                    <button type="submit">Adicionar Serviço</button>
                </form>

                <h3>Serviços Ofertados:</h3>
                <ul>
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
                            <input type="checkbox" :value="day" v-model="availability.days" /> {{ day }}
                        </label>
                    </div>
                    <select v-model="availability.startTime" required>
                        <option disabled value="">Escolha um Horário Inicial</option>
                        <option v-for="time in availableTimes" :key="time">{{ time }}</option>
                    </select>
                    <select v-model="availability.endTime" required>
                        <option disabled value="">Escolha um Horário Final</option>
                        <option v-for="time in availableTimes" :key="time">{{ time }}</option>
                    </select>
                    <button type="submit">Salvar Disponibilidade</button>
                </form>

                <h3>Disponibilidade Atual:</h3>
                <p v-if="availability.days.length">Disponível em: {{ availability.days.join(', ') }} das {{ availability.startTime }} às {{ availability.endTime }}</p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newService: {
                name: ''
            },
            services: [],
            availability: {
                days: [],
                startTime: '',
                endTime: ''
            },
            availableTimes: [
                '09:00', '10:00', '11:00', '12:00', '13:00',
                '14:00', '15:00', '16:00', '17:00'
            ],
            daysOfWeek: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
            allServices: ['Limpeza Padrão', 'Limpeza Pesada', 'Limpeza Pós-Aluguel', 'Limpeza Pós-Reforma'],
            providerId: localStorage.getItem('providerId'), // Obtendo o ID do prestador do localStorage
            providerName: 'Prestador' // Substituir pelo nome do prestador se disponível
        };
    },
    computed: {
        availableServices() {
            // Retorna serviços que ainda não foram oferecidos
            return this.allServices.filter(service => !this.services.some(s => s.name === service));
        }
    },
    methods: {
        submitService() {
            if (this.newService.name) {
                const newId = this.services.length + 1; // Simulando um ID único
                this.services.push({ id: newId, ...this.newService });
                this.newService.name = ''; // Limpa a seleção após adicionar
            }
        },
        removeService(id) {
            this.services = this.services.filter(service => service.id !== id);
        },
        setAvailability() {
            // Simula salvar a disponibilidade
            console.log(`Disponibilidade definida: ${this.availability.days.join(', ')} das ${this.availability.startTime} às ${this.availability.endTime}`);
        }
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

.logo {
    width: 150px; /* Ajuste o tamanho da logo */
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
}

section {
    background: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 10px;
    color: #372D90;
    font-size: 1.5em; /* Aumentar o tamanho do título */
    text-align: left; /* Alinhamento à esquerda */
}

h3 {
    margin: 15px 0 10px 0;
    color: #555;
    font-size: 1.2em; /* Aumentar o tamanho do subtítulo */
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
    transition: border-color 0.3s; /* Adiciona transição ao foco */
}

select:focus {
    border-color: #372D90; /* Mudança na borda quando em foco */
}

button {
    background-color: #372D90;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s; /* Transição suave */
}

button:hover {
    background-color: #0073e6;
    transform: scale(1.05); /* Efeito de aumento no hover */
}

.remove_button {
    background-color: #ff4d4d;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s; /* Transição suave */
}

.remove_button:hover {
    background-color: #ff1a1a;
    transform: scale(1.05); /* Efeito de aumento no hover */
}

.day_label {
    display: inline-block;
    margin-right: 10px; /* Espaçamento entre os dias da semana */
}
</style>
