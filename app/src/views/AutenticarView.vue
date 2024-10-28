<template>
    <header class="flex header">
        <div class="header_content">
            <router-link to="/">
                <img class="logo" src="@/assets/logo.png" alt="Logo CleanUP">
            </router-link>
        </div>
    </header>

    <div class="autenticar">
        <h2 class="prompt_text">Qual seu ID?</h2>
        <input type="text" class="id_input" v-model="providerId" placeholder="Digite seu ID" />
        <router-link to="/HomePrestador" class="continue_button" @click="storeProviderId">Continuar</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            providerId: ''
        };
    },
    methods: {
        storeProviderId() {
            // Armazenar o ID do prestador em localStorage
            localStorage.setItem('providerId', this.providerId);
        }
    }
};
</script>

<style>
.autenticar {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    height: calc(60vh - 60px); 
}

.prompt_text {
    font-size: 24px; 
    color: #000000; 
    margin-bottom: 20px;
}

.id_input {
    width: 300px; 
    padding: 10px; 
    border: 1px solid #372D90;
    border-radius: 5px; 
    margin-bottom: 20px; 
}

.continue_button {
    background-color: #372D90; 
    color: #FFFFFF; 
    font-size: 20px; 
    font-weight: bold;
    padding: 10px 20px; 
    text-decoration: none; 
    border-radius: 5px; 
    width: 300px; 
    text-align: center;
}

.continue_button:hover {
    background-color: #0073e6; 
}
</style>