var conditionList = [
  { name: 'Skin Incision Ppx', includes: {'MRSA': 0.01, 'MSSA': 1, 'Streptococcus': 1, 'Staphylococcus Epidermidis': 1, 'Klebsiella Pneumoniae': 1}},
  { name: 'Cellulitis', includes: {'MRSA': 0.4, 'MSSA': 0.4, 'Streptococcus': 0.2 }},
  { name: 'GI Surgery Ppx', includes: {'MRSA': 0.1, 'MSSA': 1, 'Streptococcus': 1, 'E. Coli': 1, 'Salmonella': 1, 'N. Gonorrhoeae': 1, 'Anaerobes': 1}},
  { name: 'UTI - Uncomplicated', includes: {'E. Coli': 0.8, 'Klebsiella Pneumoniae': 0.2} }
];

// Dapto, Nafcillin, Amox, Cefotetan, Ceftriaxone, Flagyl