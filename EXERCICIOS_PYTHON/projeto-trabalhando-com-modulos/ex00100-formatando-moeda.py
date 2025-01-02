from uteis import moedas

preco = float(input("Digite um preço R$"))
print(f"A metade de {moedas.moeda(preco)} é {moedas.metade(preco, False)}")
print(f"O dobro de {moedas.moeda(preco)} é {moedas.dobro(preco, False)}")
print(f"Aumentando 10%, temos {moedas.aumentar(preco, 10, True)}")
print(f"Diminuindo 10%, temos {moedas.diminuir(preco, 13, True)}")

