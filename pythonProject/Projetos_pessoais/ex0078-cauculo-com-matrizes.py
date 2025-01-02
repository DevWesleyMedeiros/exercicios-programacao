matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
somaPares = 0
contador = 0
somaTerceiraColuna = 0
maiorSegundaLinha = 0
for linha in range(0, 3):
    for coluna in range(0, 3):
        matriz[linha][coluna] = int(input(f'Digite um valor para [{linha}, {coluna}]: '))
        if matriz[linha][coluna] % 2 == 0:
            somaPares += matriz[linha][coluna]
        if coluna == 2:
            somaTerceiraColuna += matriz[linha][coluna]
        if linha == 1:
            maiorSegundaLinha = max(matriz[linha])
print('=' * 30)
for l in range(0, 3):
    for c in range(0, 3):
        print(f'[{matriz[l][c]:^5}]', end='')
    print()
print('=' * 30)
print(f'A soma dos valores PARES é {somaPares}')
print(f'A soma dos valores da 3° coluna é {somaTerceiraColuna}')
print(f'A maior dos valores na 2° linha é {maiorSegundaLinha}')
