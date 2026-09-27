/**
 * Phone, WhatsApp, email, and address confirmed by the client (Sep 2026).
 */
export const contactInfo = {
  email: "info@younique.in",
  phone: "+91 76977 88999",
  // The number the floating WhatsApp button opens a chat with. May differ
  // from `phone` (a business often takes calls and WhatsApp on different
  // lines). If ever reset to an all-zeroes placeholder, the button renders
  // nothing — see components/layout/WhatsAppButton.tsx.
  whatsapp: "+91 76977 88999",
  whatsappMessage:
    "Hi YOUnique! I'd like to know more about your career assessment and counselling.",
  // Postal-style block — rendered with `whitespace-pre-line`, so the \n
  // line breaks are visual lines on the contact page.
  address:
    "Near Mothers Pride School\nHanuman Mandir, Dagania Turn\nSundar Nagar, Raipur CG",
};
