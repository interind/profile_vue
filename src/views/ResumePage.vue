<script setup lang="ts">
/**
 * ============================================================================
 * ResumePage.vue — страница резюме (CRM / Fullstack Developer)
 * ----------------------------------------------------------------------------
 * Структура секций (порядок важен — для HR «10–15 секунд»):
 *   1. Шапка: имя + позиция + фокус на CRM   → кто я и в чём фокус
 *   2. Контакты (ContactBadge)               → куда писать
 *   3. О себе (3–4 пункта конкретики)        → чем именно полезен
 *   4. Ключевой проект (согласование заявок) → главный кейс сразу виден
 *   5. Опыт работы (ExperienceCard)          → что делал и к каким результатам
 *   6. Технологии (сетка TechTag)            → стек для скилл-чека
 *
 * ВСЕ ТЕКСТЫ — В src/data/resumeData.ts. Данные дублированы ниже?
 * Нет: `resumeData` импортируется отсюда, правки делаются только в data-файле.
 * ============================================================================
 */
import ContactBadge from '@/components/resume/ContactBadge.vue';
import TechTag from '@/components/resume/TechTag.vue';
import ExperienceCard from '@/components/resume/ExperienceCard.vue';
import ProjectHighlight from '@/components/resume/ProjectHighlight.vue';
import { resumeData } from '@/data/resumeData';
import profile from "@/assets/img/profile.jpg";
</script>

<template>
  <!--
    Внешний контейнер: нейтральный фон, «воздух» между секциями.
    py-12 секциям, странице — max-w для читаемости на широких экранах.
  -->
  <div class="min-h-screen bg-white text-slate-700">
    <div class="mx-auto w-full max-w-5xl px-4 py-12 md:px-8 lg:px-12 lg:py-16">
      <!-- ═══════════════ 1. ШАПКА: КТО Я И ФОКУС ═══════════════ -->
      <header class="mb-10">
        <v-card
          :class="['flex-1-1-100', [{ 'mr-m-20': isMobile }]]"
          :max-width="isMobile ? '100%' : 300"
          rounded="0"
          variant="text"
        >
          <v-avatar class="img-br" color="grey" rounded="0" :size="isMobile ? '100%' : 300">
            <v-img :src="profile" cover />
          </v-avatar>
        </v-card>

        <h1 class="text-3xl font-bold text-slate-900 md:text-4xl">{{ resumeData.name }}</h1>
        <p class="mt-2 text-lg font-medium text-emerald-700">{{ resumeData.headline }}</p>
        <p class="mt-2 max-w-2xl text-sm text-slate-600">{{ resumeData.focus }}</p>
        <!-- Локация + график — визуальные индикаторы, чтобы не читать текст -->
        <div class="mt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
          <span class="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 shadow-sm">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>{{ resumeData.location }}
          </span>
        </div>
      </header>

      <!-- ═══════════════ 2. КОНТАКТЫ ═══════════════ -->
      <section class="mb-12">
        <h2 class="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">Контакты</h2>
        <!-- На мобильных — 1 колонка, на десктопе — 2–4 -->
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ContactBadge v-for="(c, i) in resumeData.contacts" :key="i" :item="c" />
        </div>
      </section>

      <!-- ═══════════════ 3. О СЕБЕ ═══════════════ -->
      <section class="mb-12">
        <h2 class="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">О себе</h2>
        <ul class="space-y-3">
          <li v-for="(point, i) in resumeData.about" :key="i" class="flex gap-3 text-sm text-slate-700">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </section>

      <!-- ═══════════════ 4. КЛЮЧЕВОЙ ПРОЕКТ ═══════════════ -->
      <section class="mb-12">
        <ProjectHighlight :project="resumeData.project" />
      </section>

      <!-- ═══════════════ 5. ОПЫТ РАБОТЫ ═══════════════ -->
      <section class="mb-12">
        <h2 class="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">Опыт работы</h2>
        <div class="grid gap-6">
          <ExperienceCard v-for="(job, i) in resumeData.experience" :key="i" :item="job" />
        </div>
      </section>

      <!-- ═══════════════ 6. ТЕХНОЛОГИИ ═══════════════ -->
      <section>
        <h2 class="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">Технологии</h2>
        <!-- Сетка: 1 колонка на мобильных, 2–3 на десктопе -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(group, i) in resumeData.skills"
            :key="i"
            class="bg-slate-50 p-5 rounded-xl shadow-sm"
          >
            <h3 class="mb-3 text-sm font-semibold text-slate-900">{{ group.title }}</h3>
            <div class="flex flex-wrap gap-2">
              <TechTag v-for="tech in group.items" :key="tech" :label="tech" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
