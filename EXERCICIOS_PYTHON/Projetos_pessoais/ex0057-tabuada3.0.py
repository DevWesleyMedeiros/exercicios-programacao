while True:
    valor = int(input('Você quer ver a tabuada de qual valor? '))
    print('-=' * 20)
    if valor < 0:
        break
    for i in range(0, 10+1, 1):
        print(f'{valor} X {i} = {valor*i}')
print('Programa de tabuada encerrado!! Volte sempre')
