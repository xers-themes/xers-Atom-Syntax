<template>
	<div class="mini-movie">
		<div class="mini-movie__figure">
			<div
				class="mini-movie__poster"
				:style="posterImage"
			>
				<div class="mini-movie__rate">
					{{ rate }}
				</div>
			</div>
			<div class="mini-movie__states">
				<div
					v-if="heart"
					class="mini-movie__state | mini-movie__state--heart"
				>
					<icon name="heart" />
				</div>
				<div
					v-if="watched"
					class="mini-movie__state | mini-movie__state--watched"
				>
					<icon name="eye" />
				</div>
				<div
					v-if="later"
					class="mini-movie__state | mini-movie__state--later"
				>
					<icon name="flag" />
				</div>
			</div>
		</div>
		<div class="mini-movie__details">
			<div class="mini-movie__detail">
				<div class="mini-movie__text-info | mini-movie__text-info--title">{{ title }}</div>
				<div class="mini-movie__text-info | mini-movie__text-info--year">{{ year }}</div>
			</div>
			<div class="mini-movie__detail">
				<div class="mini-movie__text-info | mini-movie__text-info--director">{{ director }}</div>
			</div>
			<div class="mini-movie__detail | mini-movie__prizes">
				<div class="mini-movie__prize"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MiniMovie',
	props: {
		title: {
			type: String,
			required: true
		},
		year: {
			type: String,
			required: true
		},
		director: {
			type: String,
			required: true
		},
		poster: {
			type: String,
			required: true
		},
		rate: {
			type: Number,
			required: true,
			default: 0
		},
		heart: {
			type: Boolean,
			required: true,
			default: false
		},
		watched: {
			type: Boolean,
			required: true,
			default: false
		},
		later: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	data() {
		return {};
	},
	computed: {
		posterImage() {
			return {
				'background-image': `url(/files/${this.poster})`
			}
		}
	}
};
</script>

<style scoped lang="scss">
.mini-movie {
	box: vertical;

	&__figure {
		box: horizontal;
	}

	&__poster {
		width: 250px;
		height: 370px;
		background: mix(black, $background-color, 10%);
		position: relative;
		box-shadow: $mini-movie__box-shadow;
	}

	&__rate {
		position: absolute auto 0 0 auto;
		background-color: $white-6;
		border-radius: 50%;
		padding: 1em;
		size: 3em;
		box: center middle;
		font-size: 0.8em;
		font-family: $secondary-typeface;
		transform: translate(50%);
		margin-bottom: $gutter--thin;
		-webkit-text-stroke: 0.2px;
		color: $primary-color;
	}

	&__states {
		box: vertical center;
		padding: $gutter--thinner;
		width: 2.7em;
	}

	&__state {
		margin-bottom: 0.5em;
		width: 1em;
		font-size: 1.4em;

		&--heart {
			color: $red;
		}

		&--watched {
			color: $blue--light-1;
		}

		&--later {
			color: $gold--dark-1;
			font-size: 1.2em;
		}
	}

	&__details {
		width: 250px;
		padding: $gutter--thin;
		color: $mini-movie__details-color;
		font-family: $secondary-typeface;
		font-weight: 500;
	}

	&__detail {
		box: horizontal middle space-between;
		margin-bottom: $gutter--thinner;
	}

	&__text-info {
		text-transform: capitalize;

		&--title {
			font-family: $default-typeface;
			@include fix-text-rendering;
			color: $mini-movie__title-color;
		}

		&--year {
			font-size: ms(-1);
			color: mix($background-color, $mini-movie__details-color, 60%);
		}

		&--director {
			font-size: 0.9em;
			color: mix($background-color, $mini-movie__details-color, 20%);
		}
	}

	&__prizes {
	}

	&__prize {
	}
}
</style>
