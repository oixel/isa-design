import type { Project } from "$lib/types/Project";

export async function load({ fetch }) {
    const response = await fetch('/api/projects');
    const projects: Project[] = await response.json();
    console.log(typeof projects)
    return { projects };
}