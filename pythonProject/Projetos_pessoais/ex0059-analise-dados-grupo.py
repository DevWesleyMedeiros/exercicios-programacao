print('=' * 19)
print('Cadastre uma pessoa')
print('=' * 19)
pessoas_mais_de_18 = cont_homens = mulheres_menos_20 = 0
lista = []
while True:
    nome = str(input('Nome: ')).strip().upper()
    lista.append(nome)
    idade = int(input('Idade: '))
    if idade > 18:
        pessoas_mais_de_18 += 1
    sexo = str(input('Sexo [M/F]: ')).strip().upper()[0]
    while sexo not in 'MF':
        sexo = str(input('SEXO INVÁLIDO!! adicione o Sexo novamente [M/F]: ')).strip().upper()[0]
        if sexo in 'M':
            cont_homens += 1
        elif sexo in 'F' and idade < 20:
            mulheres_menos_20 += 1
    opcao = str(input('Você quer continuar os cadastros [S/N]: ')).strip().upper()[0]
    while opcao not in 'SN':
        opcao = str(input('OPÇÃO INVÁLIDA!! digite "S" para SIM e "N" para NÂO [S/N]: ')).strip().upper()[0]
    if opcao == 'N':
            break
print('-=' * 20)
print(f'Nome das pessoas cadastradas é {lista}')
print(f'Total de pessoas com mais de 20 anos é {pessoas_mais_de_18}')
print(f'Ao todo temos {cont_homens} homem(ns) cadastrados')
print(f'E temos {mulheres_menos_20} mulher(s) com menos de 20 anos cadastrada(s)')
print('-=' * 20)


