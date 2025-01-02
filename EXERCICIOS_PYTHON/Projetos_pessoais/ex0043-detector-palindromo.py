'''
FRASES PALINDROMAS PODEM SER LIDAS DE TRÁS PARA DIANTE DA MESMA FORMA DA ORIGINAL
'''

frase = str(input('Digite uma frase: ')).upper().strip()
frase_usuario = frase.replace(" ", "")
frase_invertida = frase_usuario[::-1]
frase_invertida_sem_espacos = frase_invertida.replace(" ", "")
print(f'A frase escrita de trás para diante é \033[34m{frase_invertida_sem_espacos}\033[0m')
if frase_usuario == frase_invertida_sem_espacos:
    print('A frase dada é \033[32mPALINDROMA\033[0m')
else:
    print('A frase dada \033[31mNÃO É PALINDROMA\033[0m')

print('FIM DO PROGRAMA')