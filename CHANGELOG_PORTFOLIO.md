# Changelog du portfolio

Audit et améliorations du 14 octobre 2026.

## P0 — Bloquants

- Retrait des placeholders visibles, du faux message de dépôt privé et des exemples de domaine non configurés.
- Lien Image Captioning corrigé vers le dépôt GitHub public `Image-Capitioning` ; les liens GitHub des projets affichés renvoient vers des dépôts publics vérifiés.
- Ajout du CV français existant à `public/cv-fr.pdf`, avec un téléchargement depuis le hero, la navigation et Contact. Aucun CV anglais n'était disponible.
- Déplacement de la capture Lama hors de `public/` et retrait de son suivi Git tant que l'autorisation de publication n'est pas confirmée. Le fichier local est conservé dans `.private-assets/` et ignoré par Git. Cette suppression du dernier état versionné n'efface pas les commits publics antérieurs.
- Build de production généré localement. La version actuellement déployée n'a pas pu être identifiée depuis le dépôt.
- Liens GitHub vérifiés comme publics. Le lien de démonstration Streamlit affiche une page de mise en veille (« Zzzz ») et demande un réveil à l'ouverture ; il ne s'agit pas d'une démonstration immédiatement disponible. La réponse LinkedIn a été limitée par le serveur (HTTP 999), donc le lien n'a pas pu être confirmé automatiquement. `mailto:` conserve l'adresse configurée dans `data/profile.ts`.

## P1 — Positionnement stage PFE

- Positionnement français explicite : recherche d'un stage PFE de six mois, distinct du PFA Lama de huit semaines.
- Proposition de valeur recentrée sur LLM fine-tuning, Document AI et Deep Learning.
- Ajout de quatre résultats vérifiables dans le hero, avec le contexte CORD précisé dans les sections projet et l'étude de cas.
- Ajout du bloc « Ce que je cherche » avec sujets de mission.
- Français défini comme langue par défaut du document. Niveaux fournis : français B2, anglais B1. Un sélecteur FR/EN et les contenus anglais traduits restent à intégrer ; le niveau d'arabe n'est pas renseigné.
- Mobilité mise à jour : présentiel ou à distance.

## P2 — Projets

- Ajout de filtres NLP, Deep Learning, Full-stack et Computer Vision ; harmonisation des cartes et de leurs actions.
- Clarification des métriques du PFA Lama : le rappel d'environ 0,94 porte sur des scans propres ; 87 % (124/143) et 100 % de JSON valides (60/60) portent sur l'évaluation CORD après fine-tuning.
- Création de `/projects/lama-credentialing`, avec schéma d'architecture, contribution, protocole disponible, limites et séparation des métriques. Aucun benchmark individuel ni courbe LoRA n'a été inventé.
- Ajout du contexte du jeu de test pour News Classification. La baseline n'est pas renseignée faute de mesures confirmées.
- Scores BLEU, exemples de légendes, visuels/démos supplémentaires et autorisation de la capture Lama manquants : non inventés et non publiés.

## P3 — Compétences, expérience, formation

- Hiérarchisation de dix compétences cœur et retrait de Laravel/PHP/MySQL du profil principal.
- PFA présenté comme expérience de huit semaines ; lien vers l'étude de cas ajouté.
- Certifications absentes tant qu'aucune information n'a été fournie.
- Dates exactes du stage, lieu, année de début des études et modules de formation restent à compléter.

## P4 — Design, UX, accessibilité

- Contraste des textes secondaires renforcé en thèmes sombre et clair ; rythme vertical resserré.
- Ancre de navigation active, bouton retour en haut, libellés accessibles et prise en compte de `prefers-reduced-motion`.
- CV disponible depuis la navigation mobile ; alt descriptifs conservés pour les images de projets.
- Vérification visuelle mobile à 375 px : capture ci-dessous. L'environnement de navigateur intégré plafonne le viewport réel à 767 px ; la capture desktop n'a donc pas pu être produite de manière fiable. Tests Lighthouse et audit WCAG automatisé non exécutés.

## P5 — SEO, performance, qualité

- Métadonnées françaises, Open Graph généré, Twitter card, JSON-LD Person, favicon, `robots.txt` et sitemap incluant l'étude de cas.
- Les URL canoniques, Open Graph, sitemap et robots utilisent `NEXT_PUBLIC_SITE_URL`, ou le hostname de déploiement Vercel s'il est fourni. Sans domaine connu, aucune URL canonique absolue n'est publiée ; renseigner le domaine avant publication pour activer ces références.
- Aucun outil d'analytics ajouté sans choix préalable d'outil et de politique de consentement.
- Lighthouse avant : non mesuré. Lighthouse après : non mesuré. Aucune note n'est estimée ou extrapolée.

### Capture

- Mobile (375 px) : [docs/screenshots/portfolio-mobile.png](./docs/screenshots/portfolio-mobile.png)
- Desktop : à capturer dans un navigateur local ou sur le déploiement ; les captures faites depuis le navigateur intégré étaient mal cadrées et ont été écartées.

## À compléter par moi

- `data/profile.ts` — `location`, `lookingFor.start` : ville/pays et date de début souhaitée.
- `data/profile.ts` — `languages` : niveau d'arabe, s'il doit être affiché. Les niveaux français B2 et anglais B1 sont renseignés. Fournir aussi les textes anglais avant d'ajouter le sélecteur FR/EN.
- `data/experience.ts` — dates exactes et lieu du PFA Lama ; année exacte de début et modules clés de formation.
- `public/` et `data/profile.ts` — CV anglais final, si disponible.
- `data/projects.ts` — confirmation des dépôts à présenter, liens de démo réellement accessibles et rapports publics.
- `app/projects/lama-credentialing/page.tsx` — autorisation écrite des captures du dashboard après contrôle d'absence de données réelles ; scores détaillés des quatre modèles et données de courbe LoRA publiables.
- `data/projects.ts` — scores BLEU-1 à BLEU-4 des trois décodeurs et exemples de légendes autorisés.
- `data/projects.ts` — baseline mesurée de News Classification et analyse d'erreurs vérifiée.
- Configuration du déploiement — domaine final contrôlé par le propriétaire, puis `NEXT_PUBLIC_SITE_URL`.
- Contact — certifications, hackathons, distinctions uniquement si des éléments vérifiables sont fournis.

## Suggestions optionnelles non implémentées (par impact)

1. **Élevé** — Ajouter une version anglaise complète avec routes/localisation et choix FR/EN après validation des traductions.
2. **Élevé** — Publier des démos stables pour au moins trois projets et ajouter des médias optimisés après vérification des droits.
3. **Élevé** — Compléter l'étude de cas avec les quatre modèles, leur benchmark complet et la courbe LoRA publiable.
4. **Moyen** — Ajouter les baselines et exemples d'erreurs confirmés de News Classification, ainsi que le tableau BLEU et exemples d'Image Captioning.
5. **Moyen** — Configurer un domaine dédié (par exemple `aymanebadia.dev`, disponibilité et propriété à vérifier), puis mesurer Lighthouse sur le déploiement.
6. **Moyen** — Choisir une solution d'analytics respectueuse de la vie privée et définir l'information/consentement requis avant intégration.
