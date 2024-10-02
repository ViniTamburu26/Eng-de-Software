<template>
  <div class="rectangle-container">
    <div class="rectangle"> 
      <font-awesome-icon icon="calendar" class="icon" /> 
      <span class="calendar-text">Agendar agora?</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.rectangle-container {
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-top: 40px;
  margin-bottom: 80px;
}


.rectangle {
  width: 80%; 
  max-width: 1500px; 
  height: 100px; 
  background-color: #F8F9FA; 
  border: 2px solid #372D90; 
  border-radius: 8px; 
  display: flex; 
  align-items: center; 
  padding: 10px;
  text-align: left;
}


.icon {
  font-size: 40px; /* Tamanho do ícone */
  color: #000003;
  margin-right: 30px; /* Espaço entre ícone e texto */
  margin-left: 30px;
  opacity: 90%;
}

/* Estilo do texto */
.calendar-text {
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  opacity: 70%;
}


@media (max-width: 768px) {
  .rectangle {
    width: 90%; 
    height: 80px; 
  }

  .icon {
    font-size: 30px;
    margin-left: 20px; 
    margin-right: 20px;
  }

  .calendar-text {
    font-size: 18px; 
  }
}


@media (max-width: 480px) {
  .rectangle {
    width: 100%; 
    height: 70px; 
    padding: 5px; 
  }

  .icon {
    font-size: 25px; 
    margin-left: 15px; 
    margin-right: 15px;
  }

  .calendar-text {
    font-size: 16px; 
  }
}
</style>
