'''Você sabe nadar? Eu naum!!'''

from datetime import date

nome_atleta = str(input('Qual é o nome do atleta? ')).strip().upper()
ano_nascimento = int(input('Qual é o seu ano de nascimento, {}? '.format(nome_atleta)))
ano_atual = date.today().year
idade = ano_atual - ano_nascimento
if ano_nascimento > ano_atual:
    print('\033[31m[ERRO!]\033[0m você não poder ter nascido no futuro, seu imbecil')
else:
    if idade <= 9:
        print('{} com a idade de {} anos você é da categoria MIRIM'.format(nome_atleta, idade))
    elif idade <= 14:
        print('{} com a idade de {} anos você é da categoria INFANTIL'.format(nome_atleta, idade))
    elif idade <= 19:
        print('{} com a idade de {} anos você é da categoria JUNIOR'.format(nome_atleta, idade))
    elif idade <= 25:
        print('{} com a idade de {} anos você é da categoria SENIOR'.format(nome_atleta, idade))
    else:
        print('{} com a idade de {} anos você é da categoria MASTER'.format(nome_atleta, idade))

print('FIM DO PROGRAMA')

