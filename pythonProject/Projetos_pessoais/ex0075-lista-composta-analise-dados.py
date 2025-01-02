dadosTemporario = list()
dadosPermanente = list()
maiorPeso = menorPeso = 0
while True:
    dadosTemporario.append(str(input('Digite o nome: ')).strip().upper())
    dadosTemporario.append(float(input('Digite a peso:')))
    if len(dadosTemporario) == 0:
        maiorPeso = menorPeso = dadosTemporario[1]
    else:
        if dadosTemporario[1] > maiorPeso:
            maiorPeso = dadosTemporario[1]
        if dadosTemporario[1] < menorPeso:
            menorPeso = dadosTemporario[1]
    dadosPermanente.append(dadosTemporario[:])
    dadosTemporario.clear()
    opcao = str(input('Você quer continuar [S/N]:')).strip().upper()[0]
    while opcao not in "SN":
        opcao = str(input('OPÇÃO INVÁLIDA!! "S" para sim e "N" para não: ')).strip().upper()[0]
    if opcao == 'N':
        break
print('-' * 30)
print(f'Ao todo você cadastrou {len(dadosPermanente)} pessoas')
print(f'O maior peso é de {maiorPeso}Kg. Peso de ', end='')
for nome in dadosPermanente:
    if nome[1] == maiorPeso:
        print(f'{nome[0]} ')
print(f'O menor peso é de {menorPeso}Kg. Peso de ')
for nome in dadosPermanente:
    if nome[1] == menorPeso:
        print(f'{nome[0]} ')
