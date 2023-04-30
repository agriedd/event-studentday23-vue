<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import AngelIcon from '../components/icons/AngelIcon.vue';
import CoolIcon from '../components/icons/CoolIcon.vue';
import SadIcon from '../components/icons/SadIcon.vue';
import SavourFoodIcon from '../components/icons/SavourFoodIcon.vue';
import AngryIcon from '../components/icons/AngryIcon.vue';
import FaceWithOpenEye from '../components/icons/FaceWithOpenEye.vue';
import MaskIcon from '../components/icons/MaskIcon.vue';
import { Options } from "../options";

import optionsJson from "../assets/options.json";
const optionsData = optionsJson as Options;

const emojis = [AngelIcon, CoolIcon, SadIcon, SavourFoodIcon, AngryIcon, FaceWithOpenEye, MaskIcon]
let emoji = shallowRef(AngelIcon);
let emojiHandler : number|null = null
onMounted(()=>{
	emojiHandler = setInterval(()=>{
		emoji.value = emojis[Math.round((Math.random()*(emojis.length - 1)))]
	}, 200)
})
onBeforeUnmount(()=>{
	if(emojiHandler){
		clearInterval(emojiHandler)
	}
})
const options = ref(false)
</script>
<template>
	<div class="relative bg-neutral-950">
		<div class="p-4 flex justify-center items-center w-full text-white 
			min-h-screen absolute inset-y-0 inset-x-0 h-screen">
			<div>
				<img src="https://agriedd.github.io/studentday/assets/studentday selected-08.png" class="h-[80vh] w-auto animate-pulse" alt="">
			</div>
		</div>
		<div class="relative p-4 min-h-screen bg-slate-900 bg-opacity-70 
			backdrop-blur-lg
			flex flex-col text-white justify-center items-center">
			<div class="flex flex-col gap-0 items-center">
				<img src="https://agriedd.github.io/studentday/assets/studentday selected-08.png" class="h-52 w-auto" alt="">
				<h1 class="text-2xl font-black ">
					Student Day <span class="text-yellow-300">2023</span>
				</h1>
				<h3 class="text-sm text-opacity-50">
					Ilmu Komputer Undana
				</h3>
			</div>
			<div class="fixed bottom-0 p-8">
				<div class="py-4 rounded-full border bg-gradient-to-br to-slate-900 
					from-slate-800
					bg-opacity-90 border-slate-600
					shadow-xl shadow-slate-950 flex gap-4 items-center
					hover:border-slate-400 group transition-all hover:from-slate-700
					animate-pulse hover:animate-none">
					<button class="fill-white p-4 animate-pulse group-hover:animate-none"
						@click="options = true">
						<svg xmlns="http://www.w3.org/2000/svg" class="group-hover:scale-110 transition-all" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M5.962 17.674C7 19.331 7 20.567 7 22h2c0-1.521 0-3.244-1.343-5.389l-1.695 1.063zM16.504 3.387C13.977 1.91 7.55.926 4.281 4.305c-3.368 3.481-2.249 9.072.001 11.392.118.122.244.229.369.333.072.061.146.116.205.184l1.494-1.33a3.918 3.918 0 0 0-.419-.391c-.072-.06-.146-.119-.214-.188-1.66-1.711-2.506-6.017.001-8.608 2.525-2.611 8.068-1.579 9.777-.581 2.691 1.569 4.097 4.308 4.109 4.333l1.789-.895c-.065-.135-1.668-3.289-4.889-5.167z"></path><path d="M9.34 12.822c-1.03-1.26-1.787-2.317-1.392-3.506.263-.785.813-1.325 1.637-1.604 1.224-.41 2.92-.16 4.04.601l1.123-1.654c-1.648-1.12-3.982-1.457-5.804-.841-1.408.476-2.435 1.495-2.892 2.866-.776 2.328.799 4.254 1.74 5.405.149.183.29.354.409.512C11 18.323 11 20.109 11 22h2c0-2.036 0-4.345-3.201-8.601a19.71 19.71 0 0 0-.459-.577zm5.791-3.344c1.835 1.764 3.034 4.447 3.889 8.701l1.961-.395c-.939-4.678-2.316-7.685-4.463-9.748l-1.387 1.442z"></path><path d="m11.556 9.169-1.115 1.66c.027.019 2.711 1.88 3.801 5.724l1.924-.545c-1.299-4.582-4.476-6.749-4.61-6.839zm3.132 9.29c.21 1.168.312 2.326.312 3.541h2c0-1.335-.112-2.608-.343-3.895l-1.969.354z"></path></svg>
					</button>
				</div>
			</div>
		</div>
		<div class="p-4 min-h-screen bg-slate-900 bg-opacity-70 fixed w-full inset-y-0 inset-x-0
			flex flex-col text-white justify-center items-center
			shadow-2xl"
			@click.self="options = false"
			v-if="options === true">
			<div class="flex flex-col items-center w-full max-w-md rounded-lg 
				p-4 bg-slate-800 border border-slate-700 text-sm gap-2">
				<div>
					<div class="rounded-lg bg-slate-600 h-60 w-60 flex flex-col justify-between items-center p-4">
						<div class="gap-1 flex w-full justify-between items-center">
							<div class="rounded-full bg-slate-500 h-4 w-24 flex flex-col justify-center items-center">

							</div>
							<div class="rounded-full bg-slate-500 h-4 w-4 flex flex-col justify-center items-center">

							</div>
						</div>
						<div class="rounded-full bg-slate-500 h-32 w-32 flex flex-col justify-center items-center shake">
							<component :is="emoji" :size="'5rem'">
							</component>
						</div>
						<div class="flex gap-3">
							<div class="gap-1 flex flex-col justify-center items-center">
								<div class="rounded-full bg-slate-400 h-4 w-32 flex flex-col justify-center items-center">
		
								</div>
								<div class="rounded-full bg-slate-500 h-2 w-14 flex flex-col justify-center items-center">
		
								</div>
							</div>
						</div>
					</div>
				</div>
				<a :href="item.url ? item.url : '#'" class="p-4 bg-slate-700 border border-slate-600 w-full 
					rounded-lg flex gap-4 items-center justify-between" v-for="item in optionsData.links" :key="item.id">
					<div>
						<div>
							{{ item.title }}
						</div>
						<div class="text-xs text-white text-opacity-70" v-if="item.subtitle">
							{{ item.subtitle }}
						</div>
					</div>
					<div class="fill-slate-900" v-if="item.url">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg>
					</div>
					<div class="fill-slate-900" v-else>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="ftransform: ;msFilter:;"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
					</div>
				</a>
				<div class="flex gap-4 items-center w-full">
					<div class="grow">

					</div>
					<button class="px-5 py-3 bg-slate-900 border border-b-2 
						rounded-xl border-slate-950" @click="options = false">
						Tutup
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.shake{
	animation: shaking .5s ease-in-out infinite;
}
@keyframes shaking {
	0%, 100%{
		transform: rotate(7deg);
	}
	25%{
		transform: rotate(5deg);
	}
	50%{
		transform: rotate(-8deg);
	}
	75%{
		transform: rotate(-6deg);
	}
}
</style>