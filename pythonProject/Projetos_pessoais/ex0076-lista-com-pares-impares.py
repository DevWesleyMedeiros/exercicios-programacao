numero = [[], []]
for v in range(0, 6):
    valor = int(input('Digite um valor: '))
    if valor % 2 == 0:
        numero[0].append(valor)
    else:
        numero[1].append(valor)
print(f'A lista de valores IMPARES É {sorted(numero[0])} ')
print(f'A lista de valores  IMPARES É {sorted(numero[1])}')
