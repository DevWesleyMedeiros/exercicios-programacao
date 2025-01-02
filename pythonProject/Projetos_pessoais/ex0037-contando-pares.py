'''CONTAGEM DE NÚMERO PARES DE 1 ATÉ 50'''
from time import sleep
comeco = int(input('Onde você quer começar: '))
fim = int(input('Onde você quer terminar: '))
passo = int(input('De quanto em quanto você pular: '))
for iterador in range(comeco, fim, passo):
    print(iterador, end='-=')
    sleep(0.5)
print('\nFIM')

