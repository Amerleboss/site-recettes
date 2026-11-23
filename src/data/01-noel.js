var colors = {
      'Entrées': '#2F6B4C',
      'Plats': '#A3263A',
      'Accompagnements': '#9A5A12',
      'Desserts': '#6E3580',
      'Biscuits et sucreries': '#A3432C',
      'Brunch du 25': '#2A5C85',
      'Boissons': '#6B4E2E'
    };
    var F = 'Facile', M = 'Moyen', D = 'Défi';
    var data = [
      ['Cretons maison', 'Entrées', '2 h', F, false],
      ['Pâté de foie', 'Entrées', '1 h 15', M, false],
      ['Trempette chaude aux épinards', 'Entrées', '35 min', F, true],
      ['Bouchées de saucisse feuilletées', 'Entrées', '45 min', F, true],
      ['Œufs farcis', 'Entrées', '30 min', F, true],
      ['Crevettes cocktail', 'Entrées', '20 min', F, true],
      ['Brie fondant aux canneberges', 'Entrées', '25 min', F, true],
      ['Soupe aux pois', 'Entrées', '3 h', F, false],
      ['Tourtière du Lac-Saint-Jean', 'Plats', '8 h + 1 nuit', D, true],
      ['Tourtière classique (pâté à la viande)', 'Plats', '1 h 45', M, true],
      ['Ragoût de pattes et boulettes', 'Plats', '4 h', M, true],
      ['Dinde rôtie et farce aux pommes', 'Plats', '4 h 30', D, true],
      ['Jambon glacé à l’érable', 'Plats', '2 h 30', F, true],
      ['Pâté au poulet', 'Plats', '1 h 30', M, true],
      ['Cipaille', 'Plats', '7 h + 1 nuit', D, true],
      ['Fèves au lard', 'Plats', '7 h + 1 nuit', F, true],
      ['Saumon en croûte', 'Plats', '1 h', M, true],
      ['Tourtière aux légumes', 'Plats', '1 h 30', M, true],
      ['Purée de pommes de terre', 'Accompagnements', '40 min', F, true],
      ['Sauce aux canneberges', 'Accompagnements', '20 min', F, true],
      ['Légumes racines à l’érable', 'Accompagnements', '50 min', F, true],
      ['Farce traditionnelle', 'Accompagnements', '45 min', F, true],
      ['Salade de chou crémeuse', 'Accompagnements', '20 min', F, true],
      ['Betteraves marinées', 'Accompagnements', '1 h', M, false],
      ['Choux de Bruxelles au bacon', 'Accompagnements', '30 min', F, false],
      ['Sauce brune maison', 'Accompagnements', '15 min', F, false],
      ['Bûche de Noël', 'Desserts', '2 h 30', D, true],
      ['Tarte au sucre', 'Desserts', '1 h 15', F, true],
      ['Pouding chômeur', 'Desserts', '50 min', F, true],
      ['Tarte aux pacanes', 'Desserts', '1 h 15', M, true],
      ['Gâteau aux fruits', 'Desserts', '3 h', M, true],
      ['Grands-pères dans le sirop', 'Desserts', '40 min', F, true],
      ['Pets de sœur', 'Desserts', '45 min', F, true],
      ['Tarte au sirop d’érable', 'Desserts', '1 h 15', F, true],
      ['Croustade aux pommes', 'Desserts', '1 h', F, true],
      ['Gâteau Reine-Élisabeth', 'Desserts', '1 h 15', M, true],
      ['Sucre à la crème', 'Biscuits et sucreries', '30 min + refroidissement', F, true],
      ['Beignes de grand-maman', 'Biscuits et sucreries', '2 h', D, true],
      ['Biscuits en pain d’épices', 'Biscuits et sucreries', '1 h 30', M, true],
      ['Sablés de Noël à décorer', 'Biscuits et sucreries', '1 h 15', F, true],
      ['Fudge au chocolat', 'Biscuits et sucreries', '20 min', F, true],
      ['Tire Sainte-Catherine', 'Biscuits et sucreries', '45 min', M, true],
      ['Boules au beurre d’arachide', 'Biscuits et sucreries', '1 h', F, true],
      ['Truffes au chocolat', 'Biscuits et sucreries', '1 h', F, true],
      ['Crêpes au sirop d’érable', 'Brunch du 25', '30 min', F, true],
      ['Pain doré brioché', 'Brunch du 25', '25 min', F, true],
      ['Omelette au four', 'Brunch du 25', '40 min', F, true],
      ['Muffins canneberges et orange', 'Brunch du 25', '35 min', F, true],
      ['Chocolat chaud maison', 'Boissons', '10 min', F, true],
      ['Lait de poule sans alcool', 'Boissons', '15 min', F, true]
    ];

    var full = {
      'Tourtière du Lac-Saint-Jean': {
        por: '12 portions',
        ing: ['1 kg de porc en petits cubes', '1 kg de bœuf en petits cubes', '500 g de poulet ou de veau en petits cubes', '2 oignons hachés', '1,5 kg de pommes de terre en petits cubes', '1 L (4 tasses) de bouillon de bœuf', '10 ml (2 c. à thé) de sarriette', 'Sel et poivre', 'Pâte à tarte pour 2 grandes abaisses'],
        steps: [
          ['A', 'La veille, mélanger les viandes, les oignons, la sarriette, le sel et le poivre dans un grand bol. Couvrir et laisser au frigo toute la nuit.'],
          ['E', 'Le jour même, laver et éplucher les pommes de terre. Un adulte les coupe en petits cubes.'],
          ['A', 'Préchauffer le four à 200 °C (400 °F). Tapisser le fond et les côtés d’une grande cocotte en fonte avec une abaisse de pâte.'],
          ['E', 'Mélanger les pommes de terre avec la viande, puis remplir la cocotte. Bien se laver les mains après avoir touché la viande crue.'],
          ['A', 'Verser le bouillon jusqu’à hauteur de la garniture. Couvrir de la deuxième abaisse, sceller les bords et faire un trou au centre.'],
          ['E', 'Décorer le dessus avec des étoiles et des sapins découpés dans les retailles de pâte.'],
          ['A', 'Cuire 1 h à 200 °C (400 °F), puis baisser à 135 °C (275 °F) et cuire 6 h à couvert. Ajouter du bouillon par le trou si ça devient sec.']
        ],
        note: 'La cocotte est très lourde et brûlante à la sortie du four. Seul un adulte la manipule.'
      },
      'Tourtière classique (pâté à la viande)': {
        por: '6 à 8 portions',
        ing: ['2 abaisses de pâte à tarte de 23 cm (9 po)', '450 g (1 lb) de porc haché', '450 g (1 lb) de veau ou de bœuf haché', '1 oignon haché finement', '1 gousse d’ail hachée', '250 ml (1 tasse) de bouillon de bœuf', '2 ml (½ c. à thé) de cannelle', '1 ml (¼ c. à thé) de clou de girofle moulu', '125 ml (½ tasse) de chapelure', 'Sel et poivre', '1 œuf battu pour dorer'],
        steps: [
          ['A', 'Dans une grande poêle, cuire les viandes, l’oignon et l’ail à feu moyen en défaisant la viande.'],
          ['A', 'Ajouter le bouillon et les épices. Laisser mijoter environ 30 minutes, jusqu’à ce que le liquide soit presque tout évaporé.'],
          ['E', 'Hors du feu, ajouter la chapelure et mélanger. Laisser tiédir.'],
          ['E', 'Foncer le moule avec une abaisse, verser la garniture et couvrir de la deuxième abaisse. Pincer les bords pour sceller.'],
          ['E', 'Faire quelques entailles sur le dessus et badigeonner d’œuf battu au pinceau.'],
          ['A', 'Cuire au four à 200 °C (400 °F) de 40 à 45 minutes, jusqu’à ce que la pâte soit bien dorée.']
        ],
        note: 'Se congèle très bien avant cuisson. Ajoute environ 20 minutes au temps de cuisson si elle sort du congélateur.'
      },
      'Ragoût de pattes et boulettes': {
        por: '10 portions',
        ing: ['2 kg de pattes de porc en morceaux', '2 oignons coupés en quartiers', '3 L d’eau', '750 g de porc haché', '1 petit oignon haché très finement', '1 œuf', '60 ml (¼ tasse) de chapelure', '2 ml (½ c. à thé) de cannelle', '1 ml (¼ c. à thé) de clou de girofle moulu', '1 ml (¼ c. à thé) de muscade', '125 ml (½ tasse) de farine', 'Sel et poivre'],
        steps: [
          ['A', 'Mettre les pattes, les oignons, l’eau et la moitié des épices dans une grande marmite. Laisser mijoter 3 h à couvert.'],
          ['A', 'Retirer les pattes, les laisser tiédir et détacher la viande des os. Garder le bouillon.'],
          ['E', 'Dans un bol, mélanger le porc haché, l’oignon, l’œuf, la chapelure et le reste des épices. Former des boulettes de la grosseur d’une balle de ping-pong, puis bien se laver les mains.'],
          ['A', 'Pendant ce temps, griller la farine à sec dans une poêle en brassant sans arrêt, jusqu’à ce qu’elle devienne brun noisette.'],
          ['A', 'Cuire les boulettes dans le bouillon environ 30 minutes.'],
          ['E', 'Délayer la farine grillée dans 250 ml d’eau froide en fouettant pour enlever les grumeaux.'],
          ['A', 'Verser dans le ragoût en brassant jusqu’à ce que la sauce épaississe. Remettre la viande des pattes et servir avec des pommes de terre.']
        ],
        note: 'Comme la tourtière, le ragoût est encore meilleur le lendemain. On peut le faire d’avance.'
      },
      'Dinde rôtie et farce aux pommes': {
        por: '10 à 12 portions',
        ing: ['1 dinde de 5 à 6 kg (11 à 13 lb), décongelée', '125 ml (½ tasse) de beurre ramolli', 'Sel et poivre', 'Farce : 1 pain rassis en cubes (environ 2,5 L)', 'Farce : 1 oignon et 2 branches de céleri hachés', 'Farce : 2 pommes en dés', 'Farce : 60 ml (¼ tasse) de beurre', 'Farce : 10 ml (2 c. à thé) de sauge séchée', 'Farce : 250 ml (1 tasse) de bouillon de poulet'],
        steps: [
          ['E', 'Défaire le pain en petits cubes et laver les pommes.'],
          ['A', 'Faire revenir l’oignon, le céleri et les pommes dans le beurre. Mélanger avec le pain, la sauge et le bouillon. Mettre la farce dans un plat beurré.'],
          ['A', 'Préchauffer le four à 165 °C (325 °F). Éponger la dinde, la déposer dans une rôtissoire et la badigeonner de beurre. Saler et poivrer.'],
          ['A', 'Rôtir de 3 h 30 à 4 h en arrosant avec le jus toutes les 30 minutes. Couvrir de papier d’aluminium si elle brunit trop vite.'],
          ['A', 'La dinde est prête quand un thermomètre dans la cuisse indique 82 °C (180 °F). Mettre la farce au four pour les 45 dernières minutes.'],
          ['E', 'Pendant que la dinde repose 30 minutes sous un papier d’aluminium, mettre la table et préparer le plat de service.']
        ],
        note: 'Décongèle la dinde au frigo (environ 1 jour par 2 kg). Lave-toi les mains et tout ce qui a touché la volaille crue.'
      },
      'Jambon glacé à l’érable': {
        por: '12 portions',
        ing: ['1 jambon fumé avec os, déjà cuit, de 3 à 4 kg', '250 ml (1 tasse) de jus de pomme', '125 ml (½ tasse) de sirop d’érable', '30 ml (2 c. à soupe) de moutarde de Dijon', '30 ml (2 c. à soupe) de cassonade', '15 clous de girofle'],
        steps: [
          ['A', 'Préchauffer le four à 165 °C (325 °F). Enlever la couenne et faire des losanges dans le gras avec un couteau.'],
          ['E', 'Piquer un clou de girofle au centre de chaque losange.'],
          ['A', 'Mettre le jambon dans une rôtissoire avec le jus de pomme. Couvrir et cuire 1 h 30.'],
          ['E', 'Pendant ce temps, mélanger le sirop d’érable, la moutarde et la cassonade dans un bol.'],
          ['A', 'Badigeonner le jambon de glace à l’érable. Cuire à découvert de 30 à 45 minutes en le badigeonnant toutes les 15 minutes.']
        ],
        note: 'Les restes font de super sandwichs pour le brunch du 25 ou une soupe aux pois avec l’os.'
      },
      'Pâté au poulet': {
        por: '6 portions',
        ing: ['2 abaisses de pâte à tarte', '750 ml (3 tasses) de poulet cuit en dés', '2 carottes en dés', '1 branche de céleri en dés', '1 oignon haché', '250 ml (1 tasse) de petits pois surgelés', '60 ml (¼ tasse) de beurre', '60 ml (¼ tasse) de farine', '500 ml (2 tasses) de bouillon de poulet', '125 ml (½ tasse) de lait', '2 ml (½ c. à thé) de thym', '1 œuf battu pour dorer'],
        steps: [
          ['E', 'Laver et éplucher les carottes. Mesurer les petits pois, le lait et le bouillon.'],
          ['A', 'Faire fondre le beurre et y cuire l’oignon, les carottes et le céleri 5 minutes.'],
          ['A', 'Ajouter la farine, puis le bouillon et le lait en fouettant. Laisser épaissir 5 minutes.'],
          ['E', 'Ajouter le poulet, les petits pois et le thym. Mélanger et laisser tiédir.'],
          ['E', 'Verser dans un moule foncé de pâte, couvrir de la deuxième abaisse, faire des entailles et dorer à l’œuf.'],
          ['A', 'Cuire à 200 °C (400 °F) de 35 à 40 minutes.']
        ],
        note: 'Une bonne façon d’utiliser un reste de dinde à la place du poulet.'
      },
      'Cipaille': {
        por: '12 portions',
        ing: ['500 g de porc en cubes', '500 g de bœuf en cubes', '500 g de poulet en cubes', '2 oignons hachés', '1 kg de pommes de terre en cubes', '750 ml (3 tasses) de bouillon de poulet', '10 ml (2 c. à thé) de sarriette', 'Sel et poivre', 'Pâte à tarte pour 3 abaisses'],
        steps: [
          ['A', 'La veille, mélanger les viandes, les oignons et les épices. Couvrir et réfrigérer toute la nuit.'],
          ['E', 'Le jour même, laver et éplucher les pommes de terre.'],
          ['A', 'Dans une cocotte, faire un étage de viande, un étage de pommes de terre, puis une abaisse de pâte. Recommencer en terminant par une abaisse.'],
          ['A', 'Faire un trou au centre et verser le bouillon jusqu’à hauteur de la dernière abaisse.'],
          ['E', 'Décorer le dessus avec des formes de Noël en pâte.'],
          ['A', 'Cuire 45 minutes à 200 °C (400 °F), puis 5 h à 135 °C (275 °F) à couvert.']
        ],
        note: 'La différence avec la tourtière du Lac : plusieurs étages de pâte à l’intérieur.'
      },
      'Fèves au lard': {
        por: '8 portions',
        ing: ['500 g (1 lb) de fèves blanches sèches', '250 g de lard salé en tranches', '1 oignon coupé en deux', '125 ml (½ tasse) de mélasse', '60 ml (¼ tasse) de sirop d’érable', '10 ml (2 c. à thé) de moutarde sèche', 'Sel et poivre'],
        steps: [
          ['E', 'La veille, rincer les fèves et les mettre à tremper dans un grand bol d’eau froide.'],
          ['A', 'Égoutter, couvrir d’eau fraîche et faire mijoter de 30 à 45 minutes. Égoutter en gardant l’eau.'],
          ['E', 'Mesurer la mélasse, le sirop d’érable et la moutarde, et les mélanger dans un bol.'],
          ['A', 'Mettre l’oignon et la moitié du lard au fond d’un pot allant au four. Ajouter les fèves, le mélange sucré et le reste du lard.'],
          ['A', 'Couvrir avec l’eau de cuisson. Cuire à couvert 6 h à 120 °C (250 °F) en ajoutant de l’eau au besoin.']
        ],
        note: 'Classique du brunch des Fêtes avec des œufs et des cretons.'
      },
      'Saumon en croûte': {
        por: '6 portions',
        ing: ['1 filet de saumon sans peau d’environ 800 g', '1 paquet (400 g) de pâte feuilletée', '1 sac (142 g) de bébés épinards', '125 g de fromage à la crème', '15 ml (1 c. à soupe) d’aneth frais', 'Le zeste de 1 citron', 'Sel et poivre', '1 œuf battu pour dorer'],
        steps: [
          ['A', 'Faire tomber les épinards dans une poêle chaude 2 minutes. Bien les égoutter et les hacher.'],
          ['E', 'Mélanger les épinards, le fromage à la crème, l’aneth et le zeste de citron.'],
          ['E', 'Abaisser la pâte feuilletée en un grand rectangle sur un papier parchemin.'],
          ['A', 'Déposer le saumon au centre, le tartiner du mélange aux épinards et refermer la pâte par-dessus en scellant bien.'],
          ['E', 'Dorer à l’œuf et faire des petites entailles en forme de sapin sur le dessus.'],
          ['A', 'Cuire à 200 °C (400 °F) de 30 à 35 minutes, jusqu’à ce que la pâte soit dorée.']
        ],
        note: 'Une option plus légère pour ceux qui ne mangent pas de viande rouge.'
      },
      'Tourtière aux légumes': {
        por: '6 à 8 portions',
        ing: ['2 abaisses de pâte à tarte', '1 boîte (540 ml) de lentilles brunes, rincées', '1 oignon haché', '2 carottes râpées', '1 paquet (227 g) de champignons hachés', '1 pomme de terre cuite en purée', '250 ml (1 tasse) de bouillon de légumes', '2 ml (½ c. à thé) de cannelle', '1 ml (¼ c. à thé) de clou de girofle moulu', '5 ml (1 c. à thé) de sarriette', '1 œuf battu pour dorer'],
        steps: [
          ['E', 'Rincer les lentilles et râper les carottes avec l’aide d’un adulte.'],
          ['A', 'Cuire l’oignon, les carottes et les champignons 10 minutes dans un peu d’huile.'],
          ['A', 'Ajouter les lentilles, le bouillon et les épices. Laisser mijoter jusqu’à ce que le liquide soit absorbé.'],
          ['E', 'Écraser grossièrement avec un pilon et ajouter la purée de pomme de terre.'],
          ['E', 'Garnir le moule, couvrir de pâte, faire des entailles et dorer à l’œuf.'],
          ['A', 'Cuire à 200 °C (400 °F) environ 40 minutes.']
        ],
        note: 'Même goût épicé que la tourtière traditionnelle, sans viande.'
      },
      'Sucre à la crème': {
        por: 'Environ 25 carrés',
        ing: ['500 ml (2 tasses) de cassonade', '250 ml (1 tasse) de crème 35 %', '60 ml (¼ tasse) de beurre', '5 ml (1 c. à thé) de vanille'],
        steps: [
          ['E', 'Tapisser un petit moule carré de papier parchemin et mesurer tous les ingrédients.'],
          ['A', 'Dans une casserole à fond épais, mélanger la cassonade, la crème et le beurre. Porter à ébullition en brassant, puis bouillir sans brasser jusqu’à 113 °C (235 °F) au thermomètre à bonbons.'],
          ['A', 'Retirer du feu, ajouter la vanille et laisser tiédir de 10 à 15 minutes sans brasser.'],
          ['A', 'Battre au batteur électrique jusqu’à ce que le mélange perde son lustre et épaississe. Verser aussitôt dans le moule.'],
          ['E', 'Une fois refroidi, couper en carrés et les emballer dans des petites boîtes à offrir.']
        ],
        note: 'Le sucre cuit dépasse 110 °C et colle à la peau. Les enfants restent loin de la casserole pendant les étapes 2 à 4.'
      }
    };
