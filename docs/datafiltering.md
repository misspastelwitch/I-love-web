👉 Experiment 1: Ik wil alle studenten gesorteerd op name
https://fdnd.directus.app/items/person?sort=name

👉 Experiment 2: Ik wil alle names van studenten die een name hebben die begint met de letter D
https://fdnd.directus.app/items/person?filter[name][_starts_with]=D
👉 Experiment 3: Ik wil alle names van studenten die een name hebben die begint met de letter D of K
https://fdnd.directus.app/items/person?fields=name&filter=[_or][0][name][_starts_with]=D&filter[_or][1][name][_starts_with]=K
👉 Experiment 4: Ik wil alle names en birthdates van studenten die een birthdate hebben ingevuld
https://fdnd.directus.app/items/person?filter[birthdate]
👉 Experiment 5: Ik wil alle names en birthdates van studenten met een birthdate in 2002

👉 Experiment 6: Haal een lijst van alle unieke fav_tag op, en laat zien hoeveel mensen die tag hebben
