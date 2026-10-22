<script setup lang="ts">
/**
 * ProjectHighlight — акцентный блок ключевого проекта
 * «Система согласования заявок»: суть (статусы / комментарии / история / роли) + результаты.
 * Данные из resumeData.project. Акцентную палитру можно сменить в ResumePage.vue.
 */
import type { ProjectHighlightData } from '@/data/resumeData';
import TechTag from './TechTag.vue';

defineProps<{
  project: ProjectHighlightData;
}>();
</script>

<template>
  <section class="rounded-xl bg-slate-50 p-6 shadow-sm md:p-8">
    <div class="mb-6">
      <p class="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
        Свой проект
      </p>
      <h3 class="text-xl font-semibold text-slate-900 md:text-2xl">{{ project.title }}</h3>
      <p class="mt-1 text-sm text-slate-600">{{ project.subtitle }}</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <!-- Суть проекта -->
      <div>
        <h4 class="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Суть</h4>
        <ul class="space-y-2.5">
          <li v-for="(point, i) in project.summary" :key="i" class="flex gap-2.5 text-sm text-slate-700">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>

      <!-- Результаты -->
      <div class="rounded-xl bg-white p-4 shadow-sm">
        <h4 class="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Результат</h4>
        <ul class="space-y-2.5">
          <li v-for="(point, i) in project.results" :key="i" class="flex gap-2.5 text-sm text-slate-700">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Стек проекта -->
    <div class="mt-6 flex flex-wrap gap-2" v-if="project.stack.length">
      <TechTag v-for="tech in project.stack" :key="tech" :label="tech" />
    </div>
  </section>
</template>
