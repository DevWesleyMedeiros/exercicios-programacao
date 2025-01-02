'''
Será que o ono é bissexto?
'''

ano = int(input('Que ano você quer verificar?'))
if ano % 4 == 0 and ano % 100 != 0 or ano % 400 == 0:
    print('O ano de {} é BISSEXTO!!'.format(ano))
else:
    print('O ano dado NÃO É BISSEXTO!!')

print('FIM')