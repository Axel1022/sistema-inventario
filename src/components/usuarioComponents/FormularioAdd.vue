<template>
  <div class="container shadow m-5 mx-auto">
    <div class="card-body">
      <form @submit.prevent="procesarForm" class="m-5 form">
        <h1 class="text-center mt-3">Agregar Usuario</h1>
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            class="input-control"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Donald Trump "
            v-model="formData.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            class="input-control"
            type="email"
            name="email"
            id="email"
            placeholder="ejemplo@example.com"
            v-model="formData.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="rol">Rol</label>
          <input
            class="input-control"
            type="text"
            name="rol"
            id="rol"
            placeholder="Rol"
            v-model="formData.rol"
            required
          />
        </div>
        <button :disabled="cargando" class="btn btn-success w-100 mb-3">
          Agregar
        </button>
        <a href="http://localhost:5173/usuarios" class="btn bs-body-color mb-3"
          >Cancelar</a
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { API } from "../../Const";
import type { IUsuario } from "../../Const";
import { useRouter } from "vue-router";
const router = useRouter();

const formData = reactive({
  name: "",
  email: "",
  rol: "",
});
const cargando = ref(false);
const procesarForm = async () => {
  cargando.value = true;
  const usuario = {
    name: formData.name,
    email: formData.email,
    password: "password",
    rol: formData.rol,
  };

  try {
    cargando.value = true;
    const response = await fetch(`${API}/api/usuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (response.status == 200) {
      router.back();
    } else alert("Ya existe un usuario con ese nombre");
    //Ya existe un usuario
    cargando.value = false;
  } catch (error) {}
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
}

.input-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.input-control:focus {
  border-color: #007bff;
  outline: none;
}

.form {
  display: flex;
  flex-direction: column;
}

.text-center {
  text-align: center;
}

.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.m-5 {
  margin: 20px;
}
</style>
