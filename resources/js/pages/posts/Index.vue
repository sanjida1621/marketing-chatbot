<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3'
import AppHeaderLayout from '@/layouts/app/AppHeaderLayout.vue'
import { type BreadcrumbItem } from '@/types'
import FloatingChat from '@/components/FloatingChat.vue'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
]

const props = defineProps<{
    posts: Array<any>,
    isManager: boolean,
    userId: number
}>()

const approvePost = (id: string) => {
    router.post(`/posts/${id}/approve`)
}

const editPost = (id: string) => {
    router.visit(`/posts/${id}/edit`)
}

const deletePost = (id: string) => {
    router.delete(`/posts/${id}`)
}
</script>


<template>
    <Head title="Posts" />

    <AppHeaderLayout :breadcrumbs="breadcrumbs">

        <div class="p-6">
            <h1 class="text-2xl font-bold mb-6">Posts</h1>

            <div class="overflow-x-auto">
                <table class="w-full border">
                    <thead>
                        <tr class="bg-gray-100 text-xs text-gray-700">
                            <th class="p-2 text-left w-28">Image</th>
                            <th class="p-2 text-left min-w-40">Caption</th>
                            <th class="p-2 text-left w-24">Platform(s)</th>
                            <th class="p-2 text-left w-32">Scheduled</th>
                            <th class="p-2 text-center w-20">Status</th>
                            <th class="p-2 text-center w-24">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="post in posts" :key="post.id" class="border-t">
                            <td class="p-2 w-28">
                                <div class="h-16 w-24 overflow-hidden rounded bg-gray-100">
                                    <img
                                        v-if="post.assets && JSON.parse(post.assets)?.[0]"
                                        :src="JSON.parse(post.assets)[0]"
                                        alt=""
                                        class="h-full w-full object-cover"
                                    />
                                    <div v-else class="flex h-full items-center justify-center text-xs text-gray-400">
                                        No image
                                    </div>
                                </div>
                            </td>

                            <td class="p-2 min-w-40">
                                <div class="text-xs font-medium text-gray-900 break-words line-clamp-3">
                                    {{ post.copy }}
                                </div>
                            </td>

                            <td class="p-2 w-24 text-xs text-gray-600">
                                <div v-if="post.platforms && post.platforms.length" class="break-words">
                                    {{ post.platforms.join(', ') }}
                                </div>
                                <div v-else class="text-gray-400">—</div>
                            </td>

                            <td class="p-2 w-32 text-xs text-gray-600">
                                <div v-if="post.scheduled_time" class="space-y-1">
                                    <div>{{ new Date(post.scheduled_time).toLocaleDateString() }}</div>
                                    <div>{{ new Date(post.scheduled_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</div>
                                </div>
                                <div v-else class="text-gray-400">Not scheduled</div>
                            </td>

                            <td class="p-2 w-20 text-center">
                                <span class="inline-block rounded px-1.5 py-0.5 text-xs font-medium"
                                    :class="{
                                        'bg-yellow-100 text-yellow-800': post.status === 'pending' || post.status === 'pending_approval',
                                        'bg-green-100 text-green-800': post.status === 'published',
                                        'bg-gray-100 text-gray-800': post.status === 'draft'
                                    }"
                                >
                                    {{ post.status }}
                                </span>
                            </td>

                            <td class="p-2 w-24 text-center space-x-1">
                                <button
                                    v-if="isManager && (post.status === 'pending' || post.status === 'pending_approval')"
                                    @click="approvePost(post.id)"
                                    class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                                >
                                    Approve
                                </button>

                                <button
                                    v-if="!isManager && (post.status === 'draft' || post.status === 'pending')"
                                    @click="editPost(post.id)"
                                    class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <FloatingChat v-if="!isManager" :userId="userId" />
    </AppHeaderLayout>
</template>