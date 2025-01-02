'''
from random import sample, randint
1° MANEIRA DE SE FAZER ESTE EXERCÍCIO
valores = (1,2,3,4,5,6,7,8,9,10)
valores_selecionados = sample(valores, 5)
print(f'Os valores selecionados foram: {valores_selecionados}')
contador = 1
maior = menor = valores_selecionados[0]
for i in (valores_selecionados):
    if i > maior:
        maior = i
    elif i < menor:
        menor = i
    contador += 1
print(f'O maior valor é {maior}')
print(f'O menor valor é {menor}')
'''

'''
2° MANEIRA DE SE FAZER ESTE EXERCÍCIO

tupla = (randint(1, 10), randint(1, 10), randint(1, 10), randint(1, 10), randint(1, 10))
for i in (tupla):
    print(f' {i} ', end='')
print(f'\nO maior valor dessa lista é {max(tupla)}')
print(f'O menor valor dessa lista é {min(tupla)}')
'''


















