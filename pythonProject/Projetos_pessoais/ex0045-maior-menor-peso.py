maior_peso = 0
menor_peso = 0
for pessoa in range(1, 5+1, 1):
    peso = float(input(f'Digite o peso da {pessoa}° pessoa: '))
    if pessoa == 1:
        maior_peso = peso
        menor_peso = peso
    else:
        if peso > maior_peso:
            maior_peso = peso
        if peso < menor_peso:
            menor_peso = peso
print(f'O maior peso é de {maior_peso}Kg')
print(f'O menor peso é de {menor_peso}Kg')



