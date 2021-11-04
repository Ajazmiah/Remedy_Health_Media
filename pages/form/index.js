import React, { useState } from "react";
import Nav from "../../components/nav";
import style from "./form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (message !== "" && name !== "") {
      try {
        const res = await fetch("/api/guestbook", {
          method: "POST",
          body: JSON.stringify({ name, message }),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data);

        if (res.ok === true) {
          setSuccess(true);
          setError(false);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        setError(true);
        setSuccess(false);
      }

      setName("");
      setMessage("");
    } else {
      alert("Both field need to be filed");
      return;
    }
  };

  return (
    <div>
      <Nav />
      <div className={style.formWrapper}>
        {success && (
          <div className={`${style.success} ${style.alert}`}>
            Your post is submitted
          </div>
        )}
        {error && (
          <div className={`${style.error} ${style.alert}`}>
            There has been an error
          </div>
        )}
        <form onSubmit={submitHandler} className={style.form}>
          <div className={style.formContent}>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" className={style.btn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
