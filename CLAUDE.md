# À table pour les Fêtes — site de recettes de Ki

Site de recettes québécoises par saison (Noël, temps des sucres, Pâques, Fête nationale/BBQ, Action de grâce, Halloween). Le propriétaire est Ki, qui écrit en français, style simple et direct. Tout le texte du site est en français québécois (interface aussi en anglais via le bouton EN).

## Comment le site est construit

- `index.html` est le site publié (un seul fichier, sans dépendance sauf Google Fonts). **Ne jamais le modifier à la main** : il est généré.
- `python3 build.py` assemble `index.html` à partir de `src/`.
- `src/template.html` : la page (HTML, CSS, logique JS). Placeholders `/*DATA*/`, `/*MORE*/`, `/*ART*/`.
- `src/data/01-noel.js` : déclare `colors`, `data` (tableau `[nom, catégorie, temps, niveau, enfants, saison]`) et `full` (recettes complètes de Noël).
- `src/data/02-more.js` … : ajoutent des recettes à `full`. `03-seasons.js` définit `SEASONS` et ajoute les recettes des autres saisons avec `R(...)`. `04`–`06` réécrivent les étapes détaillées avec `S(nom, [étapes])`.
- `src/art.js` : dessins SVG de chaque plat (`ART(nom)`). Toute nouvelle recette doit avoir une entrée dans la table `m` (sinon elle s'affiche sans dessin).
- Traductions de l'interface : objet `I18N`, `CAT_EN`, `SEASON_EN` dans `src/template.html`. Le contenu des recettes est en français seulement pour l'instant.

## Règles pour ajouter ou modifier une recette

- Ajouter une recette : `R(nom, catégorie, temps, niveau, enfants, saison, portions, [ingrédients], [étapes], note)` dans un fichier de `src/data/`, plus un dessin dans `src/art.js`.
- Les étapes sont détaillées : une préparation par étape, avec les quantités, la température du four en °C et °F, le temps et le signe que c'est prêt.
- Unités québécoises : ml et tasses, g et lb, °C et °F. Pas d'étiquettes « Enfants/Adulte » dans les étapes.
- Les recettes sont écrites par nous : jamais copier le texte ou les photos d'un autre site.
- Pas de photos tant que Ki n'en fournit pas lui-même (les dessins SVG en tiennent lieu).

## Après chaque changement

1. `python3 build.py`
2. Vérifier le JavaScript : extraire le `<script>` final d'`index.html` et lancer `node --check`.
3. Commit avec un message clair en français, puis push sur `main`. Netlify remet le site en ligne automatiquement.

## Ce que le site ne peut pas faire (ne pas simuler)

Pas de comptes utilisateurs ni de notifications (pas de serveur). Pas de vidéos. Ne pas ajouter de faux formulaires qui ne mènent nulle part.

## À compléter par Ki

`[TON NOM]`, `[TON COURRIEL]` et les liens des réseaux sociaux dans le pied de page.
