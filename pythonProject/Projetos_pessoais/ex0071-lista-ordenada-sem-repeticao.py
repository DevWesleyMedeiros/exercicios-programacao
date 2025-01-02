lista = []
for index in range(0, 5):
    numero = int(input('Digite um número: '))
    if index == 0 or numero > lista[-1]:
        lista.append(numero)
        print('Valor adicionado ao final da lista')
    else:
        posicao = 0
        while posicao < len(lista):
            if numero <= lista[posicao]:
                lista.insert(posicao, numero)
                print(f'Valor {numero} adicionado na posição {posicao}° ')
                break
            posicao += 1
print('-' * 30)
print(f'Sua lista em ordem é {lista}')

'''
lista[-1] pegar o último valor da lista
'''