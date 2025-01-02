'''
    Quer comprar uma casa?
'''

valor_casa = float(input(' Qual o valor da casa R$ '))
salario_comprador = float(input(' Qual é o salário do comprador R$ '))
tempo_prestacao = float(input(' Em quantos anos você quer pagar a casa? '))
prestacao = valor_casa / (tempo_prestacao * 12)
porcentagem_salario = (30 / 100) * salario_comprador
if prestacao < porcentagem_salario:
    print('IMPRÉSTIMO CONCEDIDO!!')
else:
    print('IMPRÉSTIMO NEGADO')

print('FIM')
