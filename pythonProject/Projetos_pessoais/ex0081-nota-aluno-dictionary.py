dadosAluno = dict()
dadosAluno["Nome"] = str(input('Nome do aluno: ')).strip()
dadosAluno["Média"] = float(input('Média do aluno: '))
print('=' * 40)
for k, v in dadosAluno.items():
    print(f'O - {k} do aluno é {v}')

if dadosAluno['Média'] < 5:
    print('O aluno foi reprovado')
elif dadosAluno['Média'] > 5 and dadosAluno['Média'] < 7:
    print('O aluno esta em recuperação')
else:
    print('O aluno foi aprovado, PARABÉNS')

print('=' * 40)
