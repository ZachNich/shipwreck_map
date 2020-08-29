import ApiManager from '../api/modules';

const getCoordinates = () => {
    const results = []

    ApiManager.getList("categorymembers", "max", "Category:Lists_of_shipwrecks_by_location")
        .then(response => {
            response.query.categorymembers.forEach(category => {
                ApiManager.getGenerator("links", "info", category.pageid, "max")
                    .then(response => {
                        if (response.query) {
                            Object.entries(response.query.pages).forEach(entry => {
                                if (entry[1].length) {
                                    ApiManager.getArticleByProp("coordinates", entry[0])
                                    .then(response => {
                                        Object.entries(response.query.pages).forEach(entry => {
                                            if (entry[1].coordinates) {
                                                results.push({
                                                    "pageid": entry[0],
                                                    "coordinates": {
                                                        "lat": entry[1].coordinates[0].lat,
                                                        "lon": entry[1].coordinates[0].lon
                                                    }
                                                })
                                            }
                                        })
                                    })
                                }
                            })
                        }
                    })
                })
            })
    console.log(results)
    return results
}

export default getCoordinates