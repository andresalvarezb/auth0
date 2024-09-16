<template>
    <h1>Home</h1>
    <h2 v-if="user">Welcome, {{ user }}</h2>
    <button @click="logout">Log out</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const user = ref(null);
const router = useRouter();

async function fetchUser() {
    try {
        const response = await fetch('http://localhost:3000/auth/user', { withCredentials: true })
        console.log(response);
        
        // user.value = 
    } catch (error) {
        console.log('Error fetching user:', error);
        router.push("/");
    }
}

const logout = async () => {
    await fetch('http://localhost:3000/auth/logout', { withCredentials: true })
    router.push("/");
};

onMounted(fetchUser)
</script>
