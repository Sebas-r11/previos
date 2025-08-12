<template>
    <div class="mb-4">
        <label :for="inputName" class="block text-sm font-medium">{{ inputLabel }}</label>
        <input :type="inputType" :name="inputName" :id="inputName" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" class="w-full px-3 py-2 border rounded" />
    </div>
</template>

<script setup>
defineProps({
    inputLabel: String,
    inputName: String,
    inputType: { type: String, default: 'text' },
    placeholder: String,
    modelValue: [String, Number]
})
defineEmits(['update:modelValue'])
</script>

