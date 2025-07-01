import type { MdsvexFile } from "$lib/types/MdsvexFile";
import type { Project } from "$lib/types/Project";

export async function load() {
    // Grabs all markdown files from the projects path and stores them as a glob
    const paths = import.meta.glob(`/src/projects/*.md`);

    // Parses through the glob of files and creates Project objects from each one
    const promises = Object.entries(paths).map(([path, resolver]) =>
        resolver().then(
            (project) => 
            ({
                slug: path.split('/').at(-1)?.replace('.md', ''),
                ...(project as unknown as MdsvexFile).metadata
            } as Project)
        )
    );

    // Awaits all the projects to be loaded in
    const projects = await Promise.all(promises);
    
    // Returns the newly loaded projects and passes it to the landing page!
    return { projects };
}