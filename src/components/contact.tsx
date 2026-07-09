import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<"emailjs" | "mailto" | null>(
    null,
  );

  const contactEmail =
    import.meta.env.VITE_APP_EMAILJS_RECIEVER || "doshimanav24@gmail.com";

  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // validate form on submit
  const validateForm = () => {
    // form fields
    const { name, email, message } = form;

    type Current = {
      name: boolean;
      email: boolean;
      message: boolean;
    };

    // Error message
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current: Current = { name: false, email: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      current["name"] = false;
    } else {
      nameError.classList.add("hidden");
      current["name"] = true;
    }

    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // valiate email
    if (!email.trim().toLowerCase().match(email_regex)) {
      emailError.classList.remove("hidden");
      current["email"] = false;
    } else {
      emailError.classList.add("hidden");
      current["email"] = true;
    }

    // validate message
    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      current["message"] = false;
    } else {
      messageError.classList.add("hidden");
      current["message"] = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current],
    );
  };

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent default page reload
    e.preventDefault();

    // validate form
    if (!validateForm()) return false;

    // show loader
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_KEY;
    const fromEmail = form.email.trim().toLowerCase();

    if (!contactEmail) {
      toast.error("Contact email is not configured yet.");
      setLoading(false);
      return false;
    }

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${fromEmail}\n\n${form.message}`,
      );
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setDeliveryMode("mailto");
      setSubmitted(true);
      toast.info("Opening your email app to send this message.");
      setLoading(false);
      return true;
    }

    // send email
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Manav",
          from_email: fromEmail,
          to_email: contactEmail,
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        setDeliveryMode("emailjs");
        setSubmitted(true);
        toast.success("Thanks for contacting me.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        // Error handle
        console.log("[CONTACT_ERROR]: ", error);
        toast.error("Something went wrong. Please email me directly.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <p className="mt-4 max-w-[520px] text-[15px] leading-[26px] text-secondary">
            Delivery: direct email to {contactEmail} when EmailJS is configured in
            Vercel; otherwise the form opens a prefilled email draft for the sender.
          </p>

          {submitted ? (
            <div className="mt-12 overflow-hidden rounded-2xl border border-[#915eff]/30 bg-tertiary/80 p-6 shadow-[0_20px_60px_rgba(145,94,255,0.18)]">
              <div className="mb-6 grid grid-cols-3 gap-3">
                {["SQL", "ML", "BI"].map((label, index) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-black-100/70 p-4"
                  >
                    <p className="text-[12px] uppercase tracking-[0.18em] text-secondary">
                      {index === 0 ? "received" : index === 1 ? "review" : "reply"}
                    </p>
                    <p className="mt-2 text-[22px] font-bold text-white">{label}</p>
                  </div>
                ))}
              </div>

              <p className="text-[14px] uppercase tracking-[0.24em] text-[#915eff]">
                Message pipeline complete
              </p>
              <h4 className="mt-3 text-[32px] font-black leading-tight text-white">
                Thank you for reaching out.
              </h4>
              <p className="mt-4 text-[16px] leading-[28px] text-secondary">
                I appreciate data analytics, machine learning, AI engineering,
                and internship messages.
                {deliveryMode === "emailjs"
                  ? ` Your message was sent to ${contactEmail}.`
                  : ` Your email draft opened for ${contactEmail}; please press send in your email app to deliver it.`}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setDeliveryMode(null);
                }}
                className="mt-8 rounded-lg border border-[#915eff] px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-[#915eff]/20"
              >
                Send another message
              </button>
            </div>
          ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                title="What's your name?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Name */}
              <span className="text-red-400 mt-2 hidden" id="name-error">
                Invalid Name!
              </span>
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email*</span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@email.com"
                title="What's your email?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Email */}
              <span className="text-red-400 mt-2 hidden" id="email-error">
                Invalid E-mail!
              </span>
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello there!"
                title="What do you want to say?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60 disabled:resize-none"
              />

              {/* Invalid Message */}
              <span className="text-red-400 mt-2 hidden" id="message-error">
                Invalid Message!
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Sending..." : "Send"}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:bg-tertiary/20 disabled:text-white/60"
              disabled={loading}
              aria-disabled={loading}
            >
              {/* check loader state */}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          )}
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
