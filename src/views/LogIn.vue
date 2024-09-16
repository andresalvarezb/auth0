<template>
    <div class="login-container">
        <h2>Login</h2>
        <div class="buttons">
            <!-- <button @click="loginWithGoogle">Login with Google</button> -->
            <button @click="loginWithFacebook">Login with Facebook</button>
            <button @click="loginWithDiscord">Login with Discord</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Reactive state
const errorMessage = ref("");

// Login with Google
// const loginWithGoogle = async () => {
//     window.open('http://localhost:3000/auth/google', '_self')
//     // code
// };

// Login with Facebook
const loginWithFacebook = async () => {
    router.push('/home')
    // code
};

// Redirect to Discord login page (OAuth2)
const loginWithDiscord = () => {
    router.push('/home')
    // code
};
</script>

<style scoped>
.login-container {
    text-align: center;
}

.buttons {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 300px;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
}
</style>
