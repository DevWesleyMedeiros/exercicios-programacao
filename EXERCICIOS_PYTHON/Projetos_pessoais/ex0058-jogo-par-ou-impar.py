'''
VAMOS JOGAR PAR OU IMPAR, JOVEM?
OS NÚMEROS VÃO DE 0 A 20
'''

from time import sleep
from random import randint

print('-=' * 15)
print('Vamos jogar PAR ou IMPAR!!')
print('-=' * 15)
contadorVitorias = 0
while True:
    jogador = int(input('Digite um valor entre 1 e 10: '))
    computador = randint(1, 10)
    total = computador + jogador
    tipo = ' '
    while tipo not in 'PI':
        tipo = str(input('PAR ou IMPAR [P/I]: ')).strip().upper()[0]
        print(f'Você jogou {jogador} e o computador {computador}. Total de {total} deu {tipo}')
        if tipo == 'P':
            if total % 2 == 0:
                print('VOCÊ GANHOU!!')
                contadorVitorias += 1
            else:
                print('VOCÊ PERDEU!!')
                break
        elif tipo == 'I':
            if total % 2 == 1:
                print('VOCÊ GANHOU!!')
                contadorVitorias += 1
            else:
                print('VOCÊ PERDEU!!')
            break
    sleep(1.5)
    print('-=' * 15)
    print('Vamos Jogar de novo!!')
print(f'GAME OVER!! Você venceu {contadorVitorias} vezes')


