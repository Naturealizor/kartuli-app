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
<section>
	<h2 class="text-kartuli-orange uppercase font-futura text-center mt-8">select a category</h2>
	<h1 class="text-white uppercase font-basker text-center text-3xl">online shop</h1>
	<ul class="flex flex-row-reverse  text-white gap-3 justify-center my-6">
		{#each categories as category}
			<li class="hover:text-kartuli-orange">
				<a rel="prefetch" href="/categories/{category.slug}">{category.name}</a>
			</li>
		{/each}
	</ul>
</section>

<ul class="text-white">
	{#each products as product}
		<li>
			<a rel="prefetch" href="/product/{product.permalink}">{product.name}</a>
		</li>
	{/each}
</ul>
<Footer />
