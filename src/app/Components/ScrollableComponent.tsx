import Card from "./Card";

export default function ScrollableComponent() {
  return (
    <div className="component">
        <h3 className="__title">Title</h3>
        <div className="cards">
            <Card />
        </div>
    </div>
  )
}
