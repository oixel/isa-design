import type { MdsvexFile } from '$lib/types/MdsvexFile.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
    return [
        { slug: 'bigbuilding' },
        { slug: 'floridalandscape' },
        { slug: 'towers' },
        // Add names of all projects in src/projects/*.md here
    ];
}

// 
function findMatch(pageSlug: string, paths: Record<string, () => Promise<unknown>>) {
    for (const [path, resolver] of Object.entries(paths)) {
        const entrySlug = path.split('/').at(-1)?.replace('.md', '');
        if (entrySlug == pageSlug) {
            return {
                path,
                resolver: resolver as unknown as Promise<MdsvexFile>
            };
        }
    }
}

export async function load({ params }) {
    const paths = import.meta.glob("/src/projects/*.md");

    const match = findMatch(params.slug, paths);

    const project = await match?.resolver?.();

    if (!project) {
        error(404, 'This project does not exist!');
    }

    return {
        content: project.default,
        metadata: project.metadata
    };
}