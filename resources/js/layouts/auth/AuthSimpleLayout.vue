<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { home } from '@/routes';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <section class="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
        <div class="w-full max-w-md">
            <div class="text-center mb-6">
                <h1 class="text-2xl font-semibold leading-tight text-gray-900">{{ title }}</h1>
                <p class="mt-2 text-sm text-gray-500">{{ description }}</p>
            </div>

            <div class="bg-white shadow-sm rounded-lg p-8">
                <slot />
            </div>

            <p class="text-center text-sm text-gray-500 mt-4">&copy; <span class="whitespace-nowrap">Marketing Chatbot</span></p>
        </div>
    </section>
</template>
