"use client";

import { useState, type FormEvent } from "react";
import { festiveEnquiryMessage, whatsappLink } from "./whatsapp";
import WhatsAppIcon from "./whatsapp-icon";

export default function EnquiryForm() {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const business = String(formData.get("business") ?? "").trim();
    const telephone = String(formData.get("telephone") ?? "").trim();
    const businessType = String(formData.get("businessType") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const websiteOrSocial = String(formData.get("websiteOrSocial") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    if (!name || !business) {
      setError("Please complete the required fields before continuing.");
      return;
    }

    const message = [
      festiveEnquiryMessage,
      "",
      `Name: ${name}`,
      `Business name: ${business}`,
      ...(telephone ? [`Telephone number: ${telephone}`] : []),
      ...(businessType ? [`Business type: ${businessType}`] : []),
      ...(email ? [`Email: ${email}`] : []),
      ...(websiteOrSocial ? [`Existing website or social media link: ${websiteOrSocial}`] : []),
      ...(details ? [`Additional information: ${details}`] : []),
    ].join("\n");

    window.open(whatsappLink(message), "_self");
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>YOUR FESTIVE WEBSITE ENQUIRY</span>
        <span aria-hidden="true">✦</span>
      </div>
      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="enquiry-name">Full name <span aria-hidden="true">*</span></label>
          <input id="enquiry-name" name="name" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-business">Business name <span aria-hidden="true">*</span></label>
          <input id="enquiry-business" name="business" autoComplete="organization" required />
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-telephone">Telephone number <span className="optional-label">OPTIONAL</span></label>
          <input id="enquiry-telephone" name="telephone" type="tel" autoComplete="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-business-type">Business type <span className="optional-label">OPTIONAL</span></label>
          <select id="enquiry-business-type" name="businessType" defaultValue="">
            <option value="">Select your business type (optional)</option>
            <option value="Retail">Retail</option>
            <option value="Professional services">Professional services</option>
            <option value="Food and hospitality">Food and hospitality</option>
            <option value="Health and wellness">Health and wellness</option>
            <option value="Trades and construction">Trades and construction</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-email">Email address <span className="optional-label">OPTIONAL</span></label>
          <input id="enquiry-email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-link">Existing website or social media link <span className="optional-label">OPTIONAL</span></label>
          <input id="enquiry-link" name="websiteOrSocial" type="url" />
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="enquiry-details">Additional information <span className="optional-label">OPTIONAL</span></label>
          <textarea id="enquiry-details" name="details" rows={3} />
        </div>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-red form-submit" type="submit">
        <WhatsAppIcon />
        Open enquiry in WhatsApp
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">Your message will open in WhatsApp for you to review and send.</p>
    </form>
  );
}
