palavra = input('Digite uma palavra: ')
print('O tipo primitivo dessa palavra é {}'.format(type(palavra)))
print('Contém espços?', palavra.isspace())
print('É um número?', palavra.isalnum())
print('É alfa númerico?', palavra.isalpha())
print('Está em letras maiúsculas?', palavra.isupper())
print('Está em letras minúsculas?', palavra.islower())
print('Este é um número em digito', palavra.isdigit())
print('Esta palavra é um título', palavra.istitle())
print('É uma palavra que pode ser imprimivel, ou seja, pose ser mostrada pelo compilador?', palavra.isprintable())
print('É um número em formato decimal?', palavra.isdecimal())
print('Esta palavra é usada como um identificador?', palavra.isidentifier())








