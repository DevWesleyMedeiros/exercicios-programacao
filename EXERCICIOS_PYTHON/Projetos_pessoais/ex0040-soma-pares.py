from time import sleep

comeco = int(input('Digite o começo do intervalo numérico: '))
fim = int(input('Digite o fim do intervalo numérico: '))
passo = int(input('Digite de quantos em quantos você pular: '))
somaPares = 0
for iterador in range(comeco, fim+1, passo):
    print(f'{iterador}', end=' ')
    sleep(0.5)
    if iterador % 2 == 0:
        somaPares = somaPares + iterador

print(f'\nA soma dos valores pares vale {somaPares}')

