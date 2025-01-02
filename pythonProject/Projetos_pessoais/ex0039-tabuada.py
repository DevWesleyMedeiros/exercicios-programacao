'''Let's learn the table'''

from time import sleep

numero = int(input('A tabuada do: '))
for iterador in range(0, 10+1, 1):
    print(f'{numero} X {iterador} = {numero * iterador}')
    sleep(0.5)

print('FIM DO PROGRAMA')
