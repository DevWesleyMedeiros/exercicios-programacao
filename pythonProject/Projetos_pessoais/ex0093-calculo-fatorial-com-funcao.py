def funcaofatorial(v, show=False):
    '''
    --> Função que calcula o fatorial com parâmetros opcionais de mostrar ou não o calculo
    :param v: valor que será verificado o fatorial
    :param show: show calc
    :param return: retorna o valor do fatorial
    '''

    produto_final = 1
    for v in range(v, 0, -1):
        if show:
            if v > 1:
                print(f'{v} X ', end='')
            else:
                print(f'{v} = ', end='')
        produto_final *= v
    return produto_final


# Programa principal
num = int(input('Fatorial de qual valor?'))
print(funcaofatorial(num, show=True))
print(help(funcaofatorial))

