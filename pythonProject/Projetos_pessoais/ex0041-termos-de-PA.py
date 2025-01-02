primeiro_termo = int(input('Digite o primeiro termo da PA: '))
razao = int(input('Digite a razão da PA: '))
for iterador in range(primeiro_termo, primeiro_termo+(11-1)*razao, razao):
    print(f'{iterador}',end=' → ')

print('FIM DO PROGRAMA')
