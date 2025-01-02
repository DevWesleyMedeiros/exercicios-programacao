'''
from num2words import num2words

numero = int(input('Digite um número entre 0 e 20: '))
while numero < 0 or numero > 20:
    numero = int(input('NÚMERO INVÁLIDO!! Digite um número entre 0 e 20: '))

numeroPorExtensoPortugues = num2words(numero, lang='pt_br')
numeroPorExtensoIngles = num2words(numero, lang='en')
numeroPorExtensoUcraniano = num2words(numero, lang='uk')
print('Você digitou o número', numeroPorExtensoPortugues)
print(f'Em Ukraniano fica {numeroPorExtensoUcraniano}')
print(f'Em Inglês fica {numeroPorExtensoIngles}')
'''

valores = ('Zero', 'Um' , 'Dois', 'Três', 'Quatro', 'Cinco',
           'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze',
           'Doze', 'treze', 'Catorze', 'Quinze', 'Dezeseis', 'Dezesete',
           'Dezoito', 'Dezenove', 'Vinte')
while True:
    valor = int(input('Digite um valor entre 0 e 20: '))
    if 0 <= valor <= 20:
        break
    print('OPÇÃO INVÁLIDA!! Tente novamente')
    opcao = ' '
    while opcao not in 'SN':
        opcao = str(input('Você quer continuar [S/N]? ')).strip().upper()[0]
    if opcao == 'N':
        break
print(f'Você digitou o número {valores[valor]}')














