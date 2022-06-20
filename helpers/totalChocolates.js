/**
 * 
 * @param {Number} n cantidad dinero disponible
 * @param {Number} c costo de un chocolate
 * @param {Number} m cantidad para intercambiar por 1 chocolate gratis
 * @returns cantidad de chocolates conseguidos
 */
function totalChocolates(n, c, m) {
  let currentChocolates = Math.floor(n / c)
  let res = currentChocolates
  while (currentChocolates >= m) {
    const freeChocolates = Math.floor(currentChocolates / m)
    currentChocolates = freeChocolates + Math.floor(currentChocolates % m)
    res += freeChocolates
  }

  return res
}
export default totalChocolates