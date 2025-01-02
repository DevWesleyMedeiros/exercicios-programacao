'''
expressao = input('Digite uma expressão: ').strip()
if expressao.count("(") == expressao.count(")") and expressao.startswith("(") and expressao.endswith(")"):
    print('Expressão Válida')
else:
    print('Expressão inválida')
'''
'''
exp = str(input('Digite uma expressão: '))
colecao = []
for simbolo in colecao:
    if simbolo == "(":
        colecao.append("(")
    elif simbolo == ")":
        if len(colecao) > 0:
            colecao.pop()
        else:
            colecao.append(")")
            break
if len(colecao) == 0:
    print('Sua expressão está válida')
else:
    print('Sua expressão está inválida')
pop() ou del() - excluem o último valor de uma lista
'''




















'''
O método .startswith() verifica se uma string começa com um determinado prefixo.
Ele retorna True se a string começar com o prefixo especificado e False caso contrário.
EXEMPLO:
string = 'Olá, mundo'
if string.startswith("Olá"):
    print('Verdade')
else:
    print('Falso')
'''

'''
O método .endswith() verifica se uma string termina com um determinado sufixo.
Ele retorna True se a string terminar com o sufixo especificado e False caso contrário.
EXEMPLO:
arquivo = str(input('Digite a extensão do arquivo [.(algo)]: '))
if arquivo.endswith(".txt"):
    print('O Arquivo é um executável')
else:
    print('O arquivo não é uma executável')
'''