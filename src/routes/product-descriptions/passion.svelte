<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
	import SectionTwo from '$lib/description-section-right.svelte';
	import Carousel from '$lib/productCarousel.svelte';
	import Btm from './product-description-sectionbtm.svelte';

	let drinkName = 'passion';
</script>

<Nav />
<section class="sectionTop">
	<div class="sectionContent">
		<h1>{drinkName}</h1>
		<h2>product description</h2>
		<p>
			Chacha is far too more than other alcoholic drinks. Chacha for us is above all the other kinds
			of alcoholic beverages, because we get the very product in the country, acknowledged as a
			homeland of wine and vine. We use a unique method of distillation, the mysterious part of
			which gives us possibilities of inimitable unification of the Georgian antique tradition and
			contemporaneity precisely in our product.
		</p>
		<div class="abvInfo-Wrapper">
			<div class="abv-col-left">
				<h3>abv</h3>
				<h3>calories</h3>
				<h3>available sizes</h3>
			</div>
			<div class="abv-col-right">
				<p>40%</p>
				<p>70 per 10g alcohol</p>
				<div class="abvSizes">
					<p>1.75 ml</p>
					<p>750 ml</p>
					<p>1.75 ml</p>
				</div>
			</div>
		</div>
	</div>
</section>
<SectionTwo />
<Carousel />
<Btm />
<Footer />

<style>
	h1,
	h2 {
		text-transform: uppercase;
	}
	h1 {
		font-family: 'Baskerville';
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 37px;
		letter-spacing: 0.35em;
		text-transform: uppercase;
		color: #c88f34;
	}

	h2,
	h3 {
		font-family: 'Futura';
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 21px;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		margin-top: 6em;
		color: #c88f34;
	}

	h3 {
		letter-spacing: 0.05em;
		font-size: 16px;
		margin-top: 1em;
	}

	p {
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 200;
		font-size: 18px;
		line-height: 140.4%;
		letter-spacing: 0.15em;
		margin-top: 1em;
		color: #ffffff;
	}

	.sectionTop {
		/* need to rename the files that are like this */
		background-image: url(./images/productDescription_Passion_TopSection.jpg);
		display: flex;
		width: 100%;
		height: auto;
		object-fit: cover;
		object-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: scroll;
	}

	.sectionContent {
		margin: 8em 8em;
		width: 40vw;
	}
	.abvInfo-Wrapper {
		display: grid;
		grid-template-columns: 0.6fr 1fr;
	}
	.abvSizes {
		display: grid;
		grid-template-columns: 0.25fr 0.25fr 0.25fr;
	}
	.abvInfo-Wrapper p {
		margin-block-start: 0;
		margin-block-end: 1em;
	}
</style>
