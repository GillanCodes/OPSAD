import { ICard, ICards } from "@/types/card";
import Card from "./Card";

export default function ScrollableComponent({title, cards}:{title:string, cards:ICards}) {
  return (
    <div className="scrollable-component">
        <h3 className="__title">{title}</h3>
        <div className="cards">
            {cards.map((card:ICard) => {

            })}
        </div>
    </div>
  )
}
