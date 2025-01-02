nome = str(input('Digite seu nome completo: ')).upper().strip()
partes_nome = nome.split()
print('Seu primeiro nome é {}'.format(partes_nome[0]))
print('Seu último sobrenome é {}'.format(partes_nome[-1]))

