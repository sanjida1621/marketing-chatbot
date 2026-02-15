<script setup lang="ts">
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const message = ref('')
const messages = ref([
    { type: 'bot', text: 'Hello! How can I help with your marketing strategy today?' }
])

const toggleChat = () => {
    isOpen.value = !isOpen.value
}

const sendMessage = async () => {
    if (!message.value.trim()) return

    // Add user message to chat
    messages.value.push({ type: 'user', text: message.value })
    const userMessage = message.value
    message.value = ''

    await nextTick()

    try {
        const response = await fetch(
            'https://sanjida1264.app.n8n.cloud/webhook-test/marketing-chat',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }) // <-- only message
            }
        )

        const data = await response.json()

        messages.value.push({
            type: 'bot',
            text: data.reply || 'Thinking...'
        })
    } catch (error) {
        messages.value.push({
            type: 'bot',
            text: 'Error connecting to server.'
        })
    }
}
</script>

<template>
    <!-- Floating Button -->
    <div class="fixed bottom-6 right-6 z-50">
        <button
            @click="toggleChat"
            class="bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl"
        >
            💬
        </button>
    </div>

    <!-- Chat Box -->
    <div
        v-if="isOpen"
        class="fixed bottom-24 right-6 w-96 bg-white shadow-xl rounded-xl flex flex-col z-50"
        style="height: 500px;"
    >
        <!-- Header -->
        <div class="bg-blue-600 text-white p-3 rounded-t-xl font-semibold text-center">
            Marketing Assistant
        </div>

        <!-- Messages -->
        <div class="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            <div
                v-for="(msg, index) in messages"
                :key="index"
                :class="[
                    'px-3 py-2 rounded-lg max-w-[80%]',
                    msg.type === 'user'
                        ? 'bg-blue-600 text-white ml-auto'
                        : 'bg-gray-200 text-gray-800'
                ]"
            >
                {{ msg.text }}
            </div>
        </div>

        <!-- Input -->
        <div class="p-2 border-t flex gap-2">
            <input
                v-model="message"
                @keyup.enter="sendMessage"
                class="flex-1 border rounded-full px-3 py-1 outline-none"
                placeholder="Write a message..."
            />
            <button
                @click="sendMessage"
                class="bg-blue-600 text-white px-4 rounded-full"
            >
                Send
            </button>
        </div>
    </div>
</template>