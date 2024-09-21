<template>
  <div>
    <div class="card">
      <table class="table table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Rol</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
            <td>{{ index + 1 }}</td>
            <td>{{ usuario.name }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.rol }}</td>
            <td>
              <a style="text-decoration: none" href="#">
                <span class="icon"> 🟩 </span>
              </a>
              <a style="text-decoration: none" href="#">
                <span class="icon"> 🟥 </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { API } from "../../Const";
import type { IUsuario } from "../../Const";
import { onMounted, ref } from "vue";

const usuarios = ref<IUsuario[]>([]);

onMounted(async () => {
  try {
    const response = await fetch(`${API}/api/usuario`);
    // console.log(await response.json());
    usuarios.value = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped>
.icon {
  cursor: pointer;
}
</style>
