'''Considerar 2 litros por metro quadrado'''

largura = float(input('Largura da parede: '))
altura = float(input('Altura da parede: '))
dimensao = largura * altura
print('Sua parede é de {} x {}, e sua área é de {:.0f}m²'.format(largura, altura, dimensao))
print('Você precisará de {:.2f} litros de tinra para pintá-la'.format(dimensao / 2))



