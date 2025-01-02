lista_numero = []
while True:
    numero = int(input('Digite um número: '))
    if numero not in lista_numero:
        lista_numero.append(numero)
        print('Valor adicionado com sucesso...')
    else:
        print(f'O valor {numero} já contém na lista, Não vou adicionar')
    opcao = str(input('Você que continuar? [S/N]: ')).strip().upper()[0]
    while opcao not in 'SN':
        opcao = str(input('OPÇÃO INVÁLIDA!! "S" para sim "N" para não: ')).strip().upper()[0]
    if opcao == 'N':
        break
print('-' * 30)
print(f'Você digitou os valores {lista_numero}')
lista_numero.sort()
print(f'lista de valores em ordem é {lista_numero}')
