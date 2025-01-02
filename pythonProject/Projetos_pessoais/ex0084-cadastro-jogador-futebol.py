dadosJogador = dict()
dadosJogador["Nome do jogador"] = str(input('Nome do jogador: ')).strip().upper()
listaPartidas = list()
dictPartidas = dict()
partidas = int(input(f'Quantas partidas {dadosJogador["Nome do jogador"]} jogou? '))
dictPartidas["Partidas"] = partidas
somaGols = 0
dictGols = dict()
listGosls = list()
for p in range(0, partidas):
    gols = int(input(f' - Quantos gols na partida {p+1}: '))
    listGosls.append(gols)
    somaGols += gols
    dictPartidas["Partidas"] = partidas
dadosJogador["gols"] = listGosls
dadosJogador["Total gols"] = somaGols
print('=' * 40)
print(dadosJogador)
print(f'{dadosJogador.keys()}')
print(f'{dadosJogador.values()}')
print(f'{dadosJogador.items()}')
print('=' * 40)
for k, v in dadosJogador.items():
    print(f'No campo {k} tem o valor {v}')
print('=' * 40)
print('FIM')


