import ApiManager from '../modules/modules';

const getDetails = (pageid, bool) => {
    ApiManager.getArticleSection("revisions", pageid, "content", "0")
        .then(response => {
            // Get minimum details for modal
            if (!bool) {
                let article = response.query.pages[pageid].revisions[0]["*"]
                let name = response.query.pages[pageid].title
                let date = article.match(/(?<=ship\sfate=).*(?=\s)/gi)[0]
                let nationality = article.match(/(?<=ship\scountry=\[\[).*(?=\]\])/gi)[0]
            }
            // Get maximum details for details page 
            else {
                ApiManager.getTooltip(props.id)
                .then(response => {
                    const shipInfo = {
                        "id": null,
                        "coordinates": {
                            "lat": -33.59166667,
                            "lon": 26.8875
                          },
                        ""
                    }
                })
            }
        })
}

export default getDetails;