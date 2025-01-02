print('-=' * 11)
print('Sequência de Fibonacci')
print('-=' * 11)
termo = int(input('Digite quantos termos você quer ver: '))
primeiro_termo = 0
segundo_termo = 1
for iterador in range(termo):
    print('{} → '.format(primeiro_termo), end='')
    proximo_termo = primeiro_termo + segundo_termo
    primeiro_termo = segundo_termo
    segundo_termo = proximo_termo
print('FIM!!')
'''Variáveis que são atribuidos valores que já estavam definidos em outras passam a conter os mesmos valores
EX.: t1=5 e t2=6 se t1=t2, logo t1=6'''
