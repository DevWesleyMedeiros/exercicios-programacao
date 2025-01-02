'''
    Condição de existência de um triângulo:
    a + b > c
    a + c > b
    b + c > a
'''
print('=-' * 30)
print('Analisador de triângulos')
print('=-' * 30)

lado1 = float(input('Digite o valor do primeiro cateto: '))
lado2 = float(input('Digite o valor do segundo cateto: '))
lado3 = float(input('Digite o valor do terceiro cateto: '))

if lado1 + lado2 > lado3 and lado1 + lado3 > lado2 and lado3 + lado2 > lado1:
    print(f'Os lados {lado1}, {lado2} e {lado3} podem formar um triângulo')
    if lado1 == lado2 == lado3:
        print('O triângulo formado é EQUILATERO!!')
    elif lado1 != lado2 != lado3:
        print('O triângulo formado é ESCALENO')
    else:
        print('O triângulo formado é ISÓCELES')
else:
    print('Os valores não podem formar um triângulo')

print('FIM!!')