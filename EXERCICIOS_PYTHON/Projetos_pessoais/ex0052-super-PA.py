print('Gerador de PA')
print('-=' * 20)
primeiro_termo = int(input('Digite o primeiro termo da PA: '))
razao = int(input('Digite a razão da PA: '))
termoPA = primeiro_termo
contador = 1
contador_termos = 0
total = 0
mais = 10
while mais != 0:
    total += mais
    while contador <= total:
        print(f'{termoPA} → ', end='')
        termoPA += razao
        contador += 1
        contador_termos += 1
    print('PAUSA ', end='')
    mais = int(input('\nQuantos termos mais você quer verificar: '))
print(f'Ao todo, foram mostrados {contador_termos} termos')
