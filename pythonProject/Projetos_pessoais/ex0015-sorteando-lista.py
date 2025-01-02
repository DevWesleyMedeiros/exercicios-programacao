import random


print(' === Quem irá limpar o quadro? ====')
nome1 = str(input('Digite o primeiro nome: ')).strip()
nome2 = str(input('Digite o segundo nome: ')).strip()
nome3 = str(input('Digite o terceiro nome: ')).strip()
nome4 = str(input('Digite o quarta nome: ')).strip()
lista = [nome1, nome2, nome3, nome4]
escolher_da_lista = random.choice(lista)
ordem_limpar_quadro = random.shuffle(lista)
print(f'A ordem da semana para limpar o quadro é')
print(lista)
print(f'O escolhido para limpar o quadro é {escolher_da_lista}')

