import React, { useState, useEffect } from 'react';
import ApiManager from './modules';

const DetailModal = props => {
    const [details, setDetails] = useState()

    const getDetails = e => {
        ApiManager.getList("categorymembers", "max", "Category:Lists_of_shipwrecks_by_location")
            .then(response => {
                console.log("response 1", response)
                response.query.categorymembers.forEach(category => {
                    ApiManager.getGenerator("links", "info", category.pageid, "max")
                        .then(response => {
                            console.log("response 2", response)
                            if (response.query) {
                                for (Object.entries(response.query.pages)) {
                                    console.log(property["length"])
                                    if (property["length"] && property["pageid"]) {
                                        ApiManager.getArticleByProp("coordinates", property.pageid.toString())
                                        .then(response => {
                                            console.log("response 3", response)
                                            for (let page in response.query.pages) {
                                                if (page.coordinates) {
                                                    ApiManager.getArticleSection("revisions", page.title, "content", "0")
                                                    .then(response => {
                                                        console.log("response 4", response)
                                                        setDetails(response["*"])
                                                    })
                                                }
                                            }
                                        })
                                    }
                                }
                            }
                        })
                })
            })
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <>
            <h3>Details</h3>
            <div>{details}</div>
        </>
    )
}

export default DetailModal