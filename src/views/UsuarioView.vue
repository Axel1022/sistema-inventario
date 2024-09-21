<template>
  <div class="container">
    <h1 class="text-center m-5">Usuarios</h1>
    <a href="/add-user" class="btn btn-success my-3 float-end"> + Usuario </a>
    <tabla />
  </div>
</template>

<script setup lang="ts">
import tabla from "@/components/usuarioComponents/tabla.vue";
</script>

<style scoped></style>
