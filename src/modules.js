const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&format=json`
const proxyURL = `https://thingproxy.freeboard.io/fetch/`

export default {
    getArticleByProp(prop, pageids) {
        return fetch(proxyURL + `${wikiURL}&prop=${prop}&pageids=${pageids}`)
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
    getGenerator(generator, prop, pageids, gpllimit) {
        return fetch(proxyURL + `${wikiURL}&generator=${generator}&prop=${prop}&pageids=${pageids}&gpllimit=${gpllimit}`)
            .then(result => result.json())
    },
    practiceQuery() {
        return fetch(proxyURL + `https://en.wikipedia.org/w/api.php?action=query&generator=links&prop=info&titles=pizza&gpllimit=max&format=json`)
            .then(result => result.json())
    }
}