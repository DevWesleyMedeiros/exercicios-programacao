listaPares = []
listaImpares = []
while True:
    numero = int(input('Digite um valor:'))
    if numero % 2 == 0:
        listaPares.append(numero)
    else:
        listaImpares.append(numero)
    opcao = str(input('Você quer continuar [S/N]:')).strip().upper()[0]
    while opcao not in 'SN':
        opcao = str(input('OPÇÃO INVÁLIDA!! "S" para sim e "N" para não')).strip().upper()[0]
    if opcao in 'N':
        break
listaParesImpares = listaImpares + listaPares
print(f'A lista completa é {listaParesImpares}')
print(f'A lista de números Pares é {listaPares}')
print(f'A lista de números Impares é {listaImpares}')
