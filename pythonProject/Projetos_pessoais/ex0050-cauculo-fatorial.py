produto_total = 1
numero = int(input('Digite o número que você quer ver o fatorial: '))
print(f'Cauculando o {numero}! = ', end='')
for iterador in range(numero, 0, -1):
    print(f' {iterador} X ', end='')
    produto_total *= iterador
print(f' = {produto_total}', end='')
