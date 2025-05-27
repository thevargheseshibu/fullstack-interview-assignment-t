export default function Dashboard({ drinks = [] }) {
  return (
    <div className="dashboard-grid">
      {drinks.map((drink) => (
        <div className="grid-item" key={drink.name}>
          <img src={drink.image} alt={drink.name} width={100} />
          <p>{drink.name}</p>
        </div>
      ))}
    </div>
  );
}
