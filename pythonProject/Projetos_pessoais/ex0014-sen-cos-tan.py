import math as mt

angulo = float(input('Digite o valor de um ângulo: '))
seno = mt.sin(mt.radians(angulo))
cosseno = mt.cos(mt.radians(angulo))
tangente = mt.tan(mt.radians(angulo))
print(f'O ângulo digitado é {angulo}º')
print('O ângulo de {:.2f}° tem o seno de {:.2f}'.format(angulo, seno))
print('O ângulo de {:.2f}° tem o cosseno {:.2f}'.format(angulo, cosseno))
print('O ângulo de {:.2f}° tem a tangente {:.2f}'.format(angulo, tangente))
