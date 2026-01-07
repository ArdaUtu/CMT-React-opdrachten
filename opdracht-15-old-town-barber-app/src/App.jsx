import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";

import { getUserProfile, setUserProfile } from "./utils/localStorage";

export default function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile(getUserProfile());
  }, []);

  const handleSaveProfile = (data) => {
    setUserProfile(data);
    setProfile(data);
    toast.success("Profiel succesvol opgeslagen!");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {!profile ? (
        <UserProfile saveProfile={handleSaveProfile} />
      ) : (
        <>
          <ShopInfo/>
          <BookingForm profile={profile} />
          <BookingsList />
        </>
      )}
    </>
  );
}
