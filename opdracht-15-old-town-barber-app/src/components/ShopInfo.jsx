export const shopInfo = {
  name: "Old Town Barber",
  hours: "Ma-Za: 9:00 - 18:00",
  services: [
    { id: 1, name: "Knipbeurt", price: 25, duration: 30 },
    { id: 2, name: "Baard trimmen", price: 15, duration: 15 },
    { id: 3, name: "Knip + Baard", price: 35, duration: 45 },
    { id: 4, name: "Haar wassen", price: 10, duration: 15 }
  ]
};

export default function ShopInfo() {
  return (
    <section className="shop-info">
      <h2>Services & Prijzen</h2>

      <ul className="service-list">
        {shopInfo.services.map((service) => (
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
