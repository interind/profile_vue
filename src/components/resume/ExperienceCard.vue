<script setup lang="ts">
/**
 * ExperienceCard — карточка опыта работы.
 * Чёткое разделение: шапка (роль · компания · даты) → стек (TechTag) → достижения.
 * Данные позиции берутся из resumeData.experience. Добавить позицию = добавить объект в массив.
 */
import type { ExperienceItem } from '@/data/resumeData';
import TechTag from './TechTag.vue';

defineProps<{
  item: ExperienceItem;
}>();
</script>

<template>
  <article class="rounded-xl bg-white p-6 shadow-sm">
    <!-- Шапка: компания / роль / даты -->
    <header class="mb-4">
      <div class="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 class="text-lg font-semibold text-slate-900">{{ item.company }}</h3>
          <p class="mt-0.5 text-sm font-medium text-emerald-700">{{ item.role }}</p>
        </div>
        <span class="rounded-lg bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          {{ item.period }}
        </span>
      </div>
    </header>

    <!-- Стек позиции -->
    <div class="mb-4 flex flex-wrap gap-2" v-if="item.stack.length">
      <TechTag v-for="tech in item.stack" :key="tech" :label="tech" />
    </div>

    <!-- Достижения: действие → результат -->
    <ul class="space-y-2.5">
      <li v-for="(point, i) in item.achievements" :key="i" class="flex gap-2.5 text-sm text-slate-700">
        <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"></span>
        <span>{{ point }}</span>
      </li>
    </ul>
  </article>
</template>
