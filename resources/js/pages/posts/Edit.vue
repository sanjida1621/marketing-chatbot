<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3'
import AppHeaderLayout from '@/layouts/app/AppHeaderLayout.vue'
import { type BreadcrumbItem } from '@/types'
import { computed } from 'vue'

interface Post {
    id: string
    copy: string
    platforms: string[] | null
    scheduled_time: string | null
    assets: string[] | null
    status: string
    created_at: string
}

const props = defineProps<{
    post: Post
}>()

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
    {
        title: 'Edit',
        href: '#',
    },
]

// Initialize form with post data
function parseAssetsUrl(assets: any): string {
    if (!assets) return ''
    
    // If it's a JSON string, parse it
    if (typeof assets === 'string') {
        try {
            const parsed = JSON.parse(assets)
            return Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : ''
        } catch {
            // If it's already a plain URL string
            return assets
        }
    }
    
    // If it's already an array
    if (Array.isArray(assets)) {
        return assets.length > 0 ? assets[0] : ''
    }
    
    return ''
}

const form = useForm({
    copy: props.post.copy || '',
    platforms: props.post.platforms || [],
    scheduled_time: formatDateTimeForInput(props.post.scheduled_time),
    assets: parseAssetsUrl(props.post.assets),
})

// Form state
const platformOptions = ['facebook', 'linkedin']

function formatDateTimeForInput(dateString: string | null): string {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toISOString().slice(0, 16)
}

function togglePlatform(platform: string) {
    const index = form.platforms.indexOf(platform)
    if (index > -1) {
        form.platforms.splice(index, 1)
    } else {
        form.platforms.push(platform)
    }
}

const canSubmit = computed(() => {
    return form.copy.trim().length > 0 && form.platforms.length > 0
})

function submit() {
    form.patch(`/posts/${props.post.id}`, {
        preserveScroll: true,
    })
}
</script>

<template>
    <Head title="Edit Post" />

    <AppHeaderLayout :breadcrumbs="breadcrumbs">
        <div class="p-6 max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold mb-8">Edit Post</h1>

            <form @submit.prevent="submit" class="space-y-8">
                <!-- Copy/Caption Section -->
                <div class="space-y-3">
                    <label for="copy" class="block text-sm font-medium text-gray-900">
                        Caption <span class="text-red-500">*</span>
                    </label>
                    <textarea
                        id="copy"
                        v-model="form.copy"
                        rows="6"
                        placeholder="Write your post caption here..."
                        class="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <p class="text-xs text-gray-500">
                        {{ form.copy.length }} / 5000 characters
                    </p>
                    <div v-if="form.errors.copy" class="text-sm text-red-600">
                        {{ form.errors.copy }}
                    </div>
                </div>

                <!-- Platforms Section -->
                <div class="space-y-3">
                    <label class="block text-sm font-medium text-gray-900">
                        Platforms <span class="text-red-500">*</span>
                    </label>
                    <div class="flex gap-4">
                        <div
                            v-for="platform in platformOptions"
                            :key="platform"
                            class="flex items-center"
                        >
                            <input
                                :id="`platform-${platform}`"
                                type="checkbox"
                                :checked="form.platforms.includes(platform)"
                                @change="togglePlatform(platform)"
                                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                                :for="`platform-${platform}`"
                                class="ml-3 text-sm font-medium text-gray-900 capitalize cursor-pointer"
                            >
                                {{ platform }}
                            </label>
                        </div>
                    </div>
                    <div v-if="form.errors.platforms" class="text-sm text-red-600">
                        {{ form.errors.platforms }}
                    </div>
                </div>

                <!-- Scheduled Time Section -->
                <div class="space-y-3">
                    <label for="scheduled_time" class="block text-sm font-medium text-gray-900">
                        Scheduled Time
                    </label>
                    <input
                        id="scheduled_time"
                        v-model="form.scheduled_time"
                        type="datetime-local"
                        class="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <div v-if="form.errors.scheduled_time" class="text-sm text-red-600">
                        {{ form.errors.scheduled_time }}
                    </div>
                </div>

                <!-- Assets Section -->
                <div class="space-y-3">
                    <label for="assets" class="block text-sm font-medium text-gray-900">
                        Image URL
                    </label>

                    <!-- Image Preview -->
                    <div v-if="form.assets" class="mb-4">
                        <div class="w-48 h-48 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                            <img
                                :src="form.assets"
                                alt="Preview"
                                class="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <!-- URL Input -->
                    <input
                        id="assets"
                        v-model="form.assets"
                        type="url"
                        placeholder="Paste image URL..."
                        class="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                    <div v-if="form.errors.assets" class="text-sm text-red-600">
                        {{ form.errors.assets }}
                    </div>
                </div>

                <!-- Status Info -->
                <div class="rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <p class="text-sm font-medium text-blue-900">
                        Status: <span class="capitalize font-semibold">{{ post.status }}</span>
                    </p>
                    <p class="text-xs text-blue-700 mt-1">
                        Created on {{ new Date(post.created_at).toLocaleString() }}
                    </p>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3 pt-6 border-t">
                    <button
                        type="button"
                        @click="$router.visit('/posts')"
                        class="rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        :disabled="form.processing || !canSubmit"
                        class="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <span v-if="form.processing">Saving...</span>
                        <span v-else>Save Changes</span>
                    </button>
                </div>
            </form>
        </div>
    </AppHeaderLayout>
</template>
