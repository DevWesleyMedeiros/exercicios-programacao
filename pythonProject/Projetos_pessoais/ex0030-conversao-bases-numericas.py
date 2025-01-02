from time import sleep

num = int(input('Digite um número para conversão em bases númericas: '))
sleep(2)
print(
    '''SUAS OPCÕES:
     [1] BINÁRIO
     [2] OCTAL
     [3] HEXADECIMAL''')

opcao = int(input('Sua opção: '))

if opcao == 1:
    print('O número {} em binário é {}'.format(num, bin(num)[2:]))
elif opcao == 2:
    print('O número {} em octal é {}'.format(num, oct(num)[2:]))
elif opcao == 3:
    print('O número {} em octal é {}'.format(num, hex(num)[2:]))
else:
    print('OPCÃO INVÁLIDA!! tente novamente')

print('FIM DO PROGRAMA')
