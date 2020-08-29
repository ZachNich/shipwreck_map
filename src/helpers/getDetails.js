import ApiManager from '../api/modules';

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
                return null;
            }
        })
}

export default getDetails;