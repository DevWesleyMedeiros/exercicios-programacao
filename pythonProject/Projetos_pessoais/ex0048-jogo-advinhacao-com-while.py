from random import randint
from time import sleep

def durma_codigo():
    sleep(1.5)

computador = randint(1, 10)
print('Sou o seu computador...')
durma_codigo()
print('Acabei de pensar em um número entre 0 e 10...')
durma_codigo()
print('Será que você consegue adivinhar qual foi?')
durma_codigo()
contador_tentativas = 0
jogador = int(input('Tente adivinhar o número pensado pelo computador: '))
while jogador != computador:
    jogador = int(input('\033[31mVOCÊ ERROU!!\033[0m Tente de novo: '))
    contador_tentativas += 1
    if jogador > computador:
        print(f'\033[32mMENOS...\033[0m pensei em um número menor que {jogador}')
    elif jogador < computador:
        print(f'\033[32mMAIS...\033[0m pensei em um número maior que {jogador}')
    else:
        print('\033[34mEHHH BAAH!!\033[0m')
print(f'\033[34mPARABÉNS VOCÊ VENCEU\033[0m com {contador_tentativas+1} tantativa(s)')


