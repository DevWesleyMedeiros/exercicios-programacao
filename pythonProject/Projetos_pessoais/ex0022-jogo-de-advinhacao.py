from time import sleep
from random import randint

red_text = "\033[31mTexto em vermelho\033[0m"
green_text = "\033[32mTexto em verde\033[0m"
yellow_text = "\033[33mTexto em amarelo\033[0m"
blue_text = "\033[34mTexto em azul\033[0m"
magenta_text = "\033[35mTexto em magenta\033[0m"
cyan_text = "\033[36mTexto em ciano\033[0m"
white_text = "\033[37mTexto em branco\033[0m"

# Exemplo de uso
print(red_text)
print(green_text)
print(yellow_text)
print(blue_text)
print(magenta_text)
print(cyan_text)
print(white_text)


print('\033[33m=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\033[0m')
print('             \033[34mJOGO DE ADVINHAÇÃO\033[0m              ')
print('\033[33m=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\033[0m')

sleep(3)
print('O computador está pensando em um número de 1 a 5. Tente adivinhar...')

jogador = None

while jogador not in range(1, 5):
    try:
        jogador = int(input('Digite o número: '))
        if jogador not in range(6):
            print('Por favor, digite um número entre 1 e 5.')
    except ValueError:
        print('Entrada inválida. Digite um número inteiro entre 1 e 5.')
sleep(3)
computador = randint(1, 5)
if jogador == computador:
    print('\033[32m[PARABÉNS!!] Você me venceu\033[0m')
else:
    print('\033[31m[VOCÊ PERDEU!!]\033[0m')
    print('Computador pensou no {} e você no {}'.format(computador, jogador))

print('FIM')


