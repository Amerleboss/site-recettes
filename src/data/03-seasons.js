colors['Brunch'] = '#2A5C85';
colors['Collations'] = '#5E6B2E';
const SEASONS = [
  { id: 'noel', name: 'Noël et jour de l’An', when: 'Décembre', color: '#A3263A', now: true, eyebrow: 'Cuisine du temps des Fêtes', title: 'Les recettes des Fêtes à faire en famille', lead: 'De la tourtière au sucre à la crème, des classiques québécois pensés pour cuisiner ensemble. Chaque recette a ses ingrédients et ses étapes détaillées, pas à pas.', feat: 'Tourtière classique (pâté à la viande)' },
  { id: 'sucres', name: 'Temps des sucres', when: 'Mars et avril', color: '#9A5A12', eyebrow: 'Saison des sucres', title: 'Un repas de cabane à sucre à la maison', lead: 'Oreilles de crisse, omelette soufflée et tire sur la neige : tout l’érable du printemps, sans sortir de chez vous.', feat: 'Omelette soufflée à l’érable' },
  { id: 'paques', name: 'Pâques', when: 'Avril', color: '#6E3580', eyebrow: 'Le dîner de Pâques', title: 'Un brunch et un repas de Pâques en famille', lead: 'Le jambon, les légumes du printemps et des petits nids en chocolat à préparer avec les enfants.', feat: 'Jambon de Pâques à l’ananas' },
  { id: 'ete', name: 'Fête nationale et BBQ', when: 'Juin à août', color: '#2A5C85', eyebrow: 'L’été au Québec', title: 'Les recettes de la Saint-Jean et du BBQ', lead: 'Épluchette de blé d’Inde, burgers, salades et gâteau aux fraises pour les soupers dehors.', feat: 'Burgers maison' },
  { id: 'action', name: 'Action de grâce', when: 'Octobre', color: '#B5542C', eyebrow: 'Le temps des récoltes', title: 'Un repas d’Action de grâce bien d’ici', lead: 'Courges, pommes et citrouille : les saveurs de l’automne pour une grande tablée.', feat: 'Tarte à la citrouille' },
  { id: 'halloween', name: 'Halloween', when: 'Fin octobre', color: '#3B3B3B', eyebrow: 'Recettes qui font peur', title: 'L’Halloween dans l’assiette', lead: 'Des recettes rigolotes et un peu effrayantes à faire avec les enfants avant la tournée des bonbons.', feat: 'Pommes au caramel' }
];
const R = (name, cat, time, level, kids, season, por, ing, steps, note) => {
  data.push([name, cat, time, level, kids, season]);
  full[name] = { por, ing, steps: steps.map(s => ['', s]), note: note || '' };
};

// Temps des sucres
R('Omelette soufflée à l’érable', 'Brunch', '35 min', 'Facile', true, 'sucres', '6 portions',
  ['6 œufs, jaunes et blancs séparés', '125 ml (½ tasse) de lait', '30 ml (2 c. à soupe) de farine', '1 pincée de sel', '30 ml (2 c. à soupe) de beurre', '125 ml (½ tasse) de sirop d’érable'],
  ['Préchauffer le four à 180 °C (350 °F).', 'Fouetter les jaunes avec le lait, la farine et le sel.', 'Monter les blancs en neige ferme, puis les plier délicatement dans les jaunes.', 'Faire fondre le beurre dans une poêle allant au four, verser le mélange et cuire 2 minutes sur le feu.', 'Terminer au four de 15 à 20 minutes, jusqu’à ce que l’omelette soit gonflée et dorée. Arroser de sirop d’érable et servir tout de suite.'],
  'Elle dégonfle vite : on la sert dès la sortie du four.');
R('Oreilles de crisse', 'Accompagnements', '1 h 15', 'Moyen', false, 'sucres', '6 portions',
  ['500 g de lard salé entrelardé', 'Eau pour dessaler'],
  ['Couper le lard en tranches très minces.', 'Faire tremper 30 minutes dans l’eau froide pour enlever le sel, puis bien éponger.', 'Cuire à feu moyen dans une grande poêle, sans gras, en retournant souvent, jusqu’à ce que ce soit doré et croustillant.', 'Égoutter sur du papier absorbant. Servir avec du sirop d’érable.'],
  'Le gras éclabousse : garde un couvercle à portée de main.');
R('Saucisses dans le sirop d’érable', 'Plats', '30 min', 'Facile', true, 'sucres', '4 portions',
  ['12 saucisses à déjeuner', '125 ml (½ tasse) de sirop d’érable', '15 ml (1 c. à soupe) de moutarde de Dijon'],
  ['Dorer les saucisses dans une poêle à feu moyen de 10 à 12 minutes, jusqu’à ce qu’elles soient bien cuites.', 'Retirer le gras de la poêle.', 'Ajouter le sirop d’érable et la moutarde, puis laisser réduire 3 minutes en enrobant les saucisses.']);
R('Patates rissolées', 'Accompagnements', '40 min', 'Facile', true, 'sucres', '6 portions',
  ['1 kg de petites pommes de terre grelots', '45 ml (3 c. à soupe) de beurre', '1 oignon émincé', 'Sel et poivre', 'Persil haché'],
  ['Laver les pommes de terre et les cuire 10 minutes dans l’eau salée. Égoutter.', 'Couper en deux.', 'Faire dorer dans le beurre avec l’oignon environ 15 minutes, en brassant de temps en temps.', 'Saler, poivrer et garnir de persil.']);
R('Pouding au pain à l’érable', 'Desserts', '1 h', 'Facile', true, 'sucres', '8 portions',
  ['8 tranches de pain rassis en cubes', '4 œufs', '500 ml (2 tasses) de lait', '250 ml (1 tasse) de sirop d’érable', '5 ml (1 c. à thé) de vanille', '125 ml (½ tasse) de raisins secs (facultatif)'],
  ['Préchauffer le four à 180 °C (350 °F) et beurrer un plat de 20 x 30 cm.', 'Répartir le pain et les raisins dans le plat.', 'Fouetter les œufs, le lait, 175 ml de sirop d’érable et la vanille, puis verser sur le pain. Laisser imbiber 10 minutes.', 'Cuire de 40 à 45 minutes. Arroser du reste du sirop avant de servir.']);
R('Tire d’érable sur la neige', 'Biscuits et sucreries', '30 min', 'Moyen', true, 'sucres', '6 portions',
  ['500 ml (2 tasses) de sirop d’érable', 'Un grand plat de neige propre bien tassée (ou de glace concassée)', 'Bâtonnets de bois'],
  ['Faire bouillir le sirop sans brasser jusqu’à 113 °C (235 °F) au thermomètre.', 'Laisser tiédir 1 à 2 minutes.', 'Verser en minces lignes sur la neige.', 'Attendre quelques secondes, puis enrouler la tire autour d’un bâtonnet.'],
  'Le sirop bouillant brûle : c’est un adulte qui le verse.');

// Pâques
R('Jambon de Pâques à l’ananas', 'Plats', '2 h 30', 'Facile', true, 'paques', '12 portions',
  ['1 jambon fumé avec os, déjà cuit, de 3 à 4 kg', '1 boîte (540 ml) d’ananas en tranches, avec le jus', '125 ml (½ tasse) de cassonade', '30 ml (2 c. à soupe) de moutarde de Dijon', 'Clous de girofle'],
  ['Préchauffer le four à 165 °C (325 °F). Quadriller le gras du jambon et piquer les clous de girofle.', 'Mettre le jambon dans une rôtissoire avec le jus d’ananas. Couvrir et cuire 1 h 30.', 'Mélanger la cassonade et la moutarde, badigeonner le jambon et fixer les tranches d’ananas avec des cure-dents.', 'Cuire à découvert de 30 à 45 minutes en arrosant souvent.']);
R('Gigot d’agneau à l’ail et au romarin', 'Plats', '2 h', 'Moyen', false, 'paques', '8 portions',
  ['1 gigot d’agneau avec os d’environ 2,5 kg', '6 gousses d’ail en lamelles', '3 branches de romarin', '45 ml (3 c. à soupe) d’huile d’olive', 'Sel et poivre'],
  ['Sortir le gigot du frigo 1 h avant. Préchauffer le four à 200 °C (400 °F).', 'Faire des petites entailles et y glisser l’ail et des brins de romarin.', 'Badigeonner d’huile, saler et poivrer.', 'Rôtir de 1 h 15 à 1 h 30, jusqu’à 60 °C (140 °F) à cœur pour une viande rosée, ou 70 °C (160 °F) pour une viande à point.', 'Laisser reposer 15 minutes sous un papier d’aluminium avant de trancher.']);
R('Gratin dauphinois', 'Accompagnements', '1 h 30', 'Facile', true, 'paques', '8 portions',
  ['1,5 kg de pommes de terre', '500 ml (2 tasses) de crème 15 %', '250 ml (1 tasse) de lait', '2 gousses d’ail', '250 ml (1 tasse) de gruyère râpé', 'Muscade, sel et poivre'],
  ['Préchauffer le four à 180 °C (350 °F). Frotter un plat avec une gousse d’ail coupée.', 'Trancher finement les pommes de terre.', 'Chauffer la crème, le lait, l’ail haché et les épices.', 'Étager les pommes de terre dans le plat, couvrir du mélange chaud et du fromage.', 'Cuire de 1 h à 1 h 15, jusqu’à ce que ce soit doré et tendre.']);
R('Asperges rôties au parmesan', 'Accompagnements', '20 min', 'Facile', true, 'paques', '6 portions',
  ['2 bottes d’asperges', '30 ml (2 c. à soupe) d’huile d’olive', '60 ml (¼ tasse) de parmesan râpé', 'Le zeste de 1 citron', 'Sel et poivre'],
  ['Préchauffer le four à 220 °C (425 °F).', 'Casser le bout dur des asperges.', 'Les étaler sur une plaque, arroser d’huile, saler et poivrer.', 'Rôtir de 10 à 12 minutes, puis parsemer de parmesan et de zeste de citron.']);
R('Gâteau aux carottes', 'Desserts', '1 h 30', 'Moyen', true, 'paques', '12 portions',
  ['500 ml (2 tasses) de farine', '10 ml (2 c. à thé) de poudre à pâte', '5 ml (1 c. à thé) de bicarbonate de soude', '10 ml (2 c. à thé) de cannelle', '4 œufs', '375 ml (1 ½ tasse) de sucre', '250 ml (1 tasse) d’huile', '750 ml (3 tasses) de carottes râpées', 'Glaçage : 250 g de fromage à la crème, 60 ml de beurre mou, 500 ml de sucre à glacer'],
  ['Préchauffer le four à 180 °C (350 °F) et beurrer un moule de 23 x 33 cm.', 'Mélanger la farine, la poudre à pâte, le bicarbonate et la cannelle.', 'Fouetter les œufs, le sucre et l’huile, puis ajouter les ingrédients secs et les carottes.', 'Cuire de 40 à 45 minutes. Laisser refroidir.', 'Battre le fromage à la crème, le beurre et le sucre à glacer, puis glacer le gâteau.']);
R('Nids de Pâques en chocolat', 'Biscuits et sucreries', '30 min', 'Facile', true, 'paques', '12 nids',
  ['200 g de chocolat au lait', '30 ml (2 c. à soupe) de beurre', '500 ml (2 tasses) de nouilles chinoises sèches ou de céréales de blé filamenté émiettées', '36 petits œufs en chocolat'],
  ['Faire fondre le chocolat et le beurre à feu doux.', 'Ajouter les nouilles ou les céréales et bien enrober.', 'Former 12 petits nids dans des moules à muffins en papier.', 'Déposer 3 petits œufs dans chaque nid et réfrigérer 1 h.']);

// Fête nationale et BBQ
R('Épluchette de blé d’Inde', 'Accompagnements', '30 min', 'Facile', true, 'ete', '12 épis',
  ['12 épis de maïs frais', 'Beurre', 'Sel'],
  ['Éplucher les épis et enlever les fils.', 'Porter une grande marmite d’eau à ébullition.', 'Cuire les épis de 5 à 7 minutes.', 'Servir avec du beurre et du sel.']);
R('Brochettes de poulet au BBQ', 'Plats', '45 min + marinade', 'Facile', true, 'ete', '6 portions',
  ['900 g de poitrines de poulet en cubes', '1 poivron rouge et 1 poivron vert en morceaux', '1 oignon rouge en morceaux', '60 ml (¼ tasse) d’huile d’olive', '30 ml (2 c. à soupe) de jus de citron', '2 gousses d’ail hachées', '5 ml (1 c. à thé) de paprika', 'Brochettes'],
  ['Mélanger l’huile, le citron, l’ail et le paprika. Y faire mariner le poulet au moins 1 h au frigo.', 'Faire tremper les brochettes de bois 30 minutes dans l’eau.', 'Enfiler le poulet et les légumes en alternant.', 'Griller à feu moyen de 12 à 15 minutes en tournant, jusqu’à ce que le poulet ne soit plus rosé.'],
  'Lave-toi les mains après avoir enfilé le poulet cru.');
R('Burgers maison', 'Plats', '30 min', 'Facile', true, 'ete', '6 burgers',
  ['900 g de bœuf haché mi-maigre', '1 œuf', '60 ml (¼ tasse) de chapelure', '15 ml (1 c. à soupe) de sauce Worcestershire', 'Sel et poivre', '6 pains à hamburger', 'Laitue, tomate, fromage et condiments'],
  ['Mélanger la viande, l’œuf, la chapelure, la sauce Worcestershire, le sel et le poivre.', 'Former 6 galettes un peu plus larges que les pains, avec un petit creux au centre.', 'Griller à feu moyen-vif de 5 à 6 minutes de chaque côté, jusqu’à 71 °C (160 °F) au centre.', 'Garnir les pains au goût.']);
R('Salade de pâtes', 'Accompagnements', '25 min', 'Facile', true, 'ete', '8 portions',
  ['450 g de pâtes courtes (fusilli)', '1 poivron rouge en dés', '1 concombre en dés', '250 ml (1 tasse) de tomates cerises', '125 ml (½ tasse) de mayonnaise', '60 ml (¼ tasse) de vinaigrette italienne', 'Sel et poivre'],
  ['Cuire les pâtes, les rincer à l’eau froide et bien égoutter.', 'Couper les légumes.', 'Mélanger la mayonnaise et la vinaigrette.', 'Tout mélanger et réfrigérer 1 h.']);
R('Salade de pommes de terre', 'Accompagnements', '45 min', 'Facile', true, 'ete', '8 portions',
  ['1,5 kg de pommes de terre grelots', '3 œufs cuits durs', '2 branches de céleri en dés', '3 oignons verts hachés', '175 ml (¾ tasse) de mayonnaise', '15 ml (1 c. à soupe) de moutarde', 'Sel et poivre'],
  ['Cuire les pommes de terre dans l’eau salée environ 15 minutes. Égoutter et laisser tiédir.', 'Couper les pommes de terre et les œufs en morceaux.', 'Mélanger la mayonnaise et la moutarde.', 'Ajouter le céleri et les oignons verts, puis mélanger le tout. Réfrigérer avant de servir.']);
R('Gâteau aux fraises', 'Desserts', '1 h', 'Facile', true, 'ete', '8 portions',
  ['Biscuits : 500 ml (2 tasses) de farine', 'Biscuits : 60 ml (¼ tasse) de sucre', 'Biscuits : 15 ml (1 c. à soupe) de poudre à pâte', 'Biscuits : 125 ml (½ tasse) de beurre froid', 'Biscuits : 175 ml (¾ tasse) de lait', '1 L de fraises du Québec tranchées', '30 ml (2 c. à soupe) de sucre', '250 ml (1 tasse) de crème 35 % fouettée'],
  ['Mélanger les fraises avec 30 ml de sucre et laisser reposer.', 'Mélanger la farine, le sucre et la poudre à pâte, puis sabler le beurre avec les doigts.', 'Ajouter le lait, former 8 biscuits et cuire à 200 °C (400 °F) de 15 à 18 minutes.', 'Couper les biscuits en deux et garnir de fraises et de crème fouettée.']);
R('Limonade maison', 'Boissons', '15 min', 'Facile', true, 'ete', '2 L',
  ['250 ml (1 tasse) de jus de citron frais (environ 6 citrons)', '250 ml (1 tasse) de sucre', '1,75 L d’eau froide', 'Glaçons et tranches de citron'],
  ['Presser les citrons.', 'Dissoudre le sucre dans 250 ml d’eau chaude.', 'Mélanger le jus, le sirop et le reste de l’eau dans un grand pichet.', 'Servir avec des glaçons et des tranches de citron.']);

// Action de grâce
R('Poulet rôti aux herbes', 'Plats', '1 h 45', 'Facile', true, 'action', '6 portions',
  ['1 poulet entier d’environ 2 kg', '60 ml (¼ tasse) de beurre ramolli', '15 ml (1 c. à soupe) de thym', '2 gousses d’ail hachées', '1 citron coupé en deux', 'Sel et poivre'],
  ['Préchauffer le four à 200 °C (400 °F).', 'Mélanger le beurre, le thym et l’ail, puis en badigeonner le poulet. Mettre le citron dans la cavité.', 'Rôtir environ 1 h 30, jusqu’à 82 °C (180 °F) dans la cuisse.', 'Laisser reposer 15 minutes avant de découper.']);
R('Pâté chinois', 'Plats', '1 h', 'Facile', true, 'action', '6 portions',
  ['675 g de bœuf haché', '1 oignon haché', '1 boîte (398 ml) de maïs en crème', '1 boîte (341 ml) de maïs en grains égoutté', '1 kg de pommes de terre', '60 ml (¼ tasse) de beurre', '125 ml (½ tasse) de lait', 'Paprika'],
  ['Cuire les pommes de terre et les réduire en purée avec le beurre et le lait.', 'Cuire le bœuf et l’oignon jusqu’à ce que la viande ne soit plus rosée.', 'Dans un plat, étager le bœuf, le maïs en grains et le maïs en crème, puis la purée.', 'Saupoudrer de paprika et cuire à 190 °C (375 °F) environ 30 minutes.']);
R('Soupe à la courge', 'Entrées', '45 min', 'Facile', true, 'action', '6 portions',
  ['1 courge musquée pelée en cubes (environ 1 kg)', '1 oignon haché', '1 pomme pelée en cubes', '1 L de bouillon de légumes', '125 ml (½ tasse) de crème 15 %', '30 ml (2 c. à soupe) de beurre', 'Muscade, sel et poivre'],
  ['Faire revenir l’oignon dans le beurre.', 'Ajouter la courge, la pomme et le bouillon. Laisser mijoter 25 minutes.', 'Réduire en purée lisse au mélangeur.', 'Ajouter la crème et la muscade. Saler et poivrer.'],
  'Laisse la soupe tiédir un peu avant de la passer au mélangeur.');
R('Courge musquée rôtie à l’érable', 'Accompagnements', '45 min', 'Facile', true, 'action', '6 portions',
  ['1 courge musquée pelée en cubes', '30 ml (2 c. à soupe) d’huile d’olive', '30 ml (2 c. à soupe) de sirop d’érable', '5 ml (1 c. à thé) de cannelle', 'Sel'],
  ['Préchauffer le four à 200 °C (400 °F).', 'Mélanger la courge avec l’huile, le sirop, la cannelle et le sel.', 'Étaler sur une plaque et rôtir de 30 à 35 minutes en retournant à mi-cuisson.']);
R('Tarte à la citrouille', 'Desserts', '1 h 15', 'Facile', true, 'action', '8 portions',
  ['1 abaisse de pâte à tarte non cuite', '1 boîte (398 ml) de purée de citrouille', '1 boîte (300 ml) de lait condensé sucré', '2 œufs', '5 ml (1 c. à thé) de cannelle', '2 ml (½ c. à thé) de gingembre moulu', '1 ml (¼ c. à thé) de muscade'],
  ['Préchauffer le four à 220 °C (425 °F).', 'Fouetter la citrouille, le lait condensé, les œufs et les épices.', 'Verser dans l’abaisse.', 'Cuire 15 minutes, puis baisser à 180 °C (350 °F) et cuire de 35 à 40 minutes, jusqu’à ce que le centre soit pris.']);
R('Compote de pommes maison', 'Desserts', '30 min', 'Facile', true, 'action', 'Environ 1 L',
  ['8 pommes McIntosh pelées en morceaux', '125 ml (½ tasse) d’eau', '30 à 60 ml (2 à 4 c. à soupe) de sucre', '5 ml (1 c. à thé) de cannelle'],
  ['Mettre les pommes et l’eau dans une casserole.', 'Couvrir et cuire à feu moyen-doux environ 20 minutes, en brassant de temps en temps.', 'Écraser au pilon, puis ajouter le sucre et la cannelle au goût.']);
R('Muffins aux pommes et cannelle', 'Brunch', '40 min', 'Facile', true, 'action', '12 muffins',
  ['500 ml (2 tasses) de farine', '175 ml (¾ tasse) de cassonade', '10 ml (2 c. à thé) de poudre à pâte', '10 ml (2 c. à thé) de cannelle', '1 œuf', '250 ml (1 tasse) de lait', '80 ml (⅓ tasse) d’huile', '2 pommes en petits dés'],
  ['Préchauffer le four à 190 °C (375 °F) et placer des moules en papier.', 'Mélanger les ingrédients secs dans un bol, et l’œuf, le lait et l’huile dans un autre.', 'Unir les deux mélanges juste assez, puis ajouter les pommes.', 'Remplir les moules et cuire de 20 à 22 minutes.']);

// Halloween
R('Biscuits citrouilles', 'Biscuits et sucreries', '1 h', 'Facile', true, 'halloween', 'Environ 24 biscuits',
  ['250 ml (1 tasse) de beurre mou', '250 ml (1 tasse) de sucre', '1 œuf', '5 ml (1 c. à thé) de vanille', '625 ml (2 ½ tasses) de farine', '5 ml (1 c. à thé) de poudre à pâte', 'Glaçage orange et vert'],
  ['Crémer le beurre et le sucre, puis ajouter l’œuf et la vanille.', 'Ajouter la farine et la poudre à pâte. Réfrigérer 30 minutes.', 'Abaisser et découper des citrouilles à l’emporte-pièce.', 'Cuire à 180 °C (350 °F) de 10 à 12 minutes, puis décorer une fois refroidis.']);
R('Chili de sorcière', 'Plats', '1 h', 'Facile', true, 'halloween', '8 portions',
  ['900 g de bœuf haché', '1 oignon haché', '1 poivron vert en dés', '1 boîte (796 ml) de tomates en dés', '2 boîtes (540 ml) de haricots rouges rincés', '30 ml (2 c. à soupe) d’assaisonnement à chili', 'Fromage râpé et crème sure'],
  ['Cuire le bœuf, l’oignon et le poivron jusqu’à ce que la viande ne soit plus rosée.', 'Ajouter les tomates, les haricots et l’assaisonnement.', 'Laisser mijoter 30 minutes.', 'Servir garni de fromage et d’une toile d’araignée dessinée à la crème sure.']);
R('Momies en saucisses', 'Collations', '30 min', 'Facile', true, 'halloween', '16 momies',
  ['1 paquet (400 g) de pâte feuilletée', '16 saucisses fumées cuites (type hot-dog cocktail)', '1 œuf battu', 'Moutarde pour les yeux'],
  ['Préchauffer le four à 200 °C (400 °F).', 'Couper la pâte en fines lanières.', 'Enrouler les lanières autour des saucisses en laissant un espace pour le visage. Badigeonner d’œuf.', 'Cuire de 15 à 18 minutes et ajouter deux points de moutarde pour les yeux.']);
R('Graines de citrouille grillées', 'Collations', '35 min', 'Facile', true, 'halloween', 'Environ 500 ml',
  ['Les graines de 1 grosse citrouille', '15 ml (1 c. à soupe) d’huile', '5 ml (1 c. à thé) de sel', '2 ml (½ c. à thé) de paprika'],
  ['Retirer les graines de la citrouille et enlever les filaments. Rincer et bien éponger.', 'Mélanger avec l’huile, le sel et le paprika.', 'Étaler sur une plaque et griller à 160 °C (325 °F) de 20 à 25 minutes, en brassant à mi-cuisson.']);
R('Pommes au caramel', 'Desserts', '45 min', 'Moyen', true, 'halloween', '8 pommes',
  ['8 petites pommes', '8 bâtonnets de bois', '1 sac (300 g) de caramels mous', '30 ml (2 c. à soupe) de lait', 'Arachides ou bonbons hachés (facultatif)'],
  ['Laver et bien sécher les pommes. Planter un bâtonnet dans chacune.', 'Faire fondre les caramels avec le lait à feu doux en brassant.', 'Tremper les pommes dans le caramel en les tournant.', 'Rouler dans les garnitures et laisser figer sur du papier parchemin.'],
  'Le caramel chaud colle et brûle : laisse-le tiédir un peu avant que les enfants trempent les pommes.');
R('Brownies toiles d’araignée', 'Desserts', '50 min', 'Facile', true, 'halloween', '16 carrés',
  ['125 ml (½ tasse) de beurre', '200 g de chocolat mi-sucré', '250 ml (1 tasse) de sucre', '2 œufs', '5 ml (1 c. à thé) de vanille', '175 ml (¾ tasse) de farine', 'Glaçage blanc en tube'],
  ['Préchauffer le four à 180 °C (350 °F) et tapisser un moule carré de 20 cm.', 'Faire fondre le beurre et le chocolat, puis ajouter le sucre, les œufs et la vanille.', 'Ajouter la farine et verser dans le moule. Cuire de 25 à 30 minutes.', 'Une fois refroidi, dessiner des cercles de glaçage et les tirer du centre vers l’extérieur avec un cure-dent pour faire une toile.']);
R('Punch de sorcière', 'Boissons', '10 min', 'Facile', true, 'halloween', '2 L',
  ['1 L de jus de pomme', '1 L de boisson gazeuse au citron-lime', '250 ml (1 tasse) de sorbet à la lime', 'Bonbons en forme de vers'],
  ['Verser le jus de pomme dans un grand bol à punch.', 'Ajouter la boisson gazeuse juste avant de servir.', 'Déposer des boules de sorbet qui font de la mousse verte et accrocher des bonbons au bord des verres.']);

data.forEach(d => { if (!d[5]) d[5] = 'noel'; });
