<template>
    <h1>Home</h1>
    <button @click="goLogIn">Go to Log in</button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goLogIn = async () => {
    router.push("/");
};
</script>
