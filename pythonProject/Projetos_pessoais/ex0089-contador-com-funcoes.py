from time import sleep


def contador(*num):
    for c in range(*num):
        if c < 0:
            c *= -1
        if c == 0:
            c = 1
        print(c, end=' ', flush=True)
        sleep(0.5)
    print('\nFIM')

print('=' * 30)
print('Contagem de 1 até 10')
for v in range(1, 10+1, 1):
    print(v, end=' ', flush=True)
    sleep(0.5)
print('\nFIM')
print('=' * 30)

print('Contagem de 10 até 1')
for v in range(10, 0, -1):
    print(v, end=' ', flush=True)
    sleep(0.5)
print('\nFIM')
print('=' * 30)

print('Agora é sua vez de contar')
inicio = int(input('Digite o início: '))
fim = int(input('Digite o fim: '))
passo = int(input('Digite o passo: '))
print('=' * 30)
print(f'Contagem de {inicio} até {fim} de {passo} em {passo}')
contador(inicio, fim, passo)

#"flush=True" elimina o buffer de tala que é basicamento atraso no display de tela

