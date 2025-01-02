'''Permitido 80km/h
passar disso, multa de R$7,00 para cada km/h que excedeu os 80 '''

velocidade = int(input('Qual era a velocidade do carro [KM/H]? '))
if velocidade <= 80:
    print('Você está na velocidade permitida pela via. Tenha um bom dia!!')
elif velocidade > 80:
    valor_excedido = velocidade - 80
    print('Você excedeu o limite permitido. Sua multa será de R${},00'.format(valor_excedido * 7))

print('FIM')