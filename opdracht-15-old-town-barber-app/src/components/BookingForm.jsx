import { shopInfo } from "./ShopInfo";
import { useState } from "react";
import { toast } from "react-toastify";
import { getAppointments, setAppointments } from "../utils/localStorage";

export default function BookingForm({ profile }) {
  const services = shopInfo.services;

  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serviceId || !date || !time) {
      toast.error("Vul alle velden in");
      return;
    }

    const service = services.find((s) => s.id === Number(serviceId));

    const newBooking = {
      id: Date.now(),
      serviceId: service.id,
      date,
      time,
      price: service.price,
    };

    const existing = getAppointments() || [];
    setAppointments([...existing, newBooking]);

    toast.success("Afspraak geboekt!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={profile.name} disabled />
      <input value={profile.email} disabled />

      <select value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
        <option value="">Kies service</option>
        {services.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name} - €{s.price}
          </option>
        ))}
      </select>

      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Kies tijd</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
      </select>

      <button>Boek afspraak</button>
    </form>
  );
}
