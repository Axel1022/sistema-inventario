<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="conatiner-flu">
            <a style="text-decoration: none" href="/">
              <h3 class="navbar-brand m-2">Sys Inventario</h3>
            </a>
          </div>
          <div>
            <RouterLink exact-active-class="activo" to="/">Home</RouterLink>
          </div>
          <div>
            <RouterLink exact-active-class="activo" to="/categorias"
              >Categorias</RouterLink
            >
          </div>
          <div>
            <RouterLink exact-active-class="activo" to="/productos"
              >Productos</RouterLink
            >
          </div>
          <div>
            <RouterLink class="me-5" exact-active-class="activo" to="/usuarios"
              >Usuario</RouterLink
            >
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.activo {
  color: black;
}
</style>
