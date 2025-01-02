times = list()
jogador = dict()
partidas = list()

while True:
    jogador.clear()
    jogador["Nome"] = str(input('Digite o nome do jogador: ')).strip().upper()
    totalPartidas = int(input(f'Quantas partidas o {jogador["Nome"]} jogou: '))
    for p in range(1, totalPartidas+1):
        partidas.append(int(input(f'Quantos gol(s) na paritida {p}: ')))
    jogador["Gols"] = partidas[:]
    jogador["Total gols"] = sum(partidas)
    times.append(jogador.copy())
    opcao = str(input('Você quer continuar "S" ou "N"? ')).strip().upper()[0]
    while opcao not in "SN":
        opcao = str(input('ERRO! Você deve digitar "S" ou "N"? ')).strip().upper()[0]
        if opcao in "SN":
            break
    if opcao == "N":
        break

print('=' * 100)
print('cod ', end='')
for i in jogador.keys():
    print(f'{i:<20} ', end='')
print()
print('=' * 100)
for k, v in enumerate(times):
    print(f' {k:>3} ', end='')
    for d in v.values():
        print(f'{str(d):<20} ', end='')
    print()
print('=' * 100)
while True:
    busca = int(input('Mostrar dados de qual jogador (999 para parar o programa)? '))
    if busca == 999:
        break
    elif busca >= len(times):
        print(f'ERRO! não existe jogador com o código {busca}')
    else:
        print(f' -- Levantamento do jodador {times[busca]["Nome"]}')
        for i, g in enumerate(times):
            print(f'   No jogo {i} fez {g} gols')
    print('=' * 100)

print('<<<<<   Volte Sempre   >>>>>')
