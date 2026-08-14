<script setup>
    import FormularioEntrar from '../components/formulario-entrar.vue'
</script>

<template>
    <div class="pagina-login">
        <img 
            src="../assets/imgs/coluna-verde.png" 
            alt="Coluna Verde" 
            class="coluna-verde-top" 
        />
        <img 
            src="../assets/imgs/logo-marca.png" 
            alt="Logo Ecocycle" 
            class="logo-marca"
        />
        <FormularioEntrar />
        <img 
            src="../assets/imgs/coluna-verde.png" 
            alt="Coluna Verde" 
            class="coluna-verde-bottom" 
        />
    </div>
</template>

<style scoped>
    :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    :global(#app) {
        height: 100%;
    }

    .pagina-login {
        width: 100%;
        height: 100vh;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .coluna-verde-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 40%;
        height: auto;
        transform: rotate(180deg);
    }

    .coluna-verde-bottom {
        position: absolute;
        bottom: 0px;
        right: 0;
        width: 40%;
        height: auto;
    }
</style>