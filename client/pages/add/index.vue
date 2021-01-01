<template>
  <div class="container">
    <div>
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <h2 class="subtitle">Data from payloads</h2>
      <hr />
      <h3 v-if="results.length">Total payloads {{ results.length }}</h3>
      <hr />
      <ul>
        <li v-for="(result, key) in results" :key="result.value">
          <p>{{ key + 1 }}</p>
          <p>{{ result.payload }}</p>
        </li>
      </ul>
      <p>{{ message }} {{ message.split('').reverse().join('') }}</p>
      <p>{{ results[0].payload[1].cases }}</p>
      <p>{{ results }}</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
const url = 'http://localhost:9000/api'

export default {
  data() {
    return {
      results: [],
      message: 'Hello John',
    }
  },
  async fetch() {
    this.results = await fetch(url).then((res) => res.json())
  },
  // mounted() {
  //   axios.get(url).then((response) => {
  //     this.results = response.data
  //   })
  // },
}
</script>

<style>
hr {
  margin: 3rem 0;
}

ul {
  list-style: none;
}

li {
  text-align: left;
  margin-bottom: 1rem;
}
</style>
