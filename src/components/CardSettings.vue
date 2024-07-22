<script setup lang="ts">
function fixedEncodeURIComponent(str: string) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16)
  })
}

console.log(fixedEncodeURIComponent('Зелёная книга'))

const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': '0TRXKX0-4QCM482-GQQPR1K-C8Z4MAT' }
}

fetch(
  `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=1&query=${fixedEncodeURIComponent(
    'Зеленая книга'
  )}`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
</script>
