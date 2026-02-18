<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { MessageCircle, X } from 'lucide-vue-next'

const isOpen = ref(false)
const message = ref('')
const hasUserMessaged = ref(false)
const messages = ref([
    { type: 'bot', 
    text: 'Please follow this format for creating a post:\n\nCaption: Your post text here\nPlatforms: facebook, linkedin\nScheduled Date: 16 February 2026\nScheduled Time: 9 AM\nImage Url: https://example.com/photo.jpg'
}
])

const props = defineProps<{
    userId: number
}>()

console.log("FloatingChat received userId:", props.userId)

const toggleChat = () => {
    isOpen.value = !isOpen.value
}

const sendMessage = async () => {
    if (!message.value.trim()) return

    // Clear sample message on first user message
    if (!hasUserMessaged.value) {
        messages.value = []
        hasUserMessaged.value = true
    }

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
                body: JSON.stringify({
                    message: userMessage,
                    user_id: props.userId
                }),
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
            class="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors"
            :title="isOpen ? 'Close chat' : 'Open chat'"
        >
            <MessageCircle v-if="!isOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
        </button>
    </div>

    <!-- Chat Box -->
    <div
        v-if="isOpen"
        class="fixed bottom-24 right-6 w-96 bg-white shadow-xl rounded-xl flex flex-col z-50"
        style="height: 550px;"
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
                    'px-3 py-2 rounded-lg max-w-[80%] whitespace-pre-wrap',
                    msg.type === 'user'
                        ? 'bg-blue-600 text-white ml-auto text-sm'
                        : 'bg-gray-200 text-gray-800 text-xs'
                ]"
            >
                {{ msg.text }}
            </div>
        </div>

        <!-- Input -->
        <div class="border-t p-3 flex flex-col gap-2">
            <textarea
                v-model="message"
                class="flex-1 border rounded-lg px-3 py-2 outline-none resize-none min-h-24 text-sm"
                placeholder="Write a message..."
            />
            <div class="flex gap-2 items-center justify-end">
                <button
                    @click="sendMessage"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                    Send
                </button>
            </div>
        </div>
    </div>
</template>