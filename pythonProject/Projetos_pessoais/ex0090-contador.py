from time import sleep


def randomNumbers(*num):
    maior = contador = 0
    print('-=-' * 30)
    print('Analisando os valores sorteados')
    for v in num:
        if v == 0:
            maior = v
        if v > maior:
            maior = v
        contador += 1
    print(f'{num} foram informados {contador} valores e o maior vale {maior}')
    print('-=-' * 30)
    sleep(1)


randomNumbers(1, 0, 5, 8, 3)
randomNumbers(1, 10, 5, 8, 3)
randomNumbers(1, 15, 5, 7, 3)
randomNumbers(1, 0, 5, 8, 3, 6, 100, 1000,)
randomNumbers(1, 11)

