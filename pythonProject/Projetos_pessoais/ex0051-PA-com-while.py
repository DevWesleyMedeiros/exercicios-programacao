'''
Use somente os 10 primeiros termos da PA
'''
primeiro_termo = int(input('Digite o primeiro termo da PA: '))
razao = int(input('Digite a razão da PA: '))
termoPA = primeiro_termo
contador_termos = 1
while contador_termos <= 10:
    print(f'{termoPA} → ', end='')
    termoPA += razao
    contador_termos += 1
print('FIM DO PROGRAMA!!')
