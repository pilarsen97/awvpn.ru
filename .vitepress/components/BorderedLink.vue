<template>
    <a data-v-29ec59c0="" class="VPLink link pager-link" :href="link">
        <span data-v-29ec59c0="" v-if="desc" class="desc">{{ desc }}</span>
        <span data-v-29ec59c0="" class="title">{{ title }}</span>
    </a>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

// Определяем свойства
const props = withDefaults(defineProps<{
    desc?: string;  // desc является необязательным
    title: string;
    link: string;
}>(), {
    title: 'TITLE',         // Стандартное значение для title
    link: '#'                      // Стандартное значение для link
});
</script>