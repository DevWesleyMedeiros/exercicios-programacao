from random import randint
from time import sleep

print('-=' * 28)
print(f'{" " * 18} JOGO DA MEGA SENA {" " * 18}')
print('-=' * 28)
quantidadeJogos = int(input('Quantos jogos você quer gerar? '))
valores_por_jogo = 6  # quantidade de números por quantidade de jogos

print('=' * 28, f'GERANDO {quantidadeJogos} JOGOS', '=' * 28)
lista_de_jogos = []

# Iterando a quantidade de jogos
for jogo in range(quantidadeJogos):
    # lista onde irão os valores, caso ainda não contenham
    valores_jogo = []
    for palpite in range(valores_por_jogo):
        valor_aleatorio = randint(1, 60)
        if valor_aleatorio not in valores_jogo:
            valores_jogo.append(valor_aleatorio)
    lista_de_jogos.append(valores_jogo)
    valores_jogo.sort()
    print(f'{jogo + 1}° Jogo: {valores_jogo}')
    sleep(1)
print()
print('=' * 15, end='')
print(' BOA SORTE!! ', end='')
print('=' * 15, end='')
