export default function ComponentRight({title, text, url}: {title:string|undefined, text:string|undefined, url:string|undefined}) {
    return (
        <div className="component">
            
            <div className="image-container">
                <img src={url} alt="img" className="image" />
            </div>

            <div className="text">
                <h3 className="comp_title">{title}</h3>
                <p>{text}</p>
            </div>

        </div>
    )
}
