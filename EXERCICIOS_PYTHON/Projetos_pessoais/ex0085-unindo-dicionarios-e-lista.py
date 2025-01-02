listaDados = list()
dictDados = dict()
listaMulheres = list()
listaPessoas = []
totalPessoas = somaIdades = 0
while True:
    dictDados.clear()
    nome = str(input('Nome: ')).strip().upper()
    listaDados.append(nome)
    dictDados["Nome"] = nome
    totalPessoas += 1
    sexo = str(input('Sexo: [M/F]: ')).strip().upper()[0]
    while sexo not in "MF":
        sexo = str(input('ERRO SEXO! digite somente "M" ou "F": ')).strip().upper()[0]
    listaDados.append(sexo)
    dictDados["Sexo"] = sexo
    idade = int(input('Idade: '))
    somaIdades+= idade
    listaDados.append(idade)
    dictDados["Idade"] = idade
    listaPessoas.append(dictDados.copy())
    opcao = str(input('Você quer continuar? [S/N]: ')).strip().upper()[0]
    while opcao not in "SN":
        opcao = str(input('ERRO OPÇÃO INVÁLIDA digite somente "S" ou "N": ')).strip().upper()[0]
    if opcao == "N":
        break
media = somaIdades / totalPessoas
for i in range(0, len(listaDados), 3):
    if listaDados[i + 1] == "F":
        listaMulheres.append(listaDados[i])
print(f"A) Ao todo temos {totalPessoas} pessoas cadastrada")
print(f"B) A média das idade é {media:5.2f}")
print(f"C) As mulheres cadastradas foram {', '.join(listaMulheres)}")
print("D) A lista de pessoa acima da média é ")
for pessoa in listaPessoas:
    if pessoa["Idade"] >= media:
        print('   ', end='')
        for k, v in pessoa.items():
            print(f' {k} = {v} ', end='')
        print()
print("<<<<<<<<< ENCERRADO! >>>>>>>>>>>")
