<script>
	import Icon from 'svelte-awesome';
	import chevronLeft from 'svelte-awesome/icons/chevronLeft';
	import chevronRight from 'svelte-awesome/icons/chevronRight';
</script>

<!-- Each card needs to have an anchor for the navigation -->
<section class="portfolioSelection">
	<h2 class="centeredSectionTitle">portfolio selections</h2>
	<div class="carouselWrapper">
		<div class="prodCard">
			<img class="prodImg" src="./images/elite_2.png" alt="Artisan" />
			<div class="prodDescription">
				<h4>Artisan</h4>
			</div>
		</div>
		<div class="prodCard">
			<img class="prodImg" src="./images/KARTULI_RESERVE.png" alt="Artisan" />
			<div class="prodDescription">
				<h4 style="padding-left: 10px;">Premium</h4>
			</div>
		</div>
		<div class="prodCard">
			<img class="prodImg" src="./images/vodka plain bottle 2 2.png" alt="Artisan" />
			<div class="prodDescription">
				<h4>Flavored</h4>
			</div>
		</div>
		<div class="prodCard">
			<img style="padding-left: 10px;" class="prodImg" src="./images/Frame_860.png" alt="Artisan" />
			<div class="prodDescription">
				<h4>International</h4>
			</div>
		</div>
		<div class="prodCard">
			<img class="prodImg" src="./images/Group 672.png" alt="Artisan" />
			<div class="prodDescription">
				<h4 style="padding-left: 25px;">Brandy</h4>
			</div>
		</div>
		<div class="prodCard">
			<img class="prodImg" src="./images/Frame 860-1.png" alt="Artisan" />
			<div class="prodDescription">
				<h4 style="padding-left: 10px;">Liqueurs</h4>
			</div>
		</div>
	</div>
	<Icon
		data={chevronLeft}
		style="
		min-width: 50px;
		color: black;
		border: none;
		font-weight: 600;
		text-align: center;
		cursor: pointer;
		outline: none;
		position: absolute;
		left: 0;
		"
	/>
	<Icon
		data={chevronRight}
		style="margin-top: 5px;
		min-width: 50px;
		color: black;
		border: none;
		font-weight: 600;
		text-align: center;
		cursor: pointer;
		outline: none;
		position: absolute;
		right: 0;"
	/>
</section>

<style lang="scss">
	.portfolioSelection {
		background-color: white;
		height: 517px;
		width: 100%;
	}
	.carouselWrapper {
		width: 95%;
		height: 400px;
		display: flex;
		padding-bottom: 20px;
		// padding-top: 2em;
		margin: 3% 4%;
		align-items: flex-end;
		justify-content: space-evenly;
		.prodCard {
			width: 12%;
			padding-bottom: 2em;
		}
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
		transform: scale(1.2);
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
