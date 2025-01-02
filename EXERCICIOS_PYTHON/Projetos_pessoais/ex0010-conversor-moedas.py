valor = int(input('Digite o valor que você tem no seu bolso [EM VALORES INTEIROS]:' ))
resultado = valor / 5.09
print('Com R${:.0f} reais, você conseguiria comprar US${:.2f} doláres'.format(valor, resultado))

