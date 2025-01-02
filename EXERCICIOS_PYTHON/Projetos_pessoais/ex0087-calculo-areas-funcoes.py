def calculoAreas(c, l):
    print(f'>>>>> Controle de terrenos <<<<<')
    print('=' * 33)
    area = c * l
    print(f'A área de {c:.2f}x{l:.2f} vale {area:.2f}m²')


# Main program
comprimento = float(input('Qual o comprimento do terreno: '))
largura = float(input('Qual a largura do terreno: '))

calculoAreas(comprimento, largura)
