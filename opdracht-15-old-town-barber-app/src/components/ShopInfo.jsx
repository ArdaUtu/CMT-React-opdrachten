
export const services = [
  {
    id: 1,
    name: "Haircut",
    price: 25,
    duration: 30,
  },
  {
    id: 2,
    name: "Beard Trim",
    price: 15,
    duration: 15,
  }
];

export default function ShopInfo() {
  return (
    <section className="shop-info">
      <h2>Services & Prijzen</h2>

      <ul className="service-list">
        {services.map((service) => (
          <li key={service.id} className="service-item">
            <span>{service.name}</span>
            <span>€{service.price}</span>
            <span>{service.duration} min</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
