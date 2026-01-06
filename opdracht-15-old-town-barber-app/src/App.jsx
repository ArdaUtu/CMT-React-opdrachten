import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserProfile from "./components/UserProfile";
import BookingForm from "./components/BookingForm";
import ShopInfo from "./components/ShopInfo";

export default function App() {
  return (
    <>
      <ShopInfo />
      <UserProfile />
      <BookingForm />
    </>
  );
}
