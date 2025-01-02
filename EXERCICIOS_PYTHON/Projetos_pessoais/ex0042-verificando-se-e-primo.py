'''
Número primo são aqueles que dividem somente por um ou ele mesmo
EX: 2, 3, 5, 7, 11...
'''
cont_divisores = 0
numero = int(input('Digite um número: '))
for iterador in range(1, numero+1, 1):
    if numero % iterador == 0:
        print('\033[34m', end=' ')
        cont_divisores += 1
    else:
        print('\033[31m', end=' ')
    print(f'{iterador}', end=' ')
if cont_divisores > 2:
    print(f'\n\033[mNeste intervalo, o número {numero} foi dividido {cont_divisores} vezes')
    print(f'Por isso, o número {numero} NÃO É PRIMO')
else:
    print(f'O número {numero} foi divido somente {cont_divisores} vezes')
    print('Por isso, ELE É PRIMO')

print('\033[mFIM DO PROGRAMA!!')








