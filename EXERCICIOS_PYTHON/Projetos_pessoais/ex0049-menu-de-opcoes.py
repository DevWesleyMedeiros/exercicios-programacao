num1 = int(input('Digite primeiro número: '))
num2 = int(input('Digite o segundo número: '))
opcao = 0
while opcao != 5:
    print('''
            [1] SOMAR
            [2] MULTIPLICAR
            [3] MAIOR
            [4] NOVOS NÚMEROS
            [5] SAIR DO PROGRAMA
            ''')
    print('=' * 30)
    opcao = int(input('Qual é a sua opção: '))
    if opcao == 1:
        print(f'A soma de {num1} e {num2} vale {num1+num2}')
    elif opcao == 2:
        print(f'O produto de {num1} X {num2} vale {num1*num2}')
    elif opcao == 3:
        if num1 > num2:
            maior = num1
            print(f'O maior número é o {maior}')
        elif num1 < num2:
            maior = num2
            print(f'O maior número é o {maior}')
        else:
            print('Os valores dados são iguais')
    elif opcao == 4:
        print('Escolha os novos números')
        num1 = int(input('Digite o primeiro novo número: '))
        num2 = int(input('Digite o segundo novo número: '))
    elif opcao == 5:
        print('FINALIZANDO O PROGRAMA...')
    else:
        print('OPÇÃO INVÁLIDA!! tente novamente')
print('PROGRAMA ENCERRADO!!')
