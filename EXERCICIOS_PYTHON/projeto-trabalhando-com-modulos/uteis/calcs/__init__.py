def calcular(preco):
    '''
    --> Função que faz calculos de divisão, produto e aumento de um valor e mostra na tela
    :param preco: um preço passado pelo usuário
    '''

    numero = float(preco)
    divisao = numero / 2
    produto = numero * 2
    aumento = (1 + 0.1) * numero
    print(f'A metade de {numero:.2f} vale {divisao:.2f}')
    print(f'O dobro de {numero:.2f} vale {produto:.2f}')
    print(f'Aumentando 10% de {numero}, temos {aumento:.2f}')
