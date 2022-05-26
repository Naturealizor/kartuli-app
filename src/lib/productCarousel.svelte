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

<div class="bg-white pl-6 ">
	<h2 class="centeredSectionTitle">portfolio selections</h2>

	<svelte:component this={Carousel} bind:this={carousel} particlesToShow={4} particlesToScroll={1}>
		<div class="prodCard">
			<img class="prodImg" src="../images/elite_2.png" alt="Artisan" />
			<div class="prodDescription">
				<h4>Artisan</h4>
			</div>
		</div>

		<div class="prodCard">
			<img class="prodImg" src="../images/KARTULI_RESERVE.png" alt="Artisan" />
			<div class="prodDescription">
				<h4 style="padding-left: 10px;">Premium</h4>
			</div>
		</div>
		<div class="prodCard">
			<img class="prodImg" src="../images/vodka plain bottle 2 2.png" alt="Artisan" />
			<div class="prodDescription">
				<h4>Flavored</h4>
			</div>
		</div>
		<div class="prodCard">
			<img
				style="padding-left: 10px;"
				class="prodImg"
				src="../images/Frame_860.png"
				alt="Artisan"
			/>
			<div class="prodDescription">
				<h4>International</h4>
			</div>
		</div>
		<div class="prodCard">
			<img class="prodImg" src="../images/Group 672.png" alt="Artisan" />
			<div class="prodDescription">
				<h4 style="padding-left: 25px;">Brandy</h4>
			</div>
		</div>
		<div class="prodCard">
			<img class="prodImg" src="../images/Frame 860-1.png" alt="Artisan" />
			<div class="prodDescription">
				<h4 style="padding-left: 10px;">Liqueurs</h4>
			</div>
		</div>
	</svelte:component>

	<button on:click={handlePrevClick}>back</button>
	<button on:click={handleNextClick}>next</button>
</div>

<style lang="scss">
	.prodCard {
		width: 12%;
		padding-bottom: 3em;
	}

	.prodDescription {
		font-family: 'Futura';
		font-style: normal;
		font-weight: 500;
		font-size: 14.542px;
		line-height: 19px;
		text-align: start;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #c88f34;
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
