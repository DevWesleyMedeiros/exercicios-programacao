from time import sleep

'''
VAMOS AS COMPRAS

Critérios:
compra à vista [DINHEIRO/CHEQUE], 10% de desconto
compra à vista [CARTÃO], 5% de desconto
compra em até 2x [CARTÃO], preço normal
compra em 3x ou mais [CARTÃO], 20% de juros
'''
def durma_codigo():
    return sleep(1.5)

nome = str(input('Qual é o seu nome? ')).strip().upper()
durma_codigo()
print('-=' * 30)
print("{}, Seja Bem vindo a loja 'VOCÊ QUE ESCOLHE'".format(nome))
print('-=' * 30)
durma_codigo()
produto = str(input('O que você quer comprar? ')).strip().upper()
preco_produto = float(input('Qual é o preço do pruduto que você quer? RS '))
durma_codigo()
print('''
        OPCÕES DE PAGAMENTO:
        [1] à vista [DINHEIRO/CHEQUE] 
        [2] à vista [CARTÃO]
        [3] em até 2x [NO CARTÃO]
        [4] em 3x ou mais [NO CARTÃO]
        ''')

opcao = int(input('Digite sua opção de pagamento: '))
if opcao == 1:
    desconto = (1 - 0.1) * preco_produto
    print('{} de R${:.2f} vai custar R${:.2f} com o desconto de 10%'.format(produto, preco_produto, desconto))
elif opcao == 2:
    desconto = (1 - 0.05) * preco_produto
    print('{} de RS{:.2f} vai custar R${:.2f} com o desconto de 5%'.format(produto, preco_produto, desconto))
elif opcao == 3:
    numero_parcelas = int(input('Qual dessas opções: [1x ou 2x]: '))
    if numero_parcelas > 2:
        print('\033[31mOPÇÃO INVÁLIDA!!\033[0m No cartão só fizemos no máximo e 2x')
    else:
        preco_parcelas = preco_produto / numero_parcelas
        print('{} de R${:.2f} em {} parcelas mensais de {}'.format(produto, preco_produto, numero_parcelas,preco_parcelas ))
elif opcao == 4:
    numero_parcelas = float(input('3x ou mais: '))
    juros = (1 + 0.2) * preco_produto
    pagamento_parcelado_com_juros = juros / numero_parcelas
    print('{} de {:.2f} em {:.0f} parcelas mensais de {:.2f}'.format(produto, preco_produto, numero_parcelas, pagamento_parcelado_com_juros))
else:
    print('OPÇÃO INVÁLIDA!!')

print('FIM DO PROGRAMA')






















