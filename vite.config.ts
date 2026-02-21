import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
export default defineConfig(async () => {
    const plugins: any[] = [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ];

    // Only load wayfinder when not on Vercel to avoid requiring PHP during Vercel builds
    if (!process.env.VERCEL) {
        const { wayfinder } = await import('@laravel/vite-plugin-wayfinder');
        plugins.push(
            wayfinder({
                formVariants: true,
            })
        );
    }

    return {
        plugins: plugins.filter(Boolean),
    };
});
