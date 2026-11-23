const ART = (() => {
  const wrap = (inner, plate = true) => `<svg viewBox="0 0 120 90" aria-hidden="true" class="art">${plate ? '<ellipse cx="60" cy="73" rx="52" ry="12" fill="#000" opacity=".14"/><ellipse cx="60" cy="69" rx="52" ry="13" fill="#FFFFFF"/><ellipse cx="60" cy="68" rx="41" ry="9.5" fill="#EFE9DD"/>' : ''}${inner}</svg>`;
  const dots = (pts, r, c) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join('');
  const starPts = (cx, cy, R, r) => { let p = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, k = i % 2 ? r : R; p.push((cx + k * Math.cos(a)).toFixed(1) + ',' + (cy + k * Math.sin(a)).toFixed(1)); } return p.join(' '); };
  const steam = '<path d="M50 24 q-4 -5 0 -10 M60 22 q-4 -5 0 -10 M70 24 q-4 -5 0 -10" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity=".75"/>';

  const pie = (crust = '#D9A45B', side = '#B5762F', deep = false) => wrap(
    `<path d="M24 ${deep ? 44 : 50} L28 65 Q60 75 92 65 L96 ${deep ? 44 : 50} Z" fill="${side}"/>` +
    `<ellipse cx="60" cy="${deep ? 44 : 50}" rx="36" ry="13" fill="${crust}"/>` +
    `<ellipse cx="60" cy="${deep ? 44 : 50}" rx="34" ry="11.5" fill="none" stroke="${side}" stroke-width="2.4" stroke-dasharray="3 3"/>` +
    `<ellipse cx="52" cy="${deep ? 40 : 46}" rx="15" ry="4" fill="#FFFFFF" opacity=".22"/>` +
    `<path d="M51 ${deep ? 42 : 48} l5 3 M60 ${deep ? 40 : 46} v6 M69 ${deep ? 42 : 48} l-5 3" stroke="${side}" stroke-width="2" stroke-linecap="round"/>` +
    (deep ? `<polygon points="${starPts(42, 46, 5, 2.2)}" fill="${side}" opacity=".8"/><polygon points="${starPts(78, 46, 5, 2.2)}" fill="${side}" opacity=".8"/>` : ''));

  const tart = (fill, top = '') => wrap(
    '<path d="M24 52 L28 64 Q60 73 92 64 L96 52 Z" fill="#B5762F"/><ellipse cx="60" cy="52" rx="36" ry="12" fill="#D9A45B"/>' +
    `<ellipse cx="60" cy="52" rx="30" ry="9.5" fill="${fill}"/><ellipse cx="52" cy="49" rx="12" ry="2.6" fill="#FFFFFF" opacity=".25"/>` + top);

  const pot = (c, bit, r = 2) => wrap(
    '<path d="M30 40 L33 64 Q60 73 87 64 L90 40 Z" fill="#2F3A44"/><rect x="19" y="41" width="14" height="5" rx="2.5" fill="#2F3A44"/><rect x="87" y="41" width="14" height="5" rx="2.5" fill="#2F3A44"/>' +
    `<ellipse cx="60" cy="40" rx="30" ry="8.5" fill="#46535F"/><ellipse cx="60" cy="41" rx="26" ry="6.5" fill="${c}"/>` +
    dots([[48, 41], [58, 39], [69, 41], [54, 43.5], [64, 43.5], [74, 42.5], [44, 42.5]], r, bit) + steam);

  const bowl = (c, bit, r = 1.8) => wrap(
    '<path d="M28 46 Q30 72 60 72 Q90 72 92 46 Z" fill="#FFFFFF"/><path d="M28 46 Q30 72 60 72 Q90 72 92 46" fill="none" stroke="#DCD2C0" stroke-width="1.2"/>' +
    `<ellipse cx="60" cy="46" rx="32" ry="8" fill="#F3EEE4"/><ellipse cx="60" cy="47" rx="28" ry="6" fill="${c}"/>` +
    dots([[48, 46], [57, 44.5], [66, 47], [73, 45.5], [53, 49], [63, 49.5], [42, 47.5], [78, 47.5]], r, bit), false);

  const dish = (c, top, r = 2.4) => wrap(
    '<path d="M20 46 L25 64 L95 64 L100 46 Z" fill="#E9E2D3"/><path d="M20 46 L25 64 L95 64 L100 46 Z" fill="none" stroke="#CFC4AE" stroke-width="1.2"/>' +
    `<path d="M26 46 L29 58 L91 58 L94 46 Z" fill="${c}"/>` +
    dots([[36, 50], [48, 49], [60, 51], [72, 49], [84, 50], [42, 54], [55, 55], [67, 54], [79, 55]], r, top));

  const turkey = () => wrap(
    '<path d="M30 52 Q18 46 15 37" stroke="#B05F1E" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="14" cy="35" r="4" fill="#F7F1E4"/>' +
    '<path d="M90 52 Q102 46 105 37" stroke="#B05F1E" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="106" cy="35" r="4" fill="#F7F1E4"/>' +
    '<ellipse cx="60" cy="55" rx="34" ry="15" fill="#B05F1E"/><ellipse cx="60" cy="48" rx="28" ry="13" fill="#D2812F"/><ellipse cx="51" cy="43" rx="12" ry="4" fill="#FFFFFF" opacity=".28"/>' +
    dots([[30, 66], [90, 66], [24, 62]], 4, '#4E8A3A') + dots([[36, 68], [96, 63]], 2.5, '#C0223A'));

  const ham = () => wrap(
    '<rect x="84" y="44" width="20" height="7" rx="3.5" fill="#F3EAD6"/><path d="M28 64 Q26 34 58 30 Q90 33 90 64 Z" fill="#A9461F"/><path d="M34 62 Q34 39 58 35 Q84 38 84 62" fill="#C8683A"/>' +
    '<path d="M38 44 L64 62 M46 37 L78 59 M60 35 L84 52 M80 42 L52 62 M68 36 L38 58 M54 36 L34 50" stroke="#8A3417" stroke-width="1.3" opacity=".75"/>' +
    dots([[50, 44], [62, 50], [72, 44], [56, 56], [44, 52], [74, 56]], 1.6, '#3A1A0C') + '<ellipse cx="50" cy="38" rx="10" ry="3" fill="#FFFFFF" opacity=".25"/>');

  const salmon = () => wrap(
    '<path d="M20 60 Q22 40 58 37 Q96 40 98 60 Q60 70 20 60 Z" fill="#D9A45B"/><path d="M30 46 L44 62 M44 41 L60 64 M60 39 L76 63 M76 41 L90 58 M34 58 L50 41 M50 62 L68 39 M68 63 L86 43" stroke="#B5762F" stroke-width="1.6" opacity=".8"/>' +
    '<path d="M74 64 L98 59 L100 67 L77 72 Z" fill="#EE8E6B"/><path d="M75 67 L99 62" stroke="#4E8A3A" stroke-width="2"/>');

  const log = () => wrap(
    '<rect x="20" y="40" width="72" height="25" rx="12.5" fill="#5A3420"/><path d="M28 47 Q48 44 70 49 M30 57 Q54 60 82 56" stroke="#3B2112" stroke-width="2" fill="none"/>' +
    '<ellipse cx="92" cy="52.5" rx="9" ry="12.5" fill="#7A4A2A"/><path d="M92 52 m-4 0 a4 5 0 1 1 4 5 a2.5 3 0 1 1 -2 -3.5" fill="none" stroke="#EADBBF" stroke-width="1.6"/>' +
    '<ellipse cx="44" cy="38" rx="7" ry="3.2" fill="#2F7A44" transform="rotate(-25 44 38)"/><ellipse cx="55" cy="38" rx="7" ry="3.2" fill="#2F7A44" transform="rotate(25 55 38)"/>' +
    dots([[49, 36], [52, 39]], 2.4, '#C0223A') + dots([[32, 42], [66, 41], [78, 44], [38, 45]], 1.1, '#FFFFFF'));

  const loaf = (c, bits) => wrap(
    `<rect x="28" y="40" width="64" height="26" rx="4" fill="${c}"/><rect x="28" y="40" width="64" height="7" rx="3.5" fill="#000" opacity=".15"/>` +
    bits.map((b, i) => dots([[36 + i * 7, 52 + (i % 2) * 6], [40 + i * 7, 58 - (i % 2) * 5]], 2.2, b)).join(''));

  const ginger = () => {
    const man = (x, y) => `<g transform="translate(${x} ${y})" fill="#B8702E"><circle cx="0" cy="-12" r="6"/><path d="M-9 -6 H9 L15 0 L12 3 L7 -1 V7 L11 15 L7 17 L0 9 L-7 17 L-11 15 L-7 7 V-1 L-12 3 L-15 0 Z"/><circle cx="0" cy="-2" r="1.2" fill="#FFFFFF"/><circle cx="0" cy="3" r="1.2" fill="#FFFFFF"/><path d="M-3 -10 q3 2 6 0" stroke="#FFFFFF" stroke-width="1" fill="none"/></g>`;
    return wrap(man(44, 54) + man(76, 56));
  };

  const stars = () => wrap(
    `<polygon points="${starPts(42, 54, 14, 6.5)}" fill="#E5B46A"/><polygon points="${starPts(42, 54, 11, 5)}" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>` +
    `<polygon points="${starPts(76, 50, 13, 6)}" fill="#E5B46A"/><polygon points="${starPts(76, 50, 10, 4.6)}" fill="#C0223A" opacity=".85"/>` +
    '<circle cx="60" cy="64" r="8" fill="#E5B46A"/><circle cx="60" cy="64" r="5.5" fill="#2F7A44" opacity=".85"/>' + dots([[58, 62], [62, 66]], 1, '#FFFFFF'));

  const squares = (c, top) => wrap(
    [[34, 48], [56, 44], [78, 48], [45, 58], [67, 58]].map(([x, y]) =>
      `<rect x="${x - 9}" y="${y - 7}" width="18" height="14" rx="2.5" fill="${c}"/><rect x="${x - 9}" y="${y - 7}" width="18" height="4.5" rx="2" fill="${top}"/>`).join(''));

  const donuts = () => wrap(
    [[42, 54, '#F0DDB8'], [78, 54, '#E79AB0'], [60, 44, '#5A3420']].map(([x, y, ic]) =>
      `<circle cx="${x}" cy="${y}" r="15" fill="#D9A45B"/><circle cx="${x}" cy="${y - 1}" r="12" fill="${ic}"/><circle cx="${x}" cy="${y - 1}" r="4.5" fill="#EFE9DD"/>`).join('') +
    dots([[73, 50], [83, 51], [78, 60], [72, 57]], 1.1, '#2F7A44') + dots([[55, 40], [65, 41], [62, 48]], 1.1, '#FFFFFF'));

  const balls = (c, top) => wrap(
    [[40, 58], [56, 60], [72, 58], [86, 56], [48, 48], [64, 48], [78, 47]].map(([x, y]) =>
      `<circle cx="${x}" cy="${y}" r="7.5" fill="${c}"/><ellipse cx="${x}" cy="${y - 4}" rx="3.5" ry="2" fill="${top}"/><circle cx="${x - 2.5}" cy="${y - 2}" r="1.4" fill="#FFFFFF" opacity=".35"/>`).join(''));

  const mug = (drink, top) => wrap(
    '<path d="M86 42 q13 0 13 11 q0 11 -13 11" fill="none" stroke="#A3263A" stroke-width="5"/><path d="M38 34 H86 V62 Q86 70 78 70 H46 Q38 70 38 62 Z" fill="#A3263A"/>' +
    '<path d="M38 50 H86" stroke="#FFFFFF" stroke-width="3" opacity=".9"/>' + `<polygon points="${starPts(62, 59, 5, 2.2)}" fill="#E8C55A"/>` +
    `<ellipse cx="62" cy="34" rx="24" ry="5" fill="${drink}"/>` + top, false);

  const crepes = () => wrap(
    [64, 59, 54, 49, 44].map((y, i) => `<ellipse cx="60" cy="${y}" rx="${32 - i}" ry="7" fill="${i % 2 ? '#E4AE5E' : '#EDBE72'}"/>`).join('') +
    '<path d="M44 42 Q60 36 78 43 Q80 50 76 56 Q74 49 68 48 Q62 52 56 48 Q50 52 46 47 Z" fill="#B5651D" opacity=".9"/>' +
    dots([[56, 40], [64, 39]], 3, '#C0223A') + dots([[60, 37]], 3, '#3B4FA0'));

  const toast = () => wrap(
    '<rect x="26" y="40" width="34" height="26" rx="6" fill="#A86A2E" transform="rotate(-8 43 53)"/><rect x="29" y="43" width="28" height="20" rx="4" fill="#E2AA5C" transform="rotate(-8 43 53)"/>' +
    '<rect x="58" y="42" width="34" height="26" rx="6" fill="#A86A2E" transform="rotate(10 75 55)"/><rect x="61" y="45" width="28" height="20" rx="4" fill="#E2AA5C" transform="rotate(10 75 55)"/>' +
    dots([[40, 50], [46, 56], [72, 52], [80, 58], [68, 60]], 1.2, '#FFFFFF') + dots([[58, 40], [64, 38]], 3, '#C0223A'));

  const muffins = () => wrap(
    [[44, 0], [76, 2]].map(([x, d]) =>
      `<path d="M${x - 14} ${48 + d} L${x - 10} ${68} H${x + 10} L${x + 14} ${48 + d} Z" fill="#A3263A"/><path d="M${x - 7} ${50 + d} L${x - 5} 68 M${x} ${50 + d} V68 M${x + 7} ${50 + d} L${x + 5} 68" stroke="#7E1B2C" stroke-width="1.5"/>` +
      `<path d="M${x - 17} ${50 + d} Q${x - 16} ${30 + d} ${x} ${30 + d} Q${x + 16} ${30 + d} ${x + 17} ${50 + d} Z" fill="#D9A45B"/>` +
      dots([[x - 6, 38 + d], [x + 5, 41 + d], [x - 1, 45 + d], [x + 9, 36 + d]], 2, '#B3263A') + dots([[x - 9, 44 + d], [x + 2, 35 + d]], 1.3, '#E8862A')).join(''));

  const eggs = () => wrap(
    [[38, 54], [60, 48], [82, 54], [50, 62], [72, 62]].map(([x, y]) =>
      `<ellipse cx="${x}" cy="${y}" rx="12" ry="7" fill="#FFFFFF" stroke="#DCD2C0" stroke-width="1"/><ellipse cx="${x}" cy="${y - 1.5}" rx="6.5" ry="4" fill="#F2C744"/><circle cx="${x + 1}" cy="${y - 2}" r=".9" fill="#C0392B"/>`).join(''));

  const shrimp = () => wrap(
    '<path d="M38 36 H82 L74 60 H46 Z" fill="#E8F1F3" opacity=".9"/><path d="M42 44 H78 L74 58 H46 Z" fill="#C0392B"/>' +
    [[42, 36], [54, 34], [66, 34], [78, 36]].map(([x, y]) => `<path d="M${x} ${y} q-9 -4 -5 -14 q2 -3 6 -2" fill="none" stroke="#F2896A" stroke-width="5" stroke-linecap="round"/>`).join('') +
    '<path d="M84 50 l12 -6 q2 8 -6 12 z" fill="#F2D24A"/>');

  const brie = () => wrap(
    '<ellipse cx="58" cy="56" rx="30" ry="10" fill="#E6DCC0"/><rect x="28" y="46" width="60" height="10" fill="#F5EFDC"/><ellipse cx="58" cy="46" rx="30" ry="10" fill="#FBF7EA"/>' +
    dots([[50, 44], [56, 42], [62, 44], [58, 47], [66, 46], [52, 47]], 3, '#A3263A') + '<path d="M70 40 l10 -6 M72 43 l12 -4" stroke="#3F7A44" stroke-width="1.8" stroke-linecap="round"/>' +
    dots([[96, 58], [100, 54]], 4, '#E0B070'));

  const veggies = () => wrap(
    [[38, 56, '#E07B2A', -20], [52, 50, '#7A2F5E', 15], [66, 56, '#E8C55A', -10], [80, 50, '#E07B2A', 25], [60, 46, '#7A2F5E', -30], [46, 62, '#E8C55A', 10], [74, 62, '#E07B2A', -15]].map(([x, y, c, r]) =>
      `<rect x="${x - 7}" y="${y - 4}" width="14" height="8" rx="3.5" fill="${c}" transform="rotate(${r} ${x} ${y})"/>`).join('') +
    dots([[44, 50], [70, 52], [58, 60]], 1.6, '#3F7A44'));

  const spirals = (c, s) => wrap(
    [[38, 56], [56, 50], [74, 56], [90, 50], [48, 64], [66, 64]].map(([x, y]) =>
      `<circle cx="${x}" cy="${y}" r="8" fill="${c}"/><path d="M${x} ${y} m-1 0 a2 2 0 1 1 2 2 a4 4 0 1 1 -4 -4 a6 6 0 0 1 6 6" fill="none" stroke="${s}" stroke-width="1.6"/>`).join(''));

  const terrine = (c) => wrap(
    '<path d="M34 42 H78 L75 64 H37 Z" fill="#FFFFFF"/><path d="M34 42 H78 L75 64 H37 Z" fill="none" stroke="#DCD2C0" stroke-width="1.2"/>' +
    `<ellipse cx="56" cy="42" rx="22" ry="5" fill="${c}"/>` + dots([[50, 41], [60, 43], [56, 40]], 1.2, '#3F7A44') +
    '<rect x="80" y="52" width="16" height="12" rx="2" fill="#E0B070" transform="rotate(-12 88 58)"/><rect x="86" y="58" width="16" height="12" rx="2" fill="#D6A35C" transform="rotate(8 94 64)"/>');

  const twists = () => wrap(
    [[40, 56], [60, 50], [80, 56]].map(([x, y]) =>
      `<path d="M${x - 16} ${y - 6} L${x - 9} ${y} L${x - 16} ${y + 6} Z" fill="#FFFFFF" stroke="#DCD2C0"/><path d="M${x + 16} ${y - 6} L${x + 9} ${y} L${x + 16} ${y + 6} Z" fill="#FFFFFF" stroke="#DCD2C0"/>` +
      `<rect x="${x - 10}" y="${y - 6}" width="20" height="12" rx="6" fill="#D9A23A"/><path d="M${x - 6} ${y - 5} q4 5 0 10 M${x} ${y - 6} q4 6 0 12 M${x + 6} ${y - 5} q4 5 0 10" stroke="#F3D58A" stroke-width="1.3" fill="none"/>`).join(''));

  const m = {
    'Cretons maison': () => terrine('#B98A6A'),
    'Pâté de foie': () => terrine('#8A5A44'),
    'Trempette chaude aux épinards': () => bowl('#7E9A4A', '#F3EEDC', 2.4),
    'Bouchées de saucisse feuilletées': () => spirals('#DDA75C', '#8A3A22'),
    'Œufs farcis': eggs,
    'Crevettes cocktail': shrimp,
    'Brie fondant aux canneberges': brie,
    'Soupe aux pois': () => bowl('#D4B13A', '#8AA040', 1.6),
    'Tourtière du Lac-Saint-Jean': () => pie('#C98A40', '#8F5A22', true),
    'Tourtière classique (pâté à la viande)': () => pie(),
    'Ragoût de pattes et boulettes': () => pot('#7A4322', '#4E2814', 3.6),
    'Dinde rôtie et farce aux pommes': turkey,
    'Jambon glacé à l’érable': ham,
    'Pâté au poulet': () => pie('#E4B46A', '#B8823E'),
    'Cipaille': () => pie('#D39B4E', '#9A6326', true),
    'Fèves au lard': () => pot('#8E3E1F', '#E9CFA4', 2.2),
    'Saumon en croûte': salmon,
    'Tourtière aux légumes': () => pie('#DCA556', '#A86F2C'),
    'Purée de pommes de terre': () => bowl('#F3E6BC', '#F2C744', 2.2),
    'Sauce aux canneberges': () => bowl('#A3263A', '#D9506A', 2.2),
    'Légumes racines à l’érable': veggies,
    'Farce traditionnelle': () => bowl('#A8743F', '#4E7A3A', 1.8),
    'Salade de chou crémeuse': () => bowl('#EEF2DD', '#E58A3A', 1.6),
    'Betteraves marinées': () => bowl('#7A1F3D', '#A33A62', 3),
    'Choux de Bruxelles au bacon': () => bowl('#6E9A3E', '#B4563A', 3),
    'Sauce brune maison': () => bowl('#6B3E1E', '#8A5530', 1.2),
    'Bûche de Noël': log,
    'Tarte au sucre': () => tart('#7A4A1E'),
    'Pouding chômeur': () => dish('#E3B56E', '#9A5A1E', 3.5),
    'Tarte aux pacanes': () => tart('#6B3A1A', [[48, 50, -20], [58, 47, 10], [68, 50, -10], [53, 55, 15], [64, 55, -25], [74, 53, 5], [43, 54, 30]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="4.5" ry="2.4" fill="#A0602A" transform="rotate(${r} ${x} ${y})"/>`).join('')),
    'Gâteau aux fruits': () => loaf('#6B3A1E', ['#C0223A', '#3F8A44', '#E8C55A', '#C0223A', '#3F8A44', '#E8C55A', '#C0223A']),
    'Grands-pères dans le sirop': () => bowl('#B5702A', '#F1E0BC', 5),
    'Pets de sœur': () => spirals('#C98A4A', '#5E3416'),
    'Tarte au sirop d’érable': () => tart('#B5702A'),
    'Croustade aux pommes': () => dish('#C9925A', '#E9CD93', 3.2),
    'Gâteau Reine-Élisabeth': () => dish('#7A4A26', '#F1E6CB', 2.2),
    'Sucre à la crème': () => squares('#D8B07A', '#E8C795'),
    'Beignes de grand-maman': donuts,
    'Biscuits en pain d’épices': ginger,
    'Sablés de Noël à décorer': stars,
    'Fudge au chocolat': () => squares('#4A2A1A', '#6A4028'),
    'Tire Sainte-Catherine': twists,
    'Boules au beurre d’arachide': () => balls('#3A2216', '#D99A4A'),
    'Truffes au chocolat': () => balls('#4A2A1A', '#7A4A2A'),
    'Crêpes au sirop d’érable': crepes,
    'Pain doré brioché': toast,
    'Omelette au four': () => dish('#F2CF4A', '#4E8A3A', 2.4),
    'Muffins canneberges et orange': muffins,
    'Chocolat chaud maison': () => mug('#5A3420', dots([[52, 30], [60, 27], [68, 30], [56, 32], [64, 32], [72, 32]], 5, '#FFFFFF') + dots([[54, 24], [66, 25]], 3, '#F6C9D0')),
    'Lait de poule sans alcool': () => mug('#F3E3B5', dots([[56, 33], [62, 35], [68, 33], [60, 32]], 1, '#9A5A1E'))
  };
  const corn = () => wrap([[40, -14], [62, 0], [84, 14]].map(([x, r]) =>
    `<g transform="rotate(${r} ${x} 52)"><path d="M${x - 9} 30 Q${x - 18} 52 ${x - 6} 70 L${x} 70 Z" fill="#7FA84A"/><rect x="${x - 7}" y="30" width="14" height="38" rx="7" fill="#F2C744"/>` +
    [36, 42, 48, 54, 60].map(y => `<path d="M${x - 6} ${y} H${x + 6}" stroke="#D9A82A" stroke-width="1.2"/>`).join('') +
    `<path d="M${x} 32 V66" stroke="#D9A82A" stroke-width="1.2"/><rect x="${x - 4}" y="40" width="8" height="4" fill="#FFF4C2" opacity=".8"/></g>`).join(''));
  const skewers = () => wrap([44, 62, 80].map((y, i) =>
    `<line x1="16" y1="${y - 10 + i * 2}" x2="104" y2="${y - 14 + i * 2}" stroke="#C9A06A" stroke-width="2.2"/>` +
    [28, 42, 56, 70, 84].map((x, j) => `<rect x="${x - 6}" y="${y - 19 + i * 2 - j * .25}" width="12" height="10" rx="3" fill="${['#C98A4A', '#C0392B', '#C98A4A', '#4E8A3A', '#C98A4A'][j]}"/>`).join('')).join(''));
  const burger = () => wrap(
    '<path d="M34 42 Q36 26 60 26 Q84 26 86 42 Z" fill="#D9A45B"/>' + dots([[50, 32], [60, 30], [70, 33], [56, 36], [66, 37]], 1, '#FFF4D6') +
    '<path d="M32 44 Q40 48 48 44 Q56 48 64 44 Q72 48 80 44 Q86 46 88 44 L88 47 H32 Z" fill="#5FA84A"/><rect x="33" y="46" width="54" height="4" fill="#F2C744"/>' +
    '<rect x="32" y="50" width="56" height="9" rx="4.5" fill="#6B3A1E"/><rect x="33" y="47" width="10" height="4" fill="#D2402E"/><rect x="74" y="47" width="10" height="4" fill="#D2402E"/>' +
    '<path d="M34 60 H86 Q86 68 60 68 Q34 68 34 60 Z" fill="#D9A45B"/>');
  const glass = (c, top) => wrap(
    `<path d="M40 26 H80 L75 70 H45 Z" fill="${c}" opacity=".88"/><path d="M40 26 H80 L75 70 H45 Z" fill="none" stroke="#FFFFFF" stroke-width="2" opacity=".8"/>` +
    '<rect x="48" y="34" width="9" height="9" rx="2" fill="#FFFFFF" opacity=".55"/><rect x="61" y="44" width="9" height="9" rx="2" fill="#FFFFFF" opacity=".55"/><line x1="70" y1="14" x2="64" y2="60" stroke="#FFFFFF" stroke-width="3"/>' + top, false);
  const caramelApple = () => wrap([[44, 52], [76, 52]].map(([x, y]) =>
    `<line x1="${x}" y1="${y - 14}" x2="${x}" y2="${y - 32}" stroke="#C9A06A" stroke-width="3"/><circle cx="${x}" cy="${y}" r="15" fill="#C0392B"/>` +
    `<path d="M${x - 15} ${y - 2} Q${x} ${y - 20} ${x + 15} ${y - 2} Q${x + 12} ${y + 6} ${x + 6} ${y + 2} Q${x} ${y + 8} ${x - 6} ${y + 2} Q${x - 12} ${y + 6} ${x - 15} ${y - 2} Z" fill="#C9822A"/>` +
    dots([[x - 6, y - 6], [x + 4, y - 8], [x + 8, y - 3]], 1.3, '#F3E3C2')).join(''));
  const nests = () => wrap([[42, 54], [78, 54]].map(([x, y]) =>
    `<ellipse cx="${x}" cy="${y + 4}" rx="17" ry="9" fill="#6B3A1E"/>` + [0, 1, 2, 3].map(i => `<path d="M${x - 16} ${y + i * 2} Q${x} ${y - 6 + i * 3} ${x + 16} ${y + i * 2}" stroke="#8A5530" stroke-width="2" fill="none"/>`).join('') +
    `<ellipse cx="${x - 6}" cy="${y - 2}" rx="4.5" ry="6" fill="#F6C9D0"/><ellipse cx="${x + 1}" cy="${y - 4}" rx="4.5" ry="6" fill="#A9D7F0"/><ellipse cx="${x + 8}" cy="${y - 2}" rx="4.5" ry="6" fill="#F7E39A"/>`).join(''));
  const asparagus = () => wrap([30, 38, 46, 54, 62, 70].map((y, i) =>
    `<line x1="26" y1="${y + 6}" x2="${92 - (i % 2) * 6}" y2="${y - 2}" stroke="#5E9A3A" stroke-width="5" stroke-linecap="round"/><ellipse cx="${94 - (i % 2) * 6}" cy="${y - 2.4}" rx="5" ry="3.4" fill="#3F7A2A"/>`).join('') + dots([[40, 44], [56, 50], [70, 40], [48, 60]], 1.6, '#F3E3B5'));
  const roast = () => wrap(
    '<ellipse cx="58" cy="54" rx="32" ry="16" fill="#8A4A26"/><ellipse cx="56" cy="49" rx="27" ry="12" fill="#A65E30"/><ellipse cx="48" cy="45" rx="12" ry="4" fill="#FFFFFF" opacity=".22"/>' +
    '<rect x="86" y="47" width="18" height="7" rx="3.5" fill="#F3EAD6"/>' +
    [[40, 48], [56, 44], [70, 50]].map(([x, y]) => `<path d="M${x} ${y} l8 -6 M${x + 2} ${y} l-6 -5" stroke="#3F7A44" stroke-width="2" stroke-linecap="round"/>`).join(''));
  const snowTire = () => wrap(
    '<rect x="22" y="40" width="76" height="28" rx="6" fill="#FFFFFF"/><rect x="22" y="40" width="76" height="28" rx="6" fill="none" stroke="#C9D6E0" stroke-width="1.5"/>' +
    dots([[30, 46], [44, 62], [70, 46], [90, 60], [56, 52]], 1.3, '#DCE7EF') +
    [34, 52, 70].map(x => `<path d="M${x} 44 q4 8 0 18" stroke="#C9822A" stroke-width="6" stroke-linecap="round" fill="none"/>`).join('') +
    '<line x1="86" y1="56" x2="104" y2="24" stroke="#C9A06A" stroke-width="3"/><ellipse cx="86" cy="54" rx="5" ry="6" fill="#B5702A"/>');
  Object.assign(m, {
    'Omelette soufflée à l’érable': () => dish('#F2CF4A', '#B5702A', 2.6),
    'Oreilles de crisse': () => spirals('#D9A45B', '#9A5A22'),
    'Saucisses dans le sirop d’érable': () => dish('#8A3A1E', '#B5542C', 3.6),
    'Patates rissolées': () => bowl('#E2B04A', '#3F7A44', 2),
    'Pouding au pain à l’érable': () => dish('#D9A45B', '#9A5A1E', 3),
    'Tire d’érable sur la neige': snowTire,
    'Jambon de Pâques à l’ananas': () => ham().replace('</svg>', dots([[46, 46], [66, 42]], 6, '#F2D24A') + dots([[46, 46], [66, 42]], 2.4, '#C0392B') + '</svg>'),
    'Gigot d’agneau à l’ail et au romarin': roast,
    'Gratin dauphinois': () => dish('#F2DFA0', '#C9922A', 3),
    'Asperges rôties au parmesan': asparagus,
    'Gâteau aux carottes': () => squares('#C07A3A', '#F6F0E2'),
    'Nids de Pâques en chocolat': nests,
    'Épluchette de blé d’Inde': corn,
    'Brochettes de poulet au BBQ': skewers,
    'Burgers maison': burger,
    'Salade de pâtes': () => bowl('#E9C46A', '#C0392B', 2.4),
    'Salade de pommes de terre': () => bowl('#F1E3B5', '#5E8A3A', 2),
    'Gâteau aux fraises': () => dish('#F2DFB0', '#D2283E', 3.4),
    'Limonade maison': () => glass('#F4E27A', '<circle cx="80" cy="28" r="9" fill="#F2D24A"/><circle cx="80" cy="28" r="6" fill="#FFF4B0"/>'),
    'Poulet rôti aux herbes': turkey,
    'Pâté chinois': () => dish('#F2CF4A', '#C9822A', 1.4),
    'Soupe à la courge': () => bowl('#E58A2A', '#F3EEDC', 1.4),
    'Courge musquée rôtie à l’érable': veggies,
    'Tarte à la citrouille': () => tart('#D2782A', dots([[60, 51]], 6, '#FFFFFF')),
    'Compote de pommes maison': () => bowl('#E6C27A', '#C98A4A', 1.4),
    'Muffins aux pommes et cannelle': muffins,
    'Biscuits citrouilles': () => balls('#E07B2A', '#3F7A44'),
    'Chili de sorcière': () => pot('#9A3A1E', '#6B2A14', 2.4),
    'Momies en saucisses': () => spirals('#F0DDB0', '#B5542C'),
    'Graines de citrouille grillées': () => bowl('#E8D9A8', '#B89A5A', 1.6),
    'Pommes au caramel': caramelApple,
    'Brownies toiles d’araignée': () => squares('#4A2A1A', '#F3EEDC'),
    'Punch de sorcière': () => glass('#6CC04A', '<path d="M44 26 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0" fill="#B8F0A0"/>')
  });
  return name => (m[name] ? m[name]() : wrap(''));
})();
