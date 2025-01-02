from time import sleep

numero = int(input('Digite um número qualquer: '))
sleep(2)
print('Verificando se o número é par ou impar...')
sleep(2)
if numero % 2 == 0:
    print('O número dado é PAR!!')
else:
    print('O número dado é IMPAR!!')

print('FIM')

