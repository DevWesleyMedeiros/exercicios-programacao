somaNumeros = quantidadeNumeros = maior = menor = 0
resposta = 'SimSIMsim'
while resposta in 'SimSIMsim':
    numero = int(input('Digite um número: '))
    somaNumeros += numero
    quantidadeNumeros += 1
    if quantidadeNumeros == 1:
        maior = menor =  numero
    else:
        if numero > maior:
            maior = numero
        elif numero < menor:
            menor = numero
    resposta = str(input('Você quer continuar? [S/N]: ')).strip().upper()[0]
media = somaNumeros / quantidadeNumeros
mediaArrendondada = round(media, 2)
print(f'Você digitou {quantidadeNumeros} números e a soma deles vale {somaNumeros}')
print(f'A média deles vale {mediaArrendondada}')
print(f'O maior valor é {maior} e o menor valor é o {menor}')
