cont_maiores_idade = 0
cont_menores_idade = 0
for pessoa in range(1, 7+1, 1):
    ano_nascimento = int(input('Digite a idade da {}° pessoa:'.format(pessoa)))
    ano_atual = 2023
    idade = ano_atual - ano_nascimento
    if idade >= 18:
        cont_maiores_idade += 1
    else:
        cont_menores_idade += 1
print('=' * 35)
print(f'Ao todo tivemos {cont_maiores_idade} maiores de idade')
print(f'Ao todo tivemos {cont_menores_idade} menores de idade')
print('=' * 35)
