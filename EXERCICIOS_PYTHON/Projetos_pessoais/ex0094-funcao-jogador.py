print('-' * 30)
def mostraDadosJogador(nome, ngols=0):

    '''
    :param nome: Nome do jogador
    :param ngols: Número de gols feito pelo jogador
    :return: print formatado com os dados do jogador
    '''
    if ngols > 1:
        return f'O Jogador {nome} fez {ngols} gols, no campeonato'
    else:
        return f'O Jogador {nome} fez {ngols} gol, no campeonato'


# Programa principal
nome = str(input('Nome do Jogador:')).strip().upper()
gols = str(input('Número de gols:'))
if nome == '':
    nome = '<Desconhecido>'
if nome.isnumeric():
    nome = '<Desconhecido>'
if gols.isnumeric():
    gols = int(gols)
else:
    gols = 0
print(mostraDadosJogador(nome, gols))
