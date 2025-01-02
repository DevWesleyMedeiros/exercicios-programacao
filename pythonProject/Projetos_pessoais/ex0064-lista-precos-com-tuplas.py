produtos_precos = ('Lápis', 1.75,
                   'Borracha', 2,
                   'Caderno', 15.90,
                   'Estojo', 25,
                   'Transferidor', 4.90,
                   'Compasso', 9.90,
                   'Mochila', 120.32,
                   'Canetas', 22.30,
                   'livros', 100.50)
print('-' * 40)
print(f'{"LISTAGEM DE PREÇOS":^40}')
print('-' * 40)
for pos in range(0, len(produtos_precos)):
    if pos % 2 == 0:
        print(f'{produtos_precos[pos]:.<30}', end='')
    else:
        print(f'R${produtos_precos[pos]:>7.2f}')
print('-' * 40)
