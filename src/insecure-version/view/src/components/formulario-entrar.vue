<script setup>

</script>

<template>
    <div class="login">
        <div class="login-header">
            <div class="alterar"></div>
            <span>Login</span>
            <span>Cadastro</span>
        </div>
        <form>
            <input 
                type="email" 
                placeholder="Ex: ecocycle@gmail.com" 
                v-model="email" 
                class="input"
            />
            <input 
                type="text" 
                placeholder="*******" 
                v-model="password" 
                class="input"
            />
            <button type="submit" @click="fazerLogin" class="btn-entrar">
                Entrar
            </button>
        </form>
    </div>
</template>

<style scoped>
    .login {
        border: 1px solid #000;
        width: 30%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        gap: 30px;
        font-family: 'Inter', sans-serif;
    }

    .login-header {

    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .input {
        height: 35px;
        width: 100%;
        background-color: #D9D9D9;
        border: none;
        border-radius: 10px;
    }

    .btn-entrar {
        height: 35px;
        width: 100%;
        background-color: #2D8204;
        border: none;
        border-radius: 10px;
        color: white;
        transition: 0.3s ease;
    }

    .btn-entrar:hover {
        background-color: #1E5A02;
        cursor: pointer;
    }

    .btn-entrar:active {
        transform: scale(0.95);
    }
</style>