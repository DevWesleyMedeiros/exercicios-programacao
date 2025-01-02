from datetime import datetime

dadosTrabalhador = dict()
dadosTrabalhador["Nome"] = str(input('Digite o nome do trabalhador: ')).strip().upper()
anoNasc = int(input('Digite o ano de nascimento do trabalhador: '))
dadosTrabalhador["Idade"] = datetime.now().year - anoNasc
dadosTrabalhador["CTPS"] = int(input('Carteira de trabalho: [0] não possui: '))
if dadosTrabalhador["CTPS"] != 0:
    dadosTrabalhador["Ano de contratação"] = int(input('Ano de contratação: '))
    dadosTrabalhador["Salário"] = float(input('Salário R$:'))
    dadosTrabalhador["Aposentadoria"] = dadosTrabalhador["Idade"] + ((dadosTrabalhador["Ano de contratação"] + 35) - datetime.now().year)
    print('=' * 40)
    for k, v in dadosTrabalhador.items():
        print(f' - O(A) {k} tem o valor {v}')
else:
    print(f'O nome é {dadosTrabalhador["Nome"]} e o ano de nascimento é {dadosTrabalhador["Idade"]}')
    print('CTPS possui o valor 0')
print('FIM!')
