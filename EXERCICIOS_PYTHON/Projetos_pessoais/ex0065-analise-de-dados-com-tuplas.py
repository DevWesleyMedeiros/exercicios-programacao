numeros = (int(input('Digite um número: ')),
           int(input('Digite mais um número: ')),
           int(input('Digite outro: ')),
           int(input('Digite o último número: ')))
lista_numeros = (numeros)
print(f'Você digitou os números {lista_numeros}')
if 9 in lista_numeros:
    print(f'O valor 9 aparece {lista_numeros.count(9)} vezes na lista')
else:
    print('O valor 9 não aparece na lista nenhuma vez')
if 3 in lista_numeros:
    print(f'O número 3 apareceu na {lista_numeros.index(3)+1}° posição')
else:
    print('O número 3 não foi encontrado em nenhuma posição')
contador = maior = menor = 1
for i in (lista_numeros):
    if contador == 1:
        maior = i
        menor = i
    else:
        if i > maior:
            maior = i
        else:
            menor = i
    contador += 1
print(f'O maior número é {maior}')
print(f'O menor número é o {menor}')
