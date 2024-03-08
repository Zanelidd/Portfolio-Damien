import ContactForm from "../Components/ContactForm";
import style from "./styles/Contact.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeProvider";
import { DarkModeContextType } from "../services/types";

const Contact = () => {
  const { darkMode } = useContext<DarkModeContextType>(DarkModeContext);
  return (
    <div
      className={
        darkMode ? style.contact_container_dark : style.contact_container
      }
    >
      <h1 className={darkMode ? style.title_dark : style.title}>
        Contactez-moi
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
