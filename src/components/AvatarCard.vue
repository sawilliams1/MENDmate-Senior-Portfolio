<template>
  <v-card
    class="d-flex justify-center text-center"
    max-width="360"
    rounded
  >
    <v-avatar
      color="#ff6d44"
      rounded="0"
      size="100"
    >
      <v-img :src="`${picture}`" />
    </v-avatar>
    <v-list-item
      class="role-background"
      :subtitle="role"
      :title="name"
    />
  </v-card>
</template>

<script>
  export default {
    name: 'AvatarCard',
    props: ['name', 'role', 'imgSrc'],
    data (){
      return {
        picture:  '/Peter.jpeg',
      }
    },
    mounted () {
      if (this.imgSrc){
        this.picture = this.imgSrc;
      }
    },
  }
</script>

<style scoped>
* {
  color: white;
}

.role-background {
  background-color: #08b6aa;
}
</style>
