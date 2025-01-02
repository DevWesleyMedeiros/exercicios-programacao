''''
Chegou a hora de EB
considerar alistamento militar para 18 anos de idade
para 18 anos nasce em 2005

'''
from datetime import date

ano_nascimento = int(input('Digite seu ano de nascimento: '))
ano_atual = date.today().year
idade_atual = ano_atual - ano_nascimento
ano_alistamento = ano_nascimento + 18
atraso_alistamento = ano_atual - ano_alistamento
print('Quam nasce em {} tem {} de idade em 2023'.format(ano_nascimento, idade_atual))
if idade_atual == 18:
    print('Você deve se alistar em {}!!'.format(ano_alistamento))
elif idade_atual >= 18:
    print('Você deveria ter se alistado a {} anos atrás '.format(atraso_alistamento))
    print('Seu alistamento foi em {}'.format(ano_alistamento))
else:
    print('Você não tem idade para se alistar')
    print('Você se alistará em {}'.format(ano_nascimento + 18))

print('FIM DO PROGRAMA!!')
