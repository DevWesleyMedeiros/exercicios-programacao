num1 = int(input('Digite o primeiro número: '))
num2 = int(input('Digite o segundo número: '))
maior = None
if num1 > num2 and num2 < num1:
    maior = num1
    print('O primeiro valor é o maior')
elif num2 > num1 and num1 < num2:
    maior = num2
    print('O segundo valor é o maior')
else:
    print('Os valores são iguais')

print('FIM DO PROGRAMA!!')



