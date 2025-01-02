from uteis import calculo_moedas

preco = input('Digite um valor R$')
metade_preco = calculo_moedas.calcular_metade_numero(preco)
print(f'A metade de R${preco} vale R${metade_preco}')
dobro_preco = calculo_moedas.calcular_produto_numero(preco)
print(f'O dobro de R${preco} vale R${dobro_preco}')
aumento_preco = calculo_moedas.calcular_aumento_10(preco)
print(f'Aumentando 10% em R${preco} temos o valor R${aumento_preco}')


