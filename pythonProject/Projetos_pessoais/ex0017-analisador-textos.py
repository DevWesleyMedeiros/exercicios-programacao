nome = str(input('Digite seu nome: ')).strip()
#Elimina os espaços da string
print('Analisando o seu nome ...')
nome_maiuscula = nome.upper()
nome_minuscula = nome.lower()
print(f'Seu nome em maiúscula é {nome_maiuscula}')
print(f'Seu nome em minúscula é {nome_minuscula}')
print('Seu nome tem, no total, {} letras'.format(len(nome) - nome.count(' ')))
#print('Seu primeiro nome tem {} letras'.format(nome.find(' ')))
separa_nome = nome.split()
#Divide o nome em uma lista
print('Seu primeiro nome é {}'.format(separa_nome[0], len(separa_nome[0])))




