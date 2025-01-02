from math import hypot

cateto_oposto = float(input('Qual é o valor do cateto oposto: '))
cateto_adjacente = float(input('Qual é o valor do cateto adjacente: '))
hipotenusa = hypot(cateto_oposto, cateto_adjacente)
hipotenusa_num_inteiro = int(hipotenusa)
print(f'O valor da Hipotenusa com os catetos {cateto_oposto} e {cateto_adjacente} vale {hipotenusa_num_inteiro}')

