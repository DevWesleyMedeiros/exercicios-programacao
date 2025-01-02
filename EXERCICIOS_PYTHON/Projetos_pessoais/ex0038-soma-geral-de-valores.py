'''Soma geral de valores'''

from time import sleep

comeco = int(input('Onde você quer começar: '))
fim = int(input('Onde você quer terminar: '))
passo = int(input('De quanto em quanto você pular: '))
soma = 0
for contador in range(comeco, fim, passo):
    print(contador, end=' ')
    sleep(0.5)
    soma += contador

print('\nA soma dos valores dados é {}'.format(soma))

print('FIM')
