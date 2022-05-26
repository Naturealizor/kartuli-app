<script>
	import Icon from 'svelte-awesome';
	import chevronLeft from 'svelte-awesome/icons/chevronLeft';
	import chevronRight from 'svelte-awesome/icons/chevronRight';
	import { onMount } from 'svelte';

	let Carousel; //for saving Carousel component class
	let carousel; // let carousel; for calling methods of the carousel instance
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	const handleNextClick = () => {
		carousel.goToNext();
	};

	const handlePrevClick = () => {
		carousel.goToPrev();
	};
</script>

<div class="bg-white px-16 items-end;">
	<h2 class="centeredSectionTitle">portfolio selections</h2>

	<div class="flex">
		<svelte:component
			this={Carousel}
			bind:this={carousel}
			particlesToShow={5}
			particlesToScroll={1}
		>
			<div class="prodCard" style="padding-left: 25px;">
				<img class="prodImg" src="../images/carouselArtisan.png" alt="Artisan" />
				<div class="prodDescription">
					<h4>Artisan</h4>
				</div>
			</div>

			<div class="prodCard" style="align-self: end;">
				<img class="prodImg" src="../images/KARTULI_RESERVE.png" alt="Artisan" />
				<div class="prodDescription">
					<h4>Premium</h4>
				</div>
			</div>
			<div class="prodCard" style="align-self: end;">
				<img class="prodImg" src="../images/vodka plain bottle 2 2.png" alt="Artisan" />
				<div class="prodDescription">
					<h4>Flavored</h4>
				</div>
			</div>
			<div class="prodCard" style="align-self: end;">
				<img class="prodImg" src="../images/Frame_860.png" alt="Artisan" />
				<div class="prodDescription">
					<h4>International</h4>
				</div>
			</div>
			<div class="prodCard" style="align-self: end;">
				<img class="prodImg" src="../images/Group 672.png" alt="Artisan" />
				<div class="prodDescription">
					<h4>Brandy</h4>
				</div>
			</div>
			<div class="prodCard" style="align-self: end;">
				<img class="prodImg" src="../images/Frame 860-1.png" alt="Artisan" />
				<div class="prodDescription">
					<h4>Liqueurs</h4>
				</div>
			</div>
		</svelte:component>

		<button on:click={handlePrevClick} />
		<button on:click={handleNextClick} />
	</div>
</div>

<style lang="scss">
	.prodCard {
		padding-bottom: 3em;
	}

	.prodImg {
		margin: 0 auto;
	}

	.prodDescription {
		font-family: 'Futura';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 19px;
		text-align: center;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #c88f34;
		padding-top: 1rem;
	}

	.prodCard:hover {
		transform: scale(1.1);
	}
	.centeredSectionTitle {
		text-align: center;
		color: #c88f34;
		padding-top: 25px;
		padding-bottom: 15px;
		text-transform: uppercase;
		font-family: 'Baskerville';
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 37px;
		letter-spacing: 0.05em;
	}
</style>
