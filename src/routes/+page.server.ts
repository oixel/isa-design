import { getMarkdown } from "../api/getMarkdown";

export async function load() {
    return await getMarkdown('portfolio');
}