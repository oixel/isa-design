import type { MdsvexFile } from "$lib/types/MdsvexFile";
import type { Post } from "$lib/types/Post";

export async function getMarkdown(req: 'portfolio' | 'personal') {
    // 
    let paths: Record<string, () => Promise<unknown>>;

    // Grabs all markdown files from the requested path and stores them as a glob
    switch (req) {
        case 'portfolio':
            paths = import.meta.glob('/src/projects/*.md');
            break;
        case 'personal':
            paths = import.meta.glob('/src/personal/*.md');
            break;
    }

    // Parses through the glob of files and creates Post objects from each one
    const promises = Object.entries(paths).map(([path, resolver]) =>
        resolver().then(
            (post) => 
            ({
                slug: path.split('/').at(-1)?.replace('.md', ''),
                ...(post as unknown as MdsvexFile).metadata
            } as Post)
        )
    );

    // Waits for all the posts to be loaded in
    const posts: Array<Post> = await Promise.all(promises);

    // Sort the posts by date from newest to oldest
    posts.sort((postA, postB) => {
        if (postA.date > postB.date) return -1;
        else if (postA.date < postB.date) return 1;
        else return 0
    })
    
    // Returns the newly loaded posts and returns it to the requesting page!
    return { posts: posts };
}