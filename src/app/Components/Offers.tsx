import DOMPurify from "isomorphic-dompurify";

export default function Offers({title, offers, id} : {title:string, offers:any, id:string}) {
  return (
    <div className="component">
        <span className="target" id={id}></span>
        <div className="offers">
            {offers.map((offer:any, key:number) => {
                return (
                    <div className="offer" key={key}>
                        <h3 className="title">{offer.title}</h3>
                        <div className="offer-desc" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(offer.desc)}}></div>
                        <div className="price-box">
                            <p className="price">{offer.price}</p>
                            <p className="tva">TVA non applicable art.293b du CGI</p>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}
