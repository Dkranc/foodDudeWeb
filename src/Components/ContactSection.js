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
              <h6 style={{ color: "#ffa500", textTransform: "uppercase" }}>
                Contact us
              </h6>
              <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
                Get in touch
              </h2>
              <p style={{ fontSize: "16px", color: "#555" }}>
                Feel free to contact us any time. We will get back to you as
                soon as we can!
              </p>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="form-control custom-form"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="form-control custom-form"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone"
                    className="form-control custom-form"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Message"
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
                  }}
                >
                  Send
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
              }}
              className="position-absolute remove-position"
            >
              <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>
                Info us
              </h3>
              <div className="d-flex flex-row justify-content-start align-items-center mt-3 mb-3">
                <img style={{ width: 30, margin: 0 }} src={mail}></img>
                <a
                  className="contact-text ml-5"
                  href="mailto:info@fooddude.com"
                >
                  info@fooddude.com
                </a>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mt-5 mb-3">
                <img style={{ width: 30, margin: 0 }} src={phone}></img>
                <a
                  className="contact-text ml-5"
                  href="mailto:info@fooddude.com"
                >
                  +1 123 4567 891
                </a>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mt-5 mb-3">
                <img style={{ width: 30, margin: 0 }} src={building}></img>
                <a
                  className="contact-text ml-5"
                  href="mailto:info@fooddude.com"
                >
                  14 Green Road St., near Crystal Tower, Jerusalem, Israel
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
                  top: "-20px",
                  left: "-20px",
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
                right: "0px",
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
