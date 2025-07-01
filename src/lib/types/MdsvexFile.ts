import type { SvelteComponent } from "svelte";

export type MdsvexFile = {
    default: SvelteComponent;
    metadata: Record<string, string>;
}