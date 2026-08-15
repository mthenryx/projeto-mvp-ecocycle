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
            <div>
                <label for="email">Email</label>
                <input 
                    type="email" 
                    placeholder="Ex: ecocycle@gmail.com" 
                    v-model="email" 
                    class="input"
                />
            </div>
            <div>
                <label for="password">Senha</label>
                <input 
                    type="text" 
                    placeholder="*******" 
                    v-model="password" 
                    class="input"
                />
            </div>
            <img 
                src="../assets/imgs/olho-aberto.png" 
                alt="Olho" 
                class="olho"
            />
            <button type="submit" @click="fazerLogin" class="btn-entrar">
                Entrar
            </button>
        </form>
    </div>
</template>

<style scoped>
    .login {
        padding: 20px;
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
        width: 90%;
        display: flex;
        border: 1px solid #000;
        border-radius: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;
        width: 90%;
    }

    .input {
        padding-left: 12px;
        height: 35px;
        width: 95%;
        background-color: #D9D9D9;
        border: none;
        border-radius: 15px;
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