import React from "react";
import yellowbar from "../assets/yellow bar.png";
import watch from "../assets/watch.png";
import phone from "../assets/phone.png";
import building from "../assets/building.png";
import mail from "../assets/mail.png";

const ContactSection = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "50px 0",
        backgroundColor: "#fff",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          {/* Left Section - Contact Form */}
          <div className="col-md-6 col-sm-12">
            <div style={{ margin: "10%" }}>
              <h6
                style={{
                  color: "#ffa500",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                צרו קשר
              </h6>
              <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
                זמינים בכל נושא
              </h2>
              <p style={{ fontSize: "16px", color: "#555" }}>
                תרגישו חופשי לפנות אלינו בכל נושא, אנו נעשה ממץ מירבי כדי לחזור
                אליכם בהקדם!
              </p>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    id="name"
                    placeholder="שם מלא"
                    className="form-control custom-form"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder={`דוא"ל`}
                    className="form-control custom-form"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="phone"
                    placeholder="מספר נייד"
                    className="form-control custom-form"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="במה נוכל לסייע?"
                    className="form-control custom-form"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "#FECF77",
                    color: "#54251E",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  שלח
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Info Us */}
          <div className="col-sm-12 col-md-6 d-flex align-items-center position-relative position-sm-static">
            <div
              style={{
                backgroundColor: "#1a1a1a",
                color: "#fff",
                padding: "30px",
                borderRadius: "10px",
                zIndex: 20,
                width: "50%",
              }}
              className="position-absolute remove-position"
            >
              <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>
                פרטי התקשרות
              </h3>
              <div className="d-flex flex-row justify-content-start align-items-center mt-3 mb-3">
                <img style={{ width: 30, margin: 0 }} src={mail}></img>
                <a
                  className="contact-text ml-5"
                  href="mailto:main@food-dude.net"
                >
                  main@food-dude.net
                </a>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mt-5 mb-3">
                <img style={{ width: 30, margin: 0 }} src={phone}></img>
                <a
                  className="contact-text ml-5"
                  href="mailto:info@fooddude.com"
                >
                  לא זמין בשלב זה
                </a>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mt-5 mb-3">
                <img style={{ width: 30, margin: 0 }} src={building}></img>
                <a
                  className="contact-text ml-5"
                  href="mailto:info@fooddude.com"
                >
                  שכונת רחביה, ירושלים, ישראל
                </a>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mt-5 mb-3">
                <img style={{ width: 30, margin: 0 }} src={watch}></img>
                <a
                  className="contact-text ml-5"
                  href="mailto:info@fooddude.com"
                >
                  09:00 - 18:00
                </a>
              </div>

              {/* Decorative Rectangle */}
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-1%",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#FECF77",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
            <img
              alt="yellowbar"
              src={yellowbar}
              style={{
                position: "absolute",
                top: "-20px",
                left: "0px",
                height: "100%",
                width: "46%",
              }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
