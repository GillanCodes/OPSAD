export default function ComponentLeft({title, text, url, id}: {title:string|undefined, text:string, url:string|undefined, id:string}) {
    return (
        <div className="component">
            <span className="target" id={id}></span>
            <div className="text">
                <h3 className="comp_title">{title}</h3>
                <div dangerouslySetInnerHTML={{__html: text}} className="comp_text"></div>
            </div>

            <div className="image-container">
                <img src={url} alt="img" className="image" />
            </div>


        </div>
    )
}
