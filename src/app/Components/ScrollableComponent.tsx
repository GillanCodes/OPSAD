import { ICard, ICards } from "@/types/card";
import Card from "./Card";

export default function ScrollableComponent({title, cards, id}:{title:string, cards:any, id:string}) {
  return (
    <div className="scrollable-component">
        <span className="target" id={id}></span>
        <h3 className="__title">{title}</h3>
        <div className="cards">
            {cards.map((card:ICard) => {
              return (
                <Card url={card.url} name={card.name} />
              )
            })}
        </div>
    </div>
  )
}
