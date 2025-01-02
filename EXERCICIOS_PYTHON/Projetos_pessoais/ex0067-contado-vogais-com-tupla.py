lista_palavras = ('APRENDER', 'PROGRAMAR', 'LINGUAGEM',
                  'PYTHON', 'CURSO', 'GRÁTIS',
                  'ESTUDAR', 'PRATICAR', 'TRABALHAR',
                  'MERCADO','PROGRAMADOR', 'FUTURO')
for palavra in lista_palavras:
    print(f'\nNa palavra {palavra.upper()} temos as vogais...', end='')
    for letras in palavra:
        if letras.lower() in 'aeiou':
            print(f' {letras} ', end='')
print('\nFIM!!')
