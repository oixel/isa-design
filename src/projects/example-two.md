---
title: Tower Project
description: Project example two.
thumbnail: https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=
date: '2025-07-03'
---

<script>
    import ImageTile from '$lib/components/ImageTile.svelte';
</script>

<ImageTile src="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=" alt="Skyscrapers" />

[This is where another project would go]

<ImageTile src="/src/assets/images/TestImage.jpg" alt="A really poor quality image of the side of a skyscraper" />

This is a great example that you can not only import images from the internet, but also from the assets folder! Super cool! Now let us test whethere there is a limit for the line.
<br />
It does not seem that there is... I guess nothing is stopping the freedom of word in this domain! Wah hoo!<br /> Does that work?

<br /> Yup! It does!

<style>
    /* 
        NOTE: styling has to be done manually because tailwind overwrites everything...
    
        Alternatively, create a tailwind prose file and import it into markdown files
    */
</style>