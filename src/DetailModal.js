import React, { useState, useEffect } from 'react';
import ApiManager from './modules';

const DetailModal = props => {
    const [details, setDetails] = useState()

    const getDetails = e => {
        ApiManager.getList("categorymembers", "max", "Category:Lists_of_shipwrecks_by_location")
            .then(response => {
                response.query.categorymembers.forEach(category => {
                    setInterval(ApiManager.getGenerator("links", "info", category.title, "max")
                    .then(response => {
                        if (response.query) {
                            for (let page in response.query.pages) {
                                if (page.length) {
                                    setInterval(ApiManager.getArticleByProp("coordinates", page.title)
                                    .then(response => {
                                        for (let page in response.query.pages) {
                                            if (page.coordinates) {
                                                console.log("pageInfo", page.title, page.coordinates)
                                            }
                                        }
                                    }), 6000)
                                }
                            }
                        }
                    }), 6000)
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