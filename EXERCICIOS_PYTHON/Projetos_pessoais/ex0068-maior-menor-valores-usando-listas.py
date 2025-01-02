'''
No Python, os índices de uma lista começam em 0, não em 1.
Portanto, a enumeração dos índices deve começar em 0
'''
'''
FUNCÃO ENUMERATE: É usada para iterar sobre uma sequência (como uma lista, tupla, string, etc.),
ao mesmo tempo em que acompanha o índice de cada elemento durante a iteração. 
Ela retorna um objeto iterável que produz pares de índices e elementos à medida que você percorre a sequência. 
'''
lista_valores = list()
maior = menor = 1
for valores in range(1, 5+1):
    numero = int(input(f'Digite um valor na posição {valores}°:'))
    lista_valores.append(numero)
    if valores == 1:
        maior = lista_valores[valores -1]
        menor = lista_valores[valores -1]
    else:
        if lista_valores[valores -1] > maior:
            maior = lista_valores[valores -1]
        if lista_valores[valores -1] < menor:
            menor = lista_valores[valores -1]
print('-' * 30)
print(f'Você digitou os valores {lista_valores}')
print(f'O maior valor digitado foi {maior} na(s) posição ', end='')
for index, valor in enumerate(lista_valores):
    if valor == maior:
        print(f' {index+1}°...', end='')
print()
print(f'O menor valor digitado foi {menor} na(s) posição ', end='')
for index, valor in enumerate(lista_valores):
    if valor == menor:
        print(f' {index+1}°...', end='')
