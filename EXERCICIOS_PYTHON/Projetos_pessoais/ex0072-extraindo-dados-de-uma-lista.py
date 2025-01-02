lista = list()
contadorNumeros = 0
while True:
    lista.append(int(input('Digite um valor: ')))
    contadorNumeros += 1
    opcao = str(input('Você quer continuar [S/N]:')).strip().upper()[0]
    while opcao not in 'SN':
        opcao = str(input('OPÇÃO INVÁLIDA!! digite "S" para sim e "N" para não:')).strip().upper()[0]
    if opcao == 'N':
        break
'''
lista.reverse(): Coloca os valores na ordem invertida
lista.sort(reverse=True): coloca os valores em ordem decrescente
'''
lista.sort(reverse=True)
print(f'Você digitou {contadorNumeros} valores')
print(f'Os valores em ordem DECRESCENTE é {lista}')
if 5 in lista:
    print('O valor 5 faz parte da lista')
else:
    print('O valor 5 não faz parte da lista')
