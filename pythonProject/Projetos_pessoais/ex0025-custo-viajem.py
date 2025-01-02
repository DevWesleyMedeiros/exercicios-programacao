'''
Preço da passagem: R$0.50 por KM/H para viajens de até 200km
R$0.45 por KM para viajens mais longas
'''

distancia = float(input('Digite a distância da viajem [KM]:'))
if distancia <= 200:
    valor_viajem_curta = distancia * 0.50
    print('Sua viajem é de {}KM e você pagará R${:.2f}'.format(distancia, valor_viajem_curta))
elif distancia >= 200:
    valor_viajem_longa = distancia * 0.45
    print('Sua viajem é de {}KM e você pagará RS{:.2f}'.format(distancia, valor_viajem_longa))

print('FIM')