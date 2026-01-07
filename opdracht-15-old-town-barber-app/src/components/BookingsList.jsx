import { getAppointments } from "../utils/localStorage";

export default function BookingsList() {
  const bookings = (getAppointments() || []).sort(
    (a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`)
  );

  return (
    <section>
      <h2>Mijn afspraken</h2>
      {bookings.map((b) => (
        <div key={b.id}>
          {b.service} - {b.date} om {b.time}
        </div>
      ))}
    </section>
  );
}
