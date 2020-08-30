const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&format=json`
const proxyURL = `https://thingproxy.freeboard.io/fetch/`
const database = `http://localhost:8088/`

export default {
    getArticleByProp(prop, pageids) {
        return fetch(proxyURL + `${wikiURL}&prop=${prop}&pageids=${pageids}`)
            .then(result => result.json())
    },
    getArticleSection(prop, pageids, rvprop, rvsection) {
        return fetch(proxyURL + `${wikiURL}&prop=${prop}&pageids=${pageids}&rvprop=${rvprop}&rvsection=${rvsection}`)
            .then(result => result.json())
    },
    getList(list, cmlimit, cmtitle) {
        return fetch(proxyURL + `${wikiURL}&list=${list}&cmlimit=${cmlimit}&cmtitle=${cmtitle}`)
            .then(result => result.json())
    },
    getGenerator(generator, prop, pageids, gpllimit) {
        return fetch(proxyURL + `${wikiURL}&generator=${generator}&prop=${prop}&pageids=${pageids}&gpllimit=${gpllimit}`)
            .then(result => result.json())
    },
    getShipDetails(pageId) {
        return fetch(proxyURL + `${wikiURL}&prop=extracts&pageids=${pageId}`)
            .then(result => result.json())
    },
    getImageURLs(pageId) {
        return fetch(proxyURL + `${wikiURL}&prop=images&pageids=${pageId}`)
            .then(result => result.json())
    },
    getImage(title) {
        return fetch(proxyURL + `${wikiURL}&prop=imageinfo&titles=${title}&iiprop=url`)
            .then(result => result.json())
    }
}