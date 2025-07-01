import { json } from "@sveltejs/kit";
import type { Project } from "$lib/types/Project";

async function getProjects() {
    const projects: Project[] = [];

    const paths = import.meta.glob('/src/projects/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path];
        
        // Generate the project's slug based on it's file path in projects folder
        const slug: string | undefined = path.split('/').at(-1)?.replace('.md', '');
        
        
        // Only grab project file if it has content, metadata, and proper path in projects folder
        if (file && typeof file === 'object' && slug && 'metadata' in file) {
            const metadata = file.metadata as Omit<Project, 'slug'>
            const project = {...metadata, slug} satisfies Project
            projects.push(project)
        }
    }
    
    return projects;
}

export async function GET() {
    const projects = await getProjects();
    return json(projects);
}