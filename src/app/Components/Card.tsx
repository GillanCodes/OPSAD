export default function Card({url, name}:{url:string, name:string}) {
  return (
    <div className="card">
       <div className="head" title={name}>
          <img src={url} alt="picture" className="card-image" />
        </div> 
    </div>
  )
}
