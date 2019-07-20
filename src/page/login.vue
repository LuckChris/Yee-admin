<template>
  	<div class="login_page fillcontain">
	  <div>login页面</div>
        <button @click="submit">login</button>
  	</div>
</template>

<script>
	import {login} from '@/api/getData'

	export default {
	    data(){
			return {
			}
		},
		mounted(){

		},
		computed: {

		},
		methods: {


		},
		watch: {

		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';

</style>
