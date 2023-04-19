export default function CardLibrary({ cards }) {
  return (
    <div className="gallery">
      {cards.map((card) => (
        <CardGryf key={card.id} {...card} />
      ))}
      <p>test</p>
      <p>test2</p>
    </div>
  );
}
