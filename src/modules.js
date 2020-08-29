const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&format=json`
const proxyURL = `https://cors-anywhere.herokuapp.com/`

export default {
    getArticleByProp(prop, titles) {
        return fetch(proxyURL + `${wikiURL}&prop=${prop}&titles=${titles}`)
            .then(result => result.json())
    },
    getArticleSection(prop, titles, rvprop, rvsection) {
        return fetch(proxyURL + `${wikiURL}&prop=${prop}&titles=${titles}&rvprop=${rvprop}&rvsection=${rvsection}`)
            .then(result => result.json())
    },
    getList(list, cmlimit, cmtitle) {
        return fetch(proxyURL + `${wikiURL}&list=${list}&cmlimit=${cmlimit}&cmtitle=${cmtitle}`)
            .then(result => result.json())
    },
    getGenerator(generator, prop, titles, gpllimit) {
        return fetch(proxyURL + `${wikiURL}&generator=${generator}&prop=${prop}&titles=${titles}&gpllimit=${gpllimit}`)
            .then(result => result.json())
    }
}