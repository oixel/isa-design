export function load({ params }) {
    const name : string = params.projectName.replace('-', ' ');
    return { name };
}