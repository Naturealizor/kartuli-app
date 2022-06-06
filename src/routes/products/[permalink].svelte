<script context="module">
	import { client } from '$lib/commerce.js';

	export async function params({ url }) {
		const { permalink } = url?.params;

		const product = await client.products.retrieve(permalink, {
			type: 'permalink'
		});

		return {
			props: {
				product
			}
		};
	}
</script>

<script>
	export let product;
</script>

<h1>{product.name}</h1>

<p>{product.price.formatted_with_symbol}</p>
