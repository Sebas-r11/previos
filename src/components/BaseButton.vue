<template>
  <button @click="$emit('click')" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
    <slot />
  </button>
</template>
