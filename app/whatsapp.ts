const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export function whatsappLink(message: string) {
  if (!whatsappNumber) {
    console.error("NEXT_PUBLIC_WHATSAPP_NUMBER is not configured.");
    return "#";
  }

  const destination = `https://wa.me/${whatsappNumber}`;
  return `${destination}?text=${encodeURIComponent(message)}`;
}

export const festiveEnquiryMessage =
  "Hi SihleB Digital Studio, I found the R999.99 Festive Website Special landing page. I'm interested in the professional 5-page website offer. The R999.99 price is for once-off website development only. Please quote hosting and domain registration separately and explain any additional costs before I accept a quotation.";
