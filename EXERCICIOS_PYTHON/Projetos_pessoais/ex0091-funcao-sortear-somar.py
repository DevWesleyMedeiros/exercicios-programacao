from random import randint
from time import sleep


def somaPares(*num):
    soma_par = 0
    for vp in num:
        if vp % 2 == 0:
            soma_par += vp
    return soma_par


sleep(1)


def sortearValores(*num):
    print(f'Sorteando {len(num)} valores', end=' ')
    sleep(0.5)
    for v in num:
        print(f'{v}', end=' ')
        sleep(0.5)
    print('Pronto!')
    print(f'A soma dos valores pares vale {somaPares(*num)}')


lista = [
         randint(1, 100), randint(1, 100), randint(1, 100),
         randint(1, 100), randint(1, 100), randint(1, 100),
         randint(1, 100), randint(1, 100), randint(1, 100)
         ]

sortearValores(*lista)
'''
Se eu passar somente a lista como argumento para a função sortearValores, teriamos um erro, já que a função
espera multiplos argumentos e a lista sem o sinal "*" é somente um argumento. Sendo assim 
devemos desempacotar a variável lista para pegarmos os seus valores como argumentos
'''


