import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
export default defineConfig(async ({ mode }) => {
    const isProduction = mode === 'production';

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

    // ONLY load wayfinder if we are NOT in production/Vercel
    // This prevents the 'php: command not found' error during Vercel builds
    if (!isProduction && !process.env.VERCEL) {
        try {
            const { wayfinder } = await import('@laravel/vite-plugin-wayfinder');
            plugins.push(
                wayfinder({
                    formVariants: true,
                })
            );
        } catch (e) {
            console.warn('Wayfinder plugin not found or failed to load.');
        }
    }

    return {
        plugins: plugins.filter(Boolean),
    };
});