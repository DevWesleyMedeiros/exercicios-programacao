def mostraNomeCompleto(nome, sobrenome):
    linha = '=' * 30

    print(linha)
    espaco_nome = (30 - len(nome)) // 2
    print(' ' * espaco_nome + nome)
    print(linha)

    print('-' * 30)
    espaco_sobrenome = (30 - len(sobrenome)) // 2
    print(' ' * espaco_sobrenome + sobrenome)
    print('-' * 30)


nome = str(input('Digite seu nome: ')).strip()
sobrenome = str(input('Digite seu sobrenome: ')).strip()

mostraNomeCompleto(nome, sobrenome)

'''
Em Python, o símbolo "//" é usado como o operador de divisão de piso, também conhecido como divisão inteira ou divisão truncada.
Ele é usado para realizar uma divisão entre dois números e arredondar o resultado para baixo para o próximo número inteiro.
Por exemplo, se você usar o operador "//" para dividir 7 por 2:
'''