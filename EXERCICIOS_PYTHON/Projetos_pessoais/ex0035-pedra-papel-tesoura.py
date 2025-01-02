'''VAMOS JOGAR JOKENPO!!!'''

from random import randint
from time import sleep

lista_itens = ('Pedra', 'Papel', 'Tesoura')
print('''OPÇÕES:
    [0] PEDRA
    [1] PAPEL
    [2] TESOURA''')
computador = randint(0, 2)
jogador = int(input('Sua jogada: '))
sleep(1)
print('JO...')
sleep(1)
print('KEN...')
sleep(1)
print('PO...')
sleep(1)
if computador == 0 and jogador == 2:
    print('\033[31mCOMPUTADOR VENCEU!!\033[0m')
elif computador == 1 and jogador == 0:
    print('\033[31mCOMPUTADOR VENCEU!!\033[0m')
elif computador == 2 and jogador == 1:
    print('\033[31mCOMPUTADOR VENCEU!!\033[0m')
elif computador == jogador:
    print('\033[33mEMPATAMOS!!\033[0m')
else:
    print('\033[34mJOGADOR VENCEU!!\033[0m')
print('-=' * 20)
print('Computador {} e jogador {}'.format(lista_itens[computador], lista_itens[jogador]))
print('-=' * 20)
print('FIM DO PROGRAMA!!')


