import React, {useState, useEffect} from 'react'
import ApiManager from '../modules/modules'

const ShipDetails = props => {

    const [extract, setExtract] = useState('')
    const [img, setImg] = useState('')
    const [imgBool, setImgBool] = useState(false)

    const pageId = props.match.params.pageId

    useEffect(() => {
        ApiManager.getShipDetails(pageId)
            .then(response => {
                setExtract(response.query.pages[pageId].extract)
            })
    }, [])

    useEffect(() => {
        ApiManager.getImageURLs(pageId)
            .then(response => {
                let title = response.query.pages[pageId].images[2].title
                title = title.replace(/ /g,"_")
                ApiManager.getImage(title)
                    .then(response => {
                        if (response.query.pages.hasOwnProperty('-1')) {
                            if (response.query.pages['-1'].hasOwnProperty('imageinfo')) {
                            setImg(response.query.pages['-1'].imageinfo[0].url)
                            setImgBool(true)
                            }
                        }
                    })
            })
    }, [])
    
    return (
        <article className="details_main">
            {imgBool
            ? <img src={img} alt="pic" width={500} align="right" id='detail-img'/>
            : null}
            <section id='extract' dangerouslySetInnerHTML={{__html: extract}}>
            </section>
        </article>
    )
}

export default ShipDetails