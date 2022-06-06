<script context="module">
	import { client } from '$lib/commerce.js';

	export async function params({ url }) {
		const { slug } = url?.params;

		const category = await client.categories.retrieve(slug, {
			type: 'slug'
		});

		const { data: products } = await client.products.list({ category_slug: [slug] });

		return {
			props: {
				category,
				products
			}
		};
	}
</script>

<script>
	export let category;
	export let products;
</script>

<h1>{category.name}</h1>

<ul>
	{#each products as product}
		<li>
			<a rel="prefetch" href="/products/{product.permalink}">{product.name}</a>
		</li>
	{/each}
</ul>
