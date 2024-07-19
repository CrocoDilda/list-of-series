<script setup lang="ts">
const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': '0TRXKX0-4QCM482-GQQPR1K-C8Z4MAT' }
}

fetch(
  'https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=1&query=%D0%B7%D0%B5%D0%BB%D1%91%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
</script>
