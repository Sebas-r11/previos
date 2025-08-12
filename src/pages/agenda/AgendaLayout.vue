<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-800 text-white px-6 py-4">
      <RouterLink to="/reproducer" class="flex items-center gap-2">
        <h1 class="text-xl font-bold">📖 Gestion de bibliotecas Registro</h1>
      </RouterLink>
    </header>

    <nav class="bg-white shadow px-6 py-2 flex gap-4">
      <RouterLink
        to="/reproducer"
        class="text-blue-700 hover:underline"
        :class="{ 'font-bold': $route.path === '/reproducers' }"
      >
        📋 Lista
      </RouterLink>
      <RouterLink
        to="/reproducer/register"
        class="text-blue-700 hover:underline"
        :class="{ 'font-bold': $route.path === '/reproducer/register' }"
      >
        ➕ Registrar
      </RouterLink>
    </nav>

    <main class="p-6">
      <!-- Aquí se cargan las vistas hijas -->
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
</script>
