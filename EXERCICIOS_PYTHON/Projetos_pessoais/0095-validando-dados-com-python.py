def leiaInt(num):
    return f'Você digitou o valor numérico {num}'


print('-' * 30)
# Programa principal

numero = str(input('Digite um número: '))
if numero.isnumeric():
    print(leiaInt(numero))
elif numero == '':
    print('Não posso ler valores vazios')
else:
    print('Não posso ler valor texto')
