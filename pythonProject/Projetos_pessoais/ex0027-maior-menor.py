num1 = int(input('Digite o primeiro valor: '))
num2 = int(input('Digite o segundo valor: '))
num3 = int(input('Digite o terceiro valor: '))
menor = num1
if num2 < num3 and num2 < num1:
    menor = num2
elif num3 < num2 and num3 < num1:
    menor = num3
maior = num1
if num2 > num3 and num2 > num1:
    maior = num2
elif num3 > num2 and num3 > num1:
    maior = num3

print(f'O menor número é {menor}')
print(f'O maior número é {maior}')
