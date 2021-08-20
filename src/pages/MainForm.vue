<template>
<v-container
  class="d-flex justify-center"
>
	<v-row>
		<v-col
			col="5"
		>
			<Avatar />
		</v-col>
		<v-col
			col="7"
		>
			<AboutMe />
		</v-col>
	</v-row>

		<div class="main-body">
			
		</div>
    
  </v-container>
  
</template>

<script>
import Avatar from '../components/Avatar'
import AboutMe from '../components/Aboutme'

export default {
	components: {
		Avatar,
		AboutMe
	}
}
</script>

<style>

</style>