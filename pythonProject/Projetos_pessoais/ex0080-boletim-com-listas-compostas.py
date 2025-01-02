listaNotas = list()
while True:
    nome = str(input('Nome: ')).upper().strip()
    nota1 = float(input('Nota 1: '))
    nota2 = float(input('Nota 2: '))
    media = (nota1 + nota2) / 2
    listaNotas.append([nome, [nota1, nota2], media])
    opcao = str(input('Você quer continuar [S/N]: ')).strip().upper()[0]
    while opcao not in 'SN':
        opcao = str(input('OPÇÃO INVÁLIDA!! "S" para sim e "N" para não: ')).strip().upper()[0]
    if opcao == "N":
        break
print('=' * 30)
print(f'{"No.":<4}{"Nome":<10}{"Média":>8}')
print('=' * 30)
for p, a in enumerate(listaNotas):
    print(f'{p:<4}{a[0]:<10}{a[2]:>8.1f}')
print('=-' * 30)
while True:
    opcao = int(input('Qual aluno você quer ver a nota? [999 fecha o program]: '))
    if opcao == 999:
        print('FINALIZANDO...')
        break
    else:
        verificarAluno = listaNotas[opcao]
        print(f'Dados do aluno {verificarAluno[0]}; Notas: {verificarAluno[1]}; Média: {verificarAluno[2]}')
        print('-' * 40)
print('FIM DO PROGRAMA!!')

