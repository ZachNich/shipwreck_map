import ApiManager from '../modules/modules';

const getCoordinates = () => {
    const results = []

    ApiManager.getList("categorymembers", "max", "Category:Lists_of_shipwrecks_by_location")
        .then(response => {
            // console.log("response 1", response)
            response.query.categorymembers.forEach(category => {
                ApiManager.getGenerator("links", "info", category.pageid, "max")
                    .then(response => {
                        // console.log("response 2", response)
                        if (response.query) {
                            Object.entries(response.query.pages).forEach(entry => {
                                // console.log('entry', entry)
                                if (entry[1].length) {
                                    ApiManager.getArticleByProp("coordinates", entry[0])
                                    .then(response => {
                                        // console.log("response 3", response)
                                        Object.entries(response.query.pages).forEach(entry => {
                                            // console.log("entry2", entry)
                                            if (entry[1].coordinates) {
                                                // console.log("got the coords")
                                                results.push({
                                                    "pageid": entry[0],
                                                    "coordinates": {
                                                        "lat": entry[1].coordinates[0].lat,
                                                        "lon": entry[1].coordinates[0].lon
                                                    }
                                                })
                                                // console.log("results prog", results)
                                            }
                                        })
                                    })
                                }
                            })
                        }
                    })
                })
        })
        .then(() => {
            console.log(results)
        })
}

export default getCoordinates 