<script setup lang="ts">
/**
 * TechTag — аккуратный тег технологии: без рамок, с тенью и скруглением.
 * Акцентный цвет emerald (меняется в ResumePage.vue). Добавить тег = добавить строку в resumeData.
 */
defineProps<{
  label: string;
}>();
</script>

<template>
  <span
    class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm"
  >
    {{ label }}
  </span>
</template>
