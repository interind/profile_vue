<script setup lang="ts">
/**
 * ContactBadge — бейдж контакта: inline SVG иконка + подпись + ссылка.
 * Используется в шапке резюме (блок «Контакты»).
 * Новый тип контакта = добавить ветку в mapIcons + соответствующий item в resumeData.contacts.
 */
import type { ContactItem } from '@/data/resumeData';

defineProps<{
  item: ContactItem;
}>();

const mapIcons: Record<ContactItem['type'], string> = {
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.02 11.02 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.66.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
    <path d="M11.94 17.55l-.46 3.37c.6 0 .86-.26 1.17-.56l2.8-2.7 5.83 4.3c1.06.59 1.82.28 2.1-.99l3.8-17.9C26.83.64 25.9-.08 24.96.28L.82 9.6c-1.5.6-1.49 1.43-.25 1.8l5.36 1.68 12.4-7.83c.58-.39 1.11-.17.68.21l-10.05 9.08z"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};
</script>

<template>
  <a
    :href="item.href"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 shadow-sm transition-colors hover:bg-slate-100"
  >
    <!-- Иконка в акцентном круге -->
    <span
      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white"
      v-html="mapIcons[item.type]"
    ></span>
    <span class="flex min-w-0 flex-col">
      <span class="text-xs font-medium uppercase tracking-wide text-slate-500">{{ item.caption }}</span>
      <span class="truncate text-sm font-semibold text-slate-900">{{ item.label }}</span>
    </span>
  </a>
</template>
