<script>
    import Nav from './navigation.svelte';
    import Footer from './footer.svelte';
    import {breakpoint, platform} from './MediaQuery.svelte';
</script>

<Nav />
<main>
    {#if $breakpoint == 'xs'}
<h1>XS</h1>
{/if}

{#if $platform == 'desktop'}
<h1>DESKTOP</h1>
{:else}
<h1>MOBILE</h1>
{/if}
</main>
<Footer />

<style>
    h1 {
        color: white;
    }
</style>