import React from "react";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import NoteFromUsSection from "@/components/contact/NoteFromUsSection";
import WeddingForm from "@/components/contact/WeddingForm";
import WeddingIntroSection from "@/components/contact/WeddingIntroSection";

const ContactUsPage = () => {
  return (
    <div>
      <WeddingIntroSection />
      <ContactInfoSection  />
      <NoteFromUsSection />
      <div id="wedding-form" >
        <WeddingForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
