<template>
<v-container
  class="d-flex justify-center"
>
	<v-row>
		<v-col
			cols="4"
		>
			<Avatar />
		</v-col>
		<v-col
			cols="8"
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