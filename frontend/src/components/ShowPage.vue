/* eslint-disable */
<template>
  <div>
    <h1>상세 내용</h1>
    <img v-bind:src="movie.poster"/>
    {{movie.name}}
  </div>
</template>


<script>
console.log('ShowPage');
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/movies/${id}`)
    .then((response) => {
      this.movie = response.data[0]
      console.log(this.movie)
    })
  },
  data: function () {
    return {
      movie: {}
    }
  }
}
</script>