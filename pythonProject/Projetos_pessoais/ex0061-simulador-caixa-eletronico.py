'''
CÉDULAS EXISTENTES: $1, $5, $10, $20, $50, $100
EU TENHO CINCO CÉDULAS POSSÍVEIS
CALCULO: VALOR TOTAL DA RETIRADA / VALOR DA CÉDULA QUE EU QUERO = QUANTIDADE DE CÉDULAS

{:^30}', onde o símbolo '^' indica o alinhamento centralizado e o número
'30' representa o tamanho total da string.
'''
print('=' * 30)
print('{:^30}'.format('BANCO WESLEY'))
print('=' * 30)
valor = int(input('Digite o valor que você quer sacar R$'))
total = valor
cedulas = 100
TotalCedulas = 0
while True:
    if total >= cedulas:
        total -= cedulas
        TotalCedulas += 1
    else:
        if TotalCedulas > 0:
            print(f'Total de {TotalCedulas} de R${cedulas}')
        if cedulas == 100:
            cedulas = 50
        elif cedulas == 50:
            cedulas = 20
        elif cedulas == 20:
            cedulas = 10
        elif cedulas == 10:
            cedulas = 5
        elif cedulas == 5:
            cedulas = 1
        TotalCedulas = 0
        if total == 0:
            break
print('=' * 30)
print('Volte sempre ao BANCO WESLEY!! Tenha um bom dia')

