<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import { type BreadcrumbItem } from '@/types'
import FloatingChat from '@/components/FloatingChat.vue'


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
]

defineProps<{
    posts: Array<any>,
    isManager: boolean,
}>()

const approvePost = (id: string) => {
    router.post(`/posts/${id}/approve`)
}

const deletePost = (id: string) => {
    router.delete(`/posts/${id}`)
}
</script>


<template>
    <Head title="Posts" />

    <AppLayout :breadcrumbs="breadcrumbs">

        <div class="p-6">
            <h1 class="text-2xl font-bold mb-6">Posts</h1>

            <table class="w-full border">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="p-2 text-left">Copy</th>
                        <th class="p-2 text-center">Status</th>
                        <th class="p-2 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="post in posts" :key="post.id" class="border-t">
                        <td class="p-2">{{ post.copy }}</td>
                        <td class="p-2 text-center">{{ post.status }}</td>

                        <td class="p-2 text-center space-x-2">
                            <button
                                v-if="isManager && post.status === 'pending_confirmation'"
                                @click="approvePost(post.id)"
                                class="bg-green-500 text-white px-3 py-1 rounded"
                            >
                                Approve
                            </button>

                            <button
                                v-if="!isManager && post.status === 'pending_confirmation'"
                                class="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                                Edit
                            </button>

                            <button
                                v-if="!isManager && post.status === 'pending_confirmation'"
                                @click="deletePost(post.id)"
                                class="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <FloatingChat />

    </AppLayout>
</template>
