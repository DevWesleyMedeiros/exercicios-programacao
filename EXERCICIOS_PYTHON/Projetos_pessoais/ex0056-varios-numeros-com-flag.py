somaNumeros = contadorNumeros = 0
while True:
    numero = int(input('Digite um número [999 para pará-lo: '))
    if numero == 999:
        break
    contadorNumeros += 1
    somaNumeros += numero
print(f'A soma do {contadorNumeros} valores vale {somaNumeros}')

