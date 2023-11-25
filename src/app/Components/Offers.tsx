import DOMPurify from "isomorphic-dompurify";

export default function Offers({title, offers, id} : {title:string, offers:any, id:string}) {
  return (
    <div className="component">
        <span className="target" id={id}></span>
        <div className="offers">
            {offers.map((offer:any) => {
                return (
                    <div className="offer">
                        <h3>{offer.title}</h3>
                        <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(offer.desc)}}></div>
                        <p className="price">{offer.price}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
