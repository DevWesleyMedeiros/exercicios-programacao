numero = int(input(' Digite um número: '))
print(f'Analisando o número {numero}')
unidade = numero // 1 % 10
dezena = numero // 10 % 10
centena = numero // 100 % 10
milhar = numero // 1000 % 10
print(f'unidade {unidade}')
print(f'Dezena {dezena}')
print(f'Centena {centena}')
print(f'Milhar {milhar}')
