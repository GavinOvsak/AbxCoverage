var abxList = {
    'General': [
        {
          "name": "Penicillin G",
          "admin": "IV,PO",
          "coverage": {
            "Streptococcus": 1,
            "Streptococcus Agalactiae (Group B)": 1,
            "Streptococcus Viridans": 0.82,
            "Streptococcus Pneumoniae": 0.72,
            "Enterococcus": 0.91,
            "Enterococcus Faecalis": 1,
            "Enterococcus Faecium": 0.22,
            "MRSA": 0,
            "Bacteroides Fragilis": 0,
            "Bacteroides (not Fragilis)": 0,
            "Gram Negative Rods": 0.55,
            "Clostridium Perfringens": 1,
            "Clostridium (Not Perfringens)": 0.91,
            "Gram Positive Rods": 0.93
          },
          cost: '$',
          "contra": [
            "Penicillin Allergy",
            "Beta Lactam Allergy"
          ]
        },
        {
          "name": "Nafcillin",
          "admin": "IV",
          "coverage": {
            "Streptococcus": 1,
            "MSSA": 1,
            "Staph Aureus": 0.78,
            "MRSA": 0,
            "Staphylococcus Lugdunensis": 0.97,
            "Staphylococcus Epidermidis": 0.43
          }
        },
        {
          "name": "Oxacillin",
          "admin": "IV,PO",
          "coverage": {
            "Staph Aureus": 0.78,
            "Streptococcus": 1,
            "MSSA": 1,
            "MRSA": 0,
            "Staphylococcus Lugdunensis": 0.97,
            "Staphylococcus Epidermidis": 0.43
          }
        },
        {
          "name": "Ampicillin",
          "admin": "IV",
          cost: '$$',
          "coverage": {
            'Enterococcus Faecalis': 1,
            'Enterococcus Faecium': 0.2,
            "Streptococcus": 1,
            "E. Coli": 0.53,
            "Proteus Mirabilis": 0.75,
            "N. Meningitis": 1,
            "Citrobacter Freundii": 0,
            "Citrobacter Koseri": 0,
            "Enterobacter Cloacae": 0,
            "E. coli": 0.49,
            "Klebsiella Aerogenes": 0,
            "Klebsiella Oxytoca": 0,
            "Klebsiella Pneumoniae": 0,
            "Morganella": 0,
            "Proteus Vulgaris": 0,
            "Salmonella": 0.89,
            "Serratia Marcescens": 0,
            'H. Influenzae': 0
          }
        },
        {
          "name": "Amoxicillin",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Streptococcus": 1,
            "E. Coli": 1,
            "Proteus Mirabilis": 0.75,
            "N. Meningitis": 1,
            "Citrobacter Freundii": 0,
            "Citrobacter Koseri": 0,
            "Enterobacter Cloacae": 0,
            "E. coli": 0.49,
            "Klebsiella Aerogenes": 0,
            "Klebsiella Oxytoca": 0,
            "Klebsiella Pneumoniae": 0,
            "Morganella": 0,
            "Proteus Vulgaris": 0,
            "Salmonella": 0.89,
            "Serratia Marcescens": 0,
            'H. Influenzae': 0.82
          },
          "contra": [
            "Beta Lactam Allergy"
          ]
        },
        {
          "name": "Cefazolin (Ancef)",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Citrobacter Freundii": 0,
            "MSSA": 1,
            "Streptococcus": 1,
            "E. Coli": 0.82,
            "Proteus Mirabilis": 0.87,
            "Klebsiella Pneumoniae": 0.87,
            "Klebsiella Oxytoca": 0.52,
            "Klebsiella Aerogenes": 0,
            "Citrobacter Koseri": 0.97,
            "Enterobacter Cloacae": 0,
            "E. coli": 0.82,
            "Morganella": 0,
            "Proteus Vulgaris": 0,
            "Serratia Marcescens": 0,
            "Staph Aureus": 0.78,
            "MRSA": 0,
            "Staphylococcus Lugdunensis": 0.97,
            "Staphylococcus Epidermidis": 0.43
          },
          "contra": [
            "Beta Lactam Allergy"
          ]
        },
        {
          "name": "Cephalexin (Keflex)",
          "admin": "PO",
          cost: '$',
          "coverage": {
            "MSSA": 1,
            "Streptococcus": 1,
            "E. Coli": 1,
            "Proteus Mirabilis": 1,
            "Klebsiella": 1
          },
          "contra": [
            "Beta Lactam Allergy"
          ]
        },
        {
          "name": "Ceftriaxone (CTX)",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Serratia Marcescens": 0.95,
            "Klebsiella Pneumoniae": 0.9,
            "Klebsiella Oxytoca": 0.91,
            "Enterobacter Cloacae": 0.76,
            "MSSA": 1,
            "Streptococcus": 0.93,
            "E. Coli": 0.9,
            "Proteus Mirabilis": 0.94,
            'Proteus Vulgaris': 0.69,
            "Klebsiella Aerogenes": 0.73,
            "ESCAPPM": 1,
            "N. Gonorrhoeae": 1,
            "N. Meningitis": 1,
            "Acinetobacter Baumannii": 0.26,
            "Streptococcus Viridans": 1,
            "Streptococcus Pneumoniae": 0.96,
            "Citrobacter Freundii": 0.76,
            "Citrobacter Koseri": 0.99,
            "E. coli": 0.88,
            "Morganella": 0.92,
            "Salmonella": 0.96,
            'H. Influenzae': 1
          },
          "contra": [
            "Beta Lactam Allergy"
          ]
        },
        {
          "name": "Ceftazidime",
          "admin": "IV",
          cost: '$$',
          "coverage": {
            "Stenotrophomonas Maltophilia": 0.47,
            "Streptococcus": 1,
            "E. Coli": 1,
            "Proteus Mirabilis": 1,
            "Klebsiella": 1,
            "Pseudomonas Aeruginosa": 0.9,
            "Burkholderia Cepacia": 0.9
          }
        },
        {
          "name": "Cefotaxime",
          "admin": "IV",
          "coverage": {
            "Serratia Marcescens": 0.83,
            "Klebsiella Pneumoniae": 0.7,
            "Klebsiella Aerogenes": 0.7,
            "E. Coli": 0.69,
            "Enterobacter Cloacae": 0.6,
            "Streptococcus": 1,
            "Acinetobacter Baumannii": 0.74
          }
        },
        {
          "name": "Cefoxitin",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Serratia Marcescens": 0.04,
            "Klebsiella Pneumoniae": 0,
            "Klebsiella Oxytoca": 0.98,
            "Enterobacter Cloacae": 0,
            "E. Coli": 0.89,
            "Klebsiella Aerogenes": 0
          }
        },
        {
          "name": "Cefotetan",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "E. Coli": 0.99,
            "Klebsiella Oxytoca": 1,
            'MSSA': 1,
            'Streptococcus': 1,
            'Salmonella': 1
          }
        },
        {
          "name": "Cefuroxime",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Serratia Marcescens": 0,
            "Klebsiella Pneumoniae": 0.26,
            "Klebsiella Oxytoca": 0.93,
            "Enterobacter Cloacae": 0.15,
            "E. Coli": 0.81,
            "Klebsiella Aerogenes": 0.26,
            "Streptococcus Pneumoniae": 0.94,
            'H. Influenzae': 0.84
          }
        },
        {
          "name": "Cefepime",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Serratia Marcescens": 1,
            "Pseudomonas Aeruginosa": 0.92,
            "Klebsiella Pneumoniae": 0.89,
            "Klebsiella Oxytoca": 0.94,
            "Enterobacter Cloacae": 0.97,
            "Klebsiella Aerogenes": 0.98,
            "E. Coli": 0.9,
            "MSSA": 1,
            "Streptococcus": 1,
            "Gram Negative Bacilli": 1,
            "Gram Negative Cocci": 1,
            "Acinetobacter Baumannii": 0.7,
            "Achromobacter Xylosoxidans": 0.14,
            "Citrobacter Freundii": 0.88,
            "Citrobacter Koseri": 1,
            "E. coli": 0.83,
            "Morganella": 1,
            "Proteus Mirabilis": 0.93,
            "Proteus Vulgaris": 1,
            "Pseudomonas Aeruginosa CF mucoid": 0.81,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.72
          }
        },
        {
          "name": "Amoxicillin/Clavulanate (Augmentin)",
          "admin": "PO",
          "coverage": {
            "Serratia Marcescens": 0.01,
            "Klebsiella Pneumoniae": 0.05,
            "Klebsiella Oxytoca": 0.93,
            "Enterobacter Cloacae": 0.02,
            "MSSA": 1,
            "Streptococcus": 0.98,
            "E. Coli": 0.82,
            "Proteus Mirabilis": 1,
            "Klebsiella Aerogenes": 0.05,
            "Gram Positive Rods": 1,
            "Bacteroides": 1,
            'H. Influenzae': 0.98
          }
        },
        {
          "name": "Ampicillin/Sulbactam (Unasyn)",
          "admin": "IV",
          "cost": '$',
          "coverage": {
            "Klebsiella Oxytoca": 0.71,
            "MSSA": 1,
            "Streptococcus": 1,
            "E. Coli": 0.61,
            "Proteus Mirabilis": 0.76,
            'Proteus Vulgaris': 0.83,
            "Klebsiella": 1,
            "Gram Positive Rods": 1,
            "Bacteroides": 1,
            "Acinetobacter Baumannii": 0.72,
            "Citrobacter Freundii": 0,
            "Citrobacter Koseri": 0.96,
            "Enterobacter Cloacae": 0,
            "E. coli": 0.51,
            "Klebsiella Aerogenes": 0,
            "Klebsiella Pneumoniae": 0.76,
            "Morganella": 0,
            "Serratia Marcescens": 0,
            "Bacteroides Fragilis": 0.94,
            "Bacteroides (not Fragilis)": 0.69,
            "Gram Negative Rods": 1,
            "Clostridium Perfringens": 1,
            "Clostridium (Not Perfringens)": 0.94
          }
        },
        {
          "name": "Piperacillin/Tazobactam (Zosyn)",
          "admin": "IV",
          cost: '$$',
          "coverage": {
            "Pseudomonas Aeruginosa": 0.93,
            "Klebsiella Pneumoniae": 0.92,
            "Klebsiella Aerogenes": 0.77,
            "Enterobacter Cloacae": 0.81,
            "Enterococcus Faecalis": 0.84, // Not seen on antibiogram
            "MSSA": 1,
            "Streptococcus": 1,
            "Gram Negative Bacilli": 1,
            "N. Meningitis": 1,
            "Gram Positive Rods": 1,
            "Bacteroides": 1,
            "Acinetobacter Baumannii": 0.79,
            "Achromobacter Xylosoxidans": 0.9,
            "Citrobacter Freundii": 0.84,
            "Citrobacter Koseri": 0.99,
            "E. coli": 0.95,
            "Klebsiella Oxytoca": 0.94,
            "Morganella": 1,
            "Proteus Mirabilis": 1,
            "Proteus Vulgaris": 1,
            "Pseudomonas Aeruginosa CF mucoid": 0.89,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.72,
            "Serratia Marcescens": 0.97
          }
        },
        {
          "name": "Ertapenem",
          "admin": "IV",
          cost: '$$',
          "coverage": {
            "Stenotrophomonas Maltophilia": 0,
            "Serratia Marcescens": 1,
            "Pseudomonas Aeruginosa": 0,
            "Klebsiella Pneumoniae": 0.99,
            "Klebsiella Oxytoca": 0.99,
            "Enterobacter Cloacae": 0.89,
            "MSSA": 1,
            "Streptococcus": 1,
            "E. Coli": 1,
            "Proteus Mirabilis": 1,
            "Klebsiella Aerogenes": 0.95,
            "ESCAPPM": 1,
            "Gram Negative Cocci": 1,
            "Gram Positive Rods": 1,
            "Bacteroides": 1,
            "Acinetobacter Baumannii": 0,
            "Citrobacter Freundii": 0.96,
            "Citrobacter Koseri": 1,
            "E. coli": 1,
            "Morganella": 1,
            "Proteus Vulgaris": 1
          },
          "contra": [
            "Beta Lactam Allergy"
          ]
        },
        {
          "name": "Imipenem",
          "admin": "IV",
          cost: '$$$',
          "coverage": {
            "Serratia Marcescens": 1,
            "Pseudomonas Aeruginosa": 0.88,
            "Klebsiella Pneumoniae": 1,
            "Klebsiella Oxytoca": 0.99,
            "Klebsiella Aerogenes": 0.82,
            "E. Coli": 1,
            "Enterobacter Cloacae": 0.98,
            "MSSA": 1,
            "Streptococcus": 1,
            "Gram Negative Bacilli": 1,
            "Gram Negative Cocci": 1,
            "Gram Positive Rods": 1,
            "Bacteroides": 1,
            "Acinetobacter Baumannii": 0.95,
            "Achromobacter Xylosoxidans": 0.86,
            "Citrobacter Freundii": 0.92,
            "Citrobacter Koseri": 1,
            "E. coli": 1,
            "Pseudomonas Aeruginosa CF mucoid": 0.79,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.63
          }
        },
        {
          "name": "Meropenem",
          "admin": "IV",
          cost: '$$',
          "coverage": {
            "Pseudomonas Aeruginosa": 0.91,
            "MSSA": 1,
            "Streptococcus": 1,
            "Gram Negative Bacilli": 1,
            "Gram Negative Cocci": 1,
            "Gram Positive Rods": 0.96,
            "Bacteroides": 1,
            "Acinetobacter Baumannii": 0.8,
            "Streptococcus Pneumoniae": 0.87,
            "Achromobacter Xylosoxidans": 0.69,
            "Burkholderia Cepacia": 0.7,
            "Citrobacter Freundii": 0.98,
            "Citrobacter Koseri": 1,
            "Enterobacter Cloacae": 0.99,
            "E. coli": 1,
            "Klebsiella Aerogenes": 0.99,
            "Klebsiella Oxytoca": 0.99,
            "Klebsiella Pneumoniae": 0.99,
            "Morganella": 1,
            "Proteus Mirabilis": 1,
            "Proteus Vulgaris": 1,
            "Pseudomonas Aeruginosa CF mucoid": 0.84,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.75,
            "Serratia Marcescens": 1,
            "Bacteroides Fragilis": 0.94,
            "Bacteroides (not Fragilis)": 0.97,
            "Gram Negative Rods": 1,
            "Clostridium Perfringens": 1,
            "Clostridium (Not Perfringens)": 1
          }
        },
        {
          "name": "Ciprofloxacin",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Staph Aureus": 0.72,
            "Serratia Marcescens": 0.96,
            "Pseudomonas Aeruginosa": 0.89,
            "Klebsiella Pneumoniae": 0.92,
            "Klebsiella Oxytoca": 0.94,
            "E. Coli": 0.78,
            "Klebsiella Aerogenes": 0.99,
            "Enterobacter Cloacae": 0.96,
            "MSSA": 1,
            "Gram Negative Bacilli": 1,
            "Gram Negative Cocci": 1,
            "Acinetobacter Baumannii": 0.7,
            "Enterococcus": 0.72,
            "Achromobacter Xylosoxidans": 0.06,
            "Citrobacter Freundii": 0.95,
            "Citrobacter Koseri": 1,
            "E. coli": 0.77,
            "Morganella": 0.79,
            "Proteus Mirabilis": 0.84,
            "Proteus Vulgaris": 1,
            "Pseudomonas Aeruginosa CF mucoid": 0.76,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.55,
            "Salmonella": 0.85,
            "Campylobacter": 0.61
          },
          contra: ['Pregnancy']
        },
        {
          "name": "Levofloxacin",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Stenotrophomonas Maltophilia": 0.86,
            "Serratia Marcescens": 0.98,
            "Pseudomonas Aeruginosa": 0.85,
            "Klebsiella Pneumoniae": 0.94,
            "Klebsiella Oxytoca": 0.97,
            "Klebsiella Aerogenes": 0.98,
            "E. Coli": 0.78,
            "Enterobacter Cloacae": 0.97,
            "MSSA": 1,
            "Streptococcus": 0.99,
            "Gram Negative Bacilli": 1,
            "Gram Negative Cocci": 1,
            "Atypicals": 1,
            "Acinetobacter Baumannii": 0.75,
            "Streptococcus Agalactiae (Group B)": 0.96,
            "Enterococcus": 0.82,
            "Achromobacter Xylosoxidans": 0.66,
            "Citrobacter Freundii": 0.93,
            "Citrobacter Koseri": 0.98,
            "E. coli": 0.77,
            "Morganella": 0.89,
            "Proteus Mirabilis": 0.85,
            "Proteus Vulgaris": 1,
            "Pseudomonas Aeruginosa CF mucoid": 0.61,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.28
          },
          contra: ['Pregnancy']
        },
        {
          "name": "Moxifloxacin",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "MSSA": 0.86,
            "Streptococcus": 1,
            "E. Coli": 1,
            "Proteus Mirabilis": 1,
            "Klebsiella": 1,
            "ESCAPPM": 1,
            "Gram Negative Cocci": 1,
            "Gram Positive Rods": 1,
            "Bacteroides": 1,
            "Atypicals": 1,
            "Streptococcus Pneumoniae": 1,
            "Staph Aureus": 0.74,
            "MRSA": 0.23,
            "Staphylococcus Lugdunensis": 1,
            "Staphylococcus Epidermidis": 0.56
          },
          contra: ['Pregnancy']
        },
        {
          "name": "Gentamicin",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Serratia Marcescens": 1,
            "Pseudomonas Aeruginosa": 0.91,
            "Klebsiella Pneumoniae": 0.94,
            "Klebsiella Oxytoca": 0.95,
            "E. Coli": 0.88,
            "Enterobacter Cloacae": 0.97,
            "Gram Negative Bacilli": 1,
            "Acinetobacter Baumannii": 0.80,
            "Klebsiella Aerogenes": 1,
            "Enterococcus Faecalis": 0.84,
            "Enterococcus Faecium": 0.94,
            "Achromobacter Xylosoxidans": 0.06,
            "Citrobacter Freundii": 0.93,
            "Citrobacter Koseri": 0.98,
            "E. coli": 0.89,
            "Morganella": 0.78,
            "Proteus Mirabilis": 0.86,
            "Proteus Vulgaris": 1,
            "MSSA": 0.97,
            "Staphylococcus Lugdunensis": 0.98,
            "Staphylococcus Epidermidis": 0.8
          },
          "contra": [
            "Pregnancy"
          ]
        },
        {
          "name": "Tobramycin",
          "admin": "IV",
          cost: '$$',
          "coverage": {
            "Pseudomonas Aeruginosa": 0.98,
            "Gram Negative Bacilli": 1,
            "Acinetobacter Baumannii": 0.85,
            "Achromobacter Xylosoxidans": 0.06,
            "Citrobacter Freundii": 0.93,
            "Citrobacter Koseri": 0.99,
            "Enterobacter Cloacae": 0.97,
            "E. coli": 0.88,
            "Klebsiella Aerogenes": 1,
            "Klebsiella Oxytoca": 0.92,
            "Klebsiella Pneumoniae": 0.94,
            "Morganella": 0.92,
            "Proteus Mirabilis": 0.88,
            "Proteus Vulgaris": 1,
            "Pseudomonas Aeruginosa CF mucoid": 0.95,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.79,
            "Serratia Marcescens": 0.97
          },
          "contra": [
            "Pregnancy"
          ]
        },
        {
          "name": "Amikacin",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Serratia Marcescens": 0.99,
            "Pseudomonas Aeruginosa": 0.97,
            "Klebsiella Pneumoniae": 1,
            "Klebsiella Oxytoca": 0.99,
            "Klebsiella Aerogenes": 1,
            "Enterobacter Cloacae": 0.99,
            "E. Coli": 1,
            "Gram Negative Bacilli": 1,
            "Acinetobacter Baumannii": 0.95,
            "Achromobacter Xylosoxidans": 0.07,
            "Citrobacter Freundii": 1,
            "Citrobacter Koseri": 1,
            "Morganella": 0.98,
            "Proteus Mirabilis": 0.99,
            "Proteus Vulgaris": 1,
            "Pseudomonas Aeruginosa CF mucoid": 0.73,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.47
          },
          "contra": [
            "Pregnancy"
          ]
        },
        {
          "name": "Clindamycin",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Streptococcus": 0.83,
            "Staph Aureus": 0.74,
            "Gram Positive Cocci": 0.66,
            "MRSA": 0.55,
            "Gram Positive Rods": 0.75,
            "Bacteroides": 1,
            'Bacteroides (not Fragilis)': 0.29,
            'Bacteroides Fragilis': 0.74,
            "Streptococcus Agalactiae (Group B)": 0.61,
            "Streptococcus Viridans": 0.8,
            "Streptococcus Pneumoniae": 0.9,
            "MSSA": 0.79,
            "Staphylococcus Lugdunensis": 0.86,
            "Staphylococcus Epidermidis": 0.61,
            "Bacteroides Fragilis": 0.57,
            "Bacteroides (not Fragilis)": 0.31,
            "Gram Negative Rods": 0.43,
            "Clostridium Perfringens": 0.23,
            "Clostridium (Not Perfringens)": 0.52
          }
        },
        {
          "name": "Azithromycin",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Staph Aureus": 0.48,
            "MSSA": 1,
            "Streptococcus": 1,
            "N. Meningitis": 1,
            "Atypicals": 1,
            'H. Influenzae': 0
          }
        },
        {
          "name": "Tetracycline",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Streptococcus": 0.8,
            "Staph Aureus": 0.92,
            'MRSA': 0.87,
            'MSSA': 0.95,
            'Staphylococcus Lugdunensis': 0.96,
            'Staphylococcus Epidermidis': 0.79,
            "Acinetobacter Baumannii": 0.85,
            'Enterococcus': 0.3
          },
          "contra": [
            "Pregnancy"
          ]
        },
        {
          "name": "Tigecycline",
          "admin": "IV",
          cost: '$$',
          "coverage": {
            "Acinetobacter Baumannii": 0.97
          },
          "contra": [
            "Pregnancy"
          ]
        },
        {
          "name": "Doxycycline",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Streptococcus": 1,
            "E. Coli": 1,
            "N. Meningitis": 1,
            "Atypicals": 1,
            "Streptococcus Pneumoniae": 0.56,
            "Enterococcus": 0.25,
            "Staph Aureus": 0.95,
            "MRSA": 0.94,
            "MSSA": 0.95,
            "Staphylococcus Lugdunensis": 0.91,
            "Staphylococcus Epidermidis": 0.81,
            "Campylobacter": 0.55
          },
          "contra": [
            "Pregnancy"
          ]
        },
        {
          "name": "Vancomycin",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Streptococcus": 1,
            "Gram Positive Cocci": 1,
            "Streptococcus Viridans": 1,
            "Streptococcus Pneumoniae": 1,
            "Enterococcus": 0.92,
            "Enterococcus Faecalis": 0.99,
            "Enterococcus Faecium": 0.38,
            "Staph Aureus": 1,
            "MRSA": 1,
            "MSSA": 1,
            "Staphylococcus Lugdunensis": 1,
            "Staphylococcus Epidermidis": 1
          }
        },
        {
          "name": "Daptomycin",
          "admin": "IV",
          cost: '$$',
          "coverage": {
            "Staph Aureus": 1,
            "Enterococcus": 1,
            "Streptococcus": 1
          }
        },
        {
          "name": "Linezolid",
          "admin": "IV,PO",
          cost: '$$$',
          "coverage": {
            "Streptococcus": 1,
            "Gram Positive Cocci": 1,
            "Enterococcus": 1,
            "Enterococcus Faecalis": 0.99,
            "Enterococcus Faecium": 0.99,
            "Staph Aureus": 1,
            "MRSA": 1,
            "MSSA": 1,
            "Staphylococcus Lugdunensis": 1,
            "Staphylococcus Epidermidis": 1
          }
        },
        {
          "name": "Erythromycin",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Staph Aureus": 0.58,
            "Streptococcus": 0.6,
            "Streptococcus Agalactiae (Group B)": 0.54,
            "Streptococcus Viridans": 0.59,
            "Streptococcus Pneumoniae": 0.65,
            "MRSA": 0.1,
            "MSSA": 0.71,
            "Staphylococcus Lugdunensis": 0.84,
            "Staphylococcus Epidermidis": 0.33,
            "Campylobacter": 0.98,
            'H. Influenzae': 0
          }
        },
        {
          "name": "Nitrofurantoin",
          "admin": "PO",
          cost: '$',
          "coverage": {
            "Enterococcus": 0.96,
            "Citrobacter Freundii": 0.94,
            "Citrobacter Koseri": 0.77,
            "Enterobacter Cloacae": 0.35,
            "E. coli": 0.96,
            "Klebsiella Aerogenes": 0.09,
            "Klebsiella Oxytoca": 0.72,
            "Klebsiella Pneumoniae": 0.2,
            "Morganella": 0,
            "Proteus Mirabilis": 0,
            "Proteus Vulgaris": 0,
            "Serratia Marcescens": 0
          }
        },
        {
          "name": "Streptomycin",
          "admin": "IV",
          cost: '$',
          "coverage": {
            "Enterococcus Faecalis": 0.81,
            "Enterococcus Faecium": 0.48
          },
          contra: ['Pregnancy']
        },
        {
          "name": "Amphotericin B",
          "admin": "IV,PO",
          cost: '$$$$',
          "coverage": {
            "Candida Albicans": 1,
            "Candida Glabrata": 1,
            "Candida Parapsilosis": 1,
            "Candida Tropicalis": 1,
            "Candida": 1
          }
        },
        {
          "name": "Micafungin", // Was Caspofungin
          "admin": "IV",
          cost: '$$$$',
          "coverage": {
            "Candida Albicans": 1,
            "Candida Glabrata": 0.89,
            "Candida Parapsilosis": 0.93,
            "Candida Tropicalis": 1,
            "Candida": 0.85
          }
        },
        {
          "name": "Fluconazole",
          "admin": "IV,PO",
          cost: '$',
          contra: ['Pregnancy'],
          "coverage": {
            "Candida Albicans": 0.99,
            "Candida Glabrata": 0.87,
            "Candida Parapsilosis": 0.93,
            "Candida Tropicalis": 0.86
          }
        },
        {
          "name": "Voriconazole",
          "admin": "IV,PO",
          cost: '$$$$',
          "coverage": {
            "Candida Albicans": 1,
            "Candida Parapsilosis": 1,
            "Candida Tropicalis": 0.86,
            "Candida": 1
          }
        },
        {
          "name": "Minocycline",
          "admin": "PO",
          "coverage": {
            "Burkholderia Cepacia": 0.8
          },
          contra: ['Pregnancy']
        },
        {
          "name": "Ceftolozane/Tazobactam",
          "admin": "IV",
          cost: '$$$',
          "coverage": {
            "Pseudomonas Aeruginosa CF mucoid": 0.96,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.92
          }
        },
        {
          "name": "TMP/SMX (Bactrim)",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Streptococcus": 0.84,
            "Staph Aureus": 0.99,
            "Stenotrophomonas Maltophilia": 0.99,
            "Serratia Marcescens": 0.98,
            "Klebsiella Pneumoniae": 0.84,
            "Klebsiella Oxytoca": 0.84,
            "Enterobacter Cloacae": 0.94,
            "Gram Positive Cocci": 1,
            "E. Coli": 0.75,
            "Proteus Mirabilis": 0.75,
            "Klebsiella Aerogenes": 0.99,
            "ESCAPPM": 1,
            "N. Meningitis": 1,
            "Acinetobacter Baumannii": 0.75,
            "Streptococcus Pneumoniae": 0.84,
            "Achromobacter Xylosoxidans": 0.83,
            "Burkholderia Cepacia": 0.63,
            "Citrobacter Freundii": 0.81,
            "Citrobacter Koseri": 0.97,
            "E. coli": 0.69,
            "Morganella": 0.64,
            "Proteus Vulgaris": 1,
            "Salmonella": 0.93,
            "MRSA": 0.97,
            "MSSA": 1,
            "Staphylococcus Lugdunensis": 0.99,
            "Staphylococcus Epidermidis": 0.61
          },
          "contra": [
            "Pregnancy",
            "Sulfa Allergy"
          ]
        },
        {
          "name": "Metronidazole (Flagyl)",
          "admin": "IV,PO",
          cost: '$',
          "coverage": {
            "Gram Positive Rods": 0.67,
            // "Gram Positive Cocci": 0.84,
            "Bacteroides": 1,
            "Bacteroides Fragilis": 1,
            "Bacteroides (not Fragilis)": 0.97,
            "Gram Negative Rods": 1,
            "Clostridium Perfringens": 1,
            "Clostridium (Not Perfringens)": 0.97
          },
          "contra": [
            "Pregnancy"
          ]
        },
        {
          "name": "Aztreonam",
          "admin": "IV",
          cost: '$$$',
          "coverage": {
            "Pseudomonas Aeruginosa": 0.86,
            "Klebsiella Pneumoniae": 0.87,
            "Enterobacter Cloacae": 0.78,
            "Klebsiella Aerogenes": 0.73,
            "Achromobacter Xylosoxidans": 0,
            "Citrobacter Freundii": 0.58,
            "Citrobacter Koseri": 0.96,
            "E. coli": 0.83,
            "Klebsiella Oxytoca": 0.91,
            "Morganella": 0.96,
            "Proteus Mirabilis": 0.96,
            "Pseudomonas Aeruginosa CF mucoid": 0.84,
            "Pseudomonas Aeruginosa CF non-mucoid": 0.72,
            "Serratia Marcescens": 1
          },
          "contra": []
        }
      ],
    'BWH': [
    {
        "coverage": {
        "Citrobacter Freundii": 1,
        "Citrobacter Koseri": 1,
        "Enterobacter Cloacae": 1,
        "E. Coli": 1,
        "Klebsiella Aerogenes": 1,
        "Klebsiella Oxytoca": 1,
        "Streptococcus Pneumoniae": 1,
        "Morganella": 1,
        "Proteus Mirabilis": 1,
        "Serratia Marcescens": 1,
        "Pseudomonas Aeruginosa": 0.97
        },
        "admin": "IV",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Amikacin"
    },
    {
        "coverage": {
        "Enterococcus Faecalis": 0,
        "Enterococcus Faecium": 0
        },
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Beta Lactam Allergy"
        ],
        "name": "Amoxicillin"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0,
        "Citrobacter Koseri": 0.95,
        "Enterobacter Cloacae": 0,
        "E. Coli": 0.84,
        "Klebsiella Aerogenes": 0,
        "Klebsiella Oxytoca": 0.9,
        "Streptococcus Pneumoniae": 0.89,
        "Morganella": 0,
        "Proteus Mirabilis": 0,
        "Serratia Marcescens": 0,
        "Enterococcus Faecalis": 1,
        "Enterococcus Faecium": 0.26
        },
        "admin": "PO",
        "name": "Amoxicillin/Clavulanate (Augmentin)"
    },
    {
        "coverage": {},
        "admin": "IV, PO",
        "cost": "$$$$",
        "name": "Amphotericin B"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0,
        "Citrobacter Koseri": 0,
        "Enterobacter Cloacae": 0,
        "E. Coli": 0.58,
        "Klebsiella Aerogenes": 0,
        "Klebsiella Oxytoca": 0,
        "Streptococcus Pneumoniae": 0,
        "Morganella": 0,
        "Proteus Mirabilis": 0.71,
        "Serratia Marcescens": 0,
        "MSSA": 0,
        "MRSA": 0,
        "MSSE": 0,
        "MRSE": 0,
        "Enterococcus Faecalis": 1,
        "Enterococcus Faecium": 0.26
        },
        "admin": "IV",
        "cost": "$$",
        "name": "Ampicillin"
    },
    {
        "coverage": {
        "Acinetobacter Baumannii": 0.96,
        "Enterococcus Faecalis": 1,
        "Enterococcus Faecium": 0.26
        },
        "admin": "IV",
        "name": "Ampicillin/Sulbactam (Unasyn)"
    },
    {
        "coverage": {},
        "admin": "IV, PO",
        "cost": "$",
        "name": "Azithromycin"
    },
    {
        "coverage": {
        "Pseudomonas Aeruginosa": 0.65
        },
        "admin": "IV",
        "cost": "$$$",
        "name": "Aztreonam"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$",
        "contra": [
        "Beta Lactam Allergy"
        ],
        "name": "Cefazolin (Ancef)"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.97,
        "Citrobacter Koseri": 1,
        "Enterobacter Cloacae": 0.98,
        "E. Coli": 0.99,
        "Klebsiella Aerogenes": 0.97,
        "Klebsiella Oxytoca": 1,
        "Streptococcus Pneumoniae": 0.97,
        "Morganella": 0.98,
        "Proteus Mirabilis": 1,
        "Serratia Marcescens": 1,
        "Pseudomonas Aeruginosa": 0.9,
        "Acinetobacter Baumannii": 0.78
        },
        "admin": "IV",
        "cost": "$",
        "name": "Cefepime"
    },
    {
        "coverage": {},
        "admin": "IV",
        "name": "Cefotaxime"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$",
        "name": "Cefotetan"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0,
        "Citrobacter Koseri": 0.97,
        "Enterobacter Cloacae": 0,
        "E. Coli": 0.94,
        "Klebsiella Aerogenes": 0,
        "Klebsiella Oxytoca": 0.97,
        "Streptococcus Pneumoniae": 0.94,
        "Morganella": 0.25,
        "Proteus Mirabilis": 0.97,
        "Serratia Marcescens": 0
        },
        "admin": "IV",
        "cost": "$",
        "name": "Cefoxitin"
    },
    {
        "coverage": {
        "MSSA": 1,
        "MRSA": 1,
        "MSSE": 0,
        "MRSE": 0,
        "Enterococcus Faecalis": 0,
        "Enterococcus Faecium": 0,
        "Streptococcus Pneumoniae": 0
        },
        "admin": "IV",
        "name": "Ceftaroline"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.72,
        "Citrobacter Koseri": 0.99,
        "Enterobacter Cloacae": 0.79,
        "E. Coli": 0.96,
        "Klebsiella Aerogenes": 0.84,
        "Klebsiella Oxytoca": 0.98,
        "Streptococcus Pneumoniae": 0.91,
        "Morganella": 0.8,
        "Proteus Mirabilis": 0.99,
        "Serratia Marcescens": 0.98,
        "Pseudomonas Aeruginosa": 0.89,
        "Acinetobacter Baumannii": 0.65
        },
        "admin": "IV",
        "cost": "$$",
        "name": "Ceftazidime"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$$$",
        "name": "Ceftolozone/Tazobactam"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.69,
        "Citrobacter Koseri": 0.99,
        "Enterobacter Cloacae": 0.77,
        "E. Coli": 0.92,
        "Klebsiella Aerogenes": 0.84,
        "Klebsiella Oxytoca": 0.93,
        "Streptococcus Pneumoniae": 1,
        "Morganella": 0.87,
        "Proteus Mirabilis": 0.98,
        "Serratia Marcescens": 0.97,
        "MSSA": 0,
        "MRSA": 0,
        "MSSE": 0,
        "MRSE": 0,
        "Enterococcus Faecalis": 0,
        "Enterococcus Faecium": 0
        },
        "admin": "IV",
        "cost": "$",
        "contra": [
        "Beta Lactam Allergy"
        ],
        "name": "Ceftriaxone (CTX)"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$",
        "name": "Cefuroxime"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.9,
        "Citrobacter Koseri": 0.99,
        "Enterobacter Cloacae": 0.91,
        "E. Coli": 0.8,
        "Klebsiella Aerogenes": 0.96,
        "Klebsiella Oxytoca": 0.95,
        "Streptococcus Pneumoniae": 0.86,
        "Morganella": 0.81,
        "Proteus Mirabilis": 0.87,
        "Serratia Marcescens": 0.92,
        "Pseudomonas Aeruginosa": 0.83,
        "Acinetobacter Baumannii": 0.88
        },
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Ciprofloxacin"
    },
    {
        "coverage": {
        "MSSA": 0.76,
        "MRSA": 0.69,
        "MSSE": 0.74,
        "MRSE": 0.4,
        "Enterococcus Faecalis": 0,
        "Enterococcus Faecium": 0,
        "Streptococcus Pneumoniae": 0.75
        },
        "admin": "IV, PO",
        "cost": "$",
        "name": "Clindamycin"
    },
    {
        "coverage": {
        "MSSA": 1,
        "MRSA": 1,
        "MSSE": 1,
        "MRSE": 1,
        "Enterococcus Faecalis": 0.6,
        "Enterococcus Faecium": 0.97,
        "Streptococcus Pneumoniae": 0
        },
        "admin": "IV",
        "cost": "$$",
        "name": "Daptomycin"
    },
    {
        "coverage": {},
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Doxycycline"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$$",
        "contra": [
        "Beta Lactam Allergy"
        ],
        "name": "Ertapenem"
    },
    {
        "coverage": {
        "MSSA": 0.67,
        "MRSA": 0.14,
        "MSSE": 0.55,
        "MRSE": 0.17,
        "Enterococcus Faecalis": 0.1,
        "Enterococcus Faecium": 0.03,
        "Streptococcus Pneumoniae": 0.5
        },
        "admin": "IV, PO",
        "cost": "$",
        "name": "Erythromycin"
    },
    {
        "coverage": {
        "Candida Albicans": 0.96,
        "Candida Glabrata": 0,
        "Candida Krusel": 0,
        "Candida Parapsilosis": 1,
        "Candida Tropicalis": 0.94
        },
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Fluconazole"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.96,
        "Citrobacter Koseri": 1,
        "Enterobacter Cloacae": 0.96,
        "E. Coli": 0.92,
        "Klebsiella Aerogenes": 0.99,
        "Klebsiella Oxytoca": 0.97,
        "Streptococcus Pneumoniae": 0.95,
        "Morganella": 0.95,
        "Proteus Mirabilis": 0.93,
        "Serratia Marcescens": 0.99,
        "Pseudomonas Aeruginosa": 0.91,
        "Acinetobacter Baumannii": 0.96
        },
        "admin": "IV",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Gentamicin"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$$$",
        "name": "Imipenem"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.88,
        "Citrobacter Koseri": 0.98,
        "Enterobacter Cloacae": 0.89,
        "E. Coli": 0.74,
        "Klebsiella Aerogenes": 0.92,
        "Klebsiella Oxytoca": 0.96,
        "Streptococcus Pneumoniae": 0,
        "Morganella": 0.81,
        "Proteus Mirabilis": 0.87,
        "Serratia Marcescens": 0.92,
        "Pseudomonas Aeruginosa": 0.71,
        "Acinetobacter Baumannii": 0.88,
        "Stenotrophomonas Maltophilia": 0.8,
        "MSSA": 0.94,
        "MRSA": 0.52,
        "MSSE": 0.9,
        "MRSE": 0.43,
        "Enterococcus Faecalis": 0.82,
        "Enterococcus Faecium": 0.12
        },
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Levofloxacin"
    },
    {
        "coverage": {
        "MSSA": 0,
        "MRSA": 0,
        "MSSE": 0,
        "MRSE": 0,
        "Enterococcus Faecalis": 0.99,
        "Enterococcus Faecium": 0.98,
        "Streptococcus Pneumoniae": 0
        },
        "admin": "IV, PO",
        "cost": "$$$",
        "name": "Linezolid"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 1,
        "Citrobacter Koseri": 1,
        "Enterobacter Cloacae": 0.99,
        "E. Coli": 1,
        "Klebsiella Aerogenes": 1,
        "Klebsiella Oxytoca": 1,
        "Streptococcus Pneumoniae": 0.99,
        "Morganella": 1,
        "Proteus Mirabilis": 1,
        "Serratia Marcescens": 0.99,
        "Pseudomonas Aeruginosa": 0.9,
        "Acinetobacter Baumannii": 0.88
        },
        "admin": "IV",
        "cost": "$$",
        "name": "Meropenem"
    },
    {
        "coverage": {},
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Metronidazole (Flagyl)"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$$$$",
        "name": "Micafungin"
    },
    {
        "coverage": {
        "Stenotrophomonas Maltophilia": 1
        },
        "admin": "PO",
        "contra": [
        "Pregnancy"
        ],
        "name": "Minocycline"
    },
    {
        "coverage": {},
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Moxifloxacin"
    },
    {
        "coverage": {},
        "admin": "IV",
        "name": "Nafcillin"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.94,
        "Citrobacter Koseri": 0.83,
        "Enterobacter Cloacae": 0.29,
        "E. Coli": 0.97,
        "Klebsiella Aerogenes": 0.13,
        "Klebsiella Oxytoca": 0.79,
        "Streptococcus Pneumoniae": 0.22,
        "Morganella": 0,
        "Proteus Mirabilis": 0,
        "Serratia Marcescens": 0
        },
        "admin": "PO",
        "cost": "$",
        "name": "Nitrofurantoin"
    },
    {
        "coverage": {
        "MSSA": 1,
        "MRSA": 0,
        "MSSE": 1,
        "MRSE": 0,
        "Enterococcus Faecalis": 0,
        "Enterococcus Faecium": 0,
        "Streptococcus Pneumoniae": 0
        },
        "admin": "IV, PO",
        "name": "Oxacillin"
    },
    {
        "coverage": {
        "MSSA": 0.31,
        "MRSA": 0,
        "MSSE": 0.2,
        "MRSE": 0,
        "Enterococcus Faecalis": 0,
        "Enterococcus Faecium": 0,
        "Streptococcus Pneumoniae": 1
        },
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Penicillin Allergy",
        "Beta Lactam Allergy"
        ],
        "name": "Penicillin G"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.76,
        "Citrobacter Koseri": 0.97,
        "Enterobacter Cloacae": 0.82,
        "E. Coli": 0.97,
        "Klebsiella Aerogenes": 0.86,
        "Klebsiella Oxytoca": 0.95,
        "Streptococcus Pneumoniae": 0.93,
        "Morganella": 0.95,
        "Proteus Mirabilis": 1,
        "Serratia Marcescens": 0.98,
        "Pseudomonas Aeruginosa": 0.86,
        "Acinetobacter Baumannii": 0.72,
        "Enterococcus Faecalis": 1,
        "Enterococcus Faecium": 0.26
        },
        "admin": "IV",
        "cost": "$$",
        "name": "Piperacillin/Tazobactam (Zosyn)"
    },
    {
        "coverage": {
        "MSSA": 1,
        "MRSA": 0.99,
        "MSSE": 0.99,
        "MRSE": 0.98,
        "Enterococcus Faecalis": 0.32,
        "Enterococcus Faecium": 0.17,
        "Streptococcus Pneumoniae": 1
        },
        "admin": "IV, PO",
        "name": "Rifampin"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Streptomycin"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.92,
        "Citrobacter Koseri": 0.99,
        "Enterobacter Cloacae": 0.87,
        "E. Coli": 0.78,
        "Klebsiella Aerogenes": 0.98,
        "Klebsiella Oxytoca": 0.95,
        "Streptococcus Pneumoniae": 0.79,
        "Morganella": 0.8,
        "Proteus Mirabilis": 0.87,
        "Serratia Marcescens": 0.99,
        "Acinetobacter Baumannii": 0.84,
        "Stenotrophomonas Maltophilia": 0.74,
        "MSSA": 0.96,
        "MRSA": 0.93,
        "MSSE": 0.86,
        "MRSE": 0.38,
        "Enterococcus Faecalis": 0,
        "Enterococcus Faecium": 0
        },
        "admin": "IV, PO",
        "cost": "$",
        "contra": [
        "Pregnancy",
        "Sulfa Allergy"
        ],
        "name": "TMP/SMX (Bactrim)"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.88,
        "Citrobacter Koseri": 0.99,
        "Enterobacter Cloacae": 0.86,
        "E. Coli": 0.76,
        "Klebsiella Aerogenes": 0.96,
        "Klebsiella Oxytoca": 0.93,
        "Streptococcus Pneumoniae": 0.67,
        "Morganella": 0.59,
        "Proteus Mirabilis": 0,
        "Serratia Marcescens": 0.23,
        "Acinetobacter Baumannii": 0.8,
        "MSSA": 0.94,
        "MRSA": 0.79,
        "MSSE": 0.89,
        "MRSE": 0.75,
        "Enterococcus Faecalis": 0.23,
        "Enterococcus Faecium": 0.16
        },
        "admin": "IV",
        "cost": "$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Tetracycline"
    },
    {
        "coverage": {},
        "admin": "IV",
        "cost": "$$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Tigecycline"
    },
    {
        "coverage": {
        "Citrobacter Freundii": 0.98,
        "Citrobacter Koseri": 1,
        "Enterobacter Cloacae": 0.95,
        "E. Coli": 0.93,
        "Klebsiella Aerogenes": 0.98,
        "Klebsiella Oxytoca": 0.97,
        "Streptococcus Pneumoniae": 0.94,
        "Morganella": 0.95,
        "Proteus Mirabilis": 0.95,
        "Serratia Marcescens": 0.88,
        "Pseudomonas Aeruginosa": 0.96,
        "Acinetobacter Baumannii": 0.97
        },
        "admin": "IV",
        "cost": "$$",
        "contra": [
        "Pregnancy"
        ],
        "name": "Tobramycin"
    },
    {
        "coverage": {
        "MSSA": 1,
        "MRSA": 1,
        "MSSE": 1,
        "MRSE": 1,
        "Enterococcus Faecalis": 0.94,
        "Enterococcus Faecium": 0.41,
        "Streptococcus Pneumoniae": 1
        },
        "admin": "IV",
        "cost": "$",
        "name": "Vancomycin"
    },
    {
        "coverage": {},
        "admin": "IV, PO",
        "cost": "$$$$",
        "name": "Voriconazole"
    }
    ]
};