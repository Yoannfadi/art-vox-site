// Centralized site constants — single source of truth for contact details,
// nav links and social URLs used across the site.

export const SITE = {
  name: "ART VOX",
  url: "https://www.artvox.io",
  phoneDisplay: "07 59 69 59 96",
  phoneHref: "tel:0759695996",
  email: "contact@artvox.io",
  address: "18 rue de Tilsitt, 75017 Paris",
  whatsapp: "https://wa.me/33674514619",
  instagram: "https://www.instagram.com/artvox_paris/",
  facebook: "https://www.facebook.com/p/Art-Vox-61577770896575/",
  tiktok: "https://tiktok.com/@art.vox",
  linkedin: "https://fr.linkedin.com/company/art-vox-international",
} as const;

export const NAV_LINKS = [
  { label: "NOTRE ADN", href: "/#ADN" },
  { label: "ECOSYSTEME", href: "/#ECOSYSTEME" },
  { label: "PROGRAMME 360", href: "/#PROGRAMME360" },
  { label: "VOCALOSTEO", href: "/#VOCALOSTEO" },
  { label: "EQUIPE", href: "/#EQUIPE" },
  { label: "FAQ", href: "/#FAQ" },
  { label: "CONTACT", href: "/#CONTACT" },
] as const;
