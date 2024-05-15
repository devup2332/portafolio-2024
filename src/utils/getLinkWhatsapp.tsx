import { checkIsMobile } from "./checkIsMobile";

export const getLinkWhatsapp = (message: string) => {
  const isMobil = checkIsMobile();
  let url = isMobil ? "https://wa.me" : "https://web.whatsapp.com/send";

  const phone = "51976469908";
  url += isMobil ? `/${phone}` : `?phone=${phone}`;

  url += `&text=${encodeURIComponent(message)}`;

  return url;
};
