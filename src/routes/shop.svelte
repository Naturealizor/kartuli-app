<script context="module">
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
	import { client } from '$lib/commerce.js';

	export async function load() {
		const { data: categories } = await client.categories.list();
		const { data: products } = await client.products.list();

		return {
			props: {
				categories,
				products
			}
		};
	}
</script>

<script>
	export let categories;
	export let products;
</script>

<Nav />
<ul>
	{#each categories as category}
		<li>
			<a rel="prefetch" href="/categories/{category.slug}">{category.name}</a>
		</li>
	{/each}
</ul>

<ul>
	{#each products as product}
		<li>
			<a rel="prefetch" href="/product/{product.permalink}">{product.name}</a>
		</li>
	{/each}
</ul>
<Footer />
