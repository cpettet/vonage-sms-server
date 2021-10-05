import style from "./Sms.module.css";
import React, { useState, useEffect } from "react";
import formEncode from "../../util/formEncode";

function Sms() {
  const [message, setMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const sendSms = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formEncode({ text: message }),
      });
      if (!res.ok) {
        alert("Failure: Message not sent");
      } else {
        setMessage("");
        alert("Success: Message sent!");
      }
    } catch (e) {}
  };

  useEffect(() => {
    setMessageLength(message.length);
  }, [message]);

  return (
    <form onSubmit={sendSms} className={style.form}>
      <div className={style.form__input}>
        <label className={style.form__input__label} htmlFor="message">
          Message
        </label>
        <textarea
          className={style.form__input__data}
          value={message}
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <span>
          Characters: {messageLength}/
          {(Math.floor(messageLength / 160) + 1) * 160}
        </span>
      </div>
      <button className={style.form__button}>Send Message</button>
    </form>
  );
}

export default Sms;
