// Drapeaux de configuration éditoriale (Temps 1 — blueprint).
//
// HERO_VARIANT : variante du hero affichée par défaut.
//   'A' = version blueprint (recommandée) — double CTA, promesse transformation.
//   'B' = version actuelle — « L'architecte de la carrière musicale ».
// Override possible à l'exécution via le query string : ?hero=a ou ?hero=b
// (lu côté client par le composant Hero).
export const HERO_VARIANT: "A" | "B" = "A";

// DRAFT_FIGURES : quand true, affiche les marqueurs « (à valider) » à côté des
// chiffres clés + une ligne d'avertissement sous les stats. Passer à false pour
// les faire disparaître avant publication.
export const DRAFT_FIGURES = true;
