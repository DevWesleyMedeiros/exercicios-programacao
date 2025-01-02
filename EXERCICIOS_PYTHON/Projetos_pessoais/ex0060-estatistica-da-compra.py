print('')
print('-=' * 10, end='')
print(' LOJA SUPER BARATÃO!! ', end='')
print('-=' * 10)
print('')
'''
A variável "CONT" Serve para dizer ao python quem é o menor ou maior entre os produtos, através das iterações
'''
soma_compras = produtos_maior_que_1000 = menor_em_preco = cont = 0
nome_menor_produto = ' '
while True:
    nome_produto = str(input('Digite o nome do produto: ')).strip().upper()
    preco_produto = float(input('Digite o preço do produto R$'))
    soma_compras+=preco_produto
    cont += 1
    if cont == 1:
        menor_em_preco = preco_produto
        nome_menor_produto = nome_produto
    elif preco_produto < menor_em_preco:
            menor_em_preco = preco_produto
            nome_menor_produto = nome_produto
    if preco_produto > 1000:
        produtos_maior_que_1000+=1
    opcao = str(input('Você quer continuar inserindo valores [S/N]? ')).strip().upper()[0]
    while opcao not in 'SN':
            opcao = str(input('OPÇÃO INVALIDADA!! "S" para SIM e "N" para NÃO: ')).strip().upper()[0]
    if opcao == 'N':
        break
print('')
print('=' * 10, end='')
print('FIM DO PROGRAMA!!', end='')
print('=' * 10)
print('O tatal de compras foi de R${:.2f}'.format(soma_compras))
print(f'Temos {produtos_maior_que_1000} produto(s) custando mais de R$1000')
print('O produto mais barato foi {} e custa R${:.2f}'.format(nome_menor_produto, menor_em_preco))
