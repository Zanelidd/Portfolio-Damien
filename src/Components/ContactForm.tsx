import { useForm } from "react-hook-form";
import style from "./styles/ContactForm.module.css";
import { useContext } from "react";
import { DarkModeContextType } from "../services/types";
import { DarkModeContext } from "../Context/DarkModeProvider";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { darkMode } = useContext<DarkModeContextType>(DarkModeContext);

  const onSubmit = () => alert("Votre message est bien envoyé !");

  return (
    <form
      className={darkMode ? style.form_container_dark : style.form_container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <p>Vous pouvez me contacter grâce au formulaire suivant : </p>
      <input
        placeholder="FirstName"
        {...register("FirstName", { required: true })}
        required
      />
      <input
        placeholder="LastName"
        {...register("LastName", { required: true })}
        required
      />
      <input placeholder="Email" {...register("Email", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <textarea
        placeholder="Message"
        {...register("Message", { required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input className={style.submitButton} type="submit" />
    </form>
  );
};

export default ContactForm;
