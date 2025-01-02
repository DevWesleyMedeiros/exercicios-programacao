'''
v1 = int(input('Digite um valor: '))
v2 = int(input('Digite um valor: '))
v3 = int(input('Digite um valor: '))
v4 = int(input('Digite um valor: '))
v5 = int(input('Digite um valor: '))
v6 = int(input('Digite um valor: '))
v7 = int(input('Digite um valor: '))
v8 = int(input('Digite um valor: '))
v9 = int(input('Digite um valor: '))
lista = [[v1, v2, v3], [v4, v5, v6], [v7, v8, v9]]
print(f'[{lista[0][0]:^5}] [{lista[0][1]:^5}] [{lista[0][1]:^5}]')
print(f'[{lista[1][0]:^5}] [{lista[1][1]:^5}] [{lista[1][2]:^5}]')
print(f'[{lista[2][0]:^5}] [{lista[2][1]:^5}] [{lista[2][2]:^5}]')
'''

'''
OUTRA SOLUÇÃO:
matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
for linha in range(0, 3):
    for coluna in range(0, 3):
        matriz[linha][coluna] = int(input(f'Digite um valor para [{linha}, {coluna}]: '))
print('=' * 30)
for l in range(0, 3):
    for c in range(0, 3):
        print(f'[{matriz[l][c]:^5}]', end='')
    print()
print('FIM!!')
'''










