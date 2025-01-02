nome_homem_velho = ''
idade_homem_velho = 0
contador_mulheres = 0
soma_idades = 0
for pessoa in range(1, 4+1, 1):
    print('=' * 15, end='')
    print(f' {pessoa} pessoa° ', end='')
    print('=' * 15)
    nome = str(input('Nome: ')).strip().upper()
    idade = int(input('Idade: '))
    soma_idades += idade
    if idade > idade_homem_velho:
        idade_homem_velho = idade
        nome_homem_velho = nome
    sexo = str(input('Sexo [F/M]: ')).strip().upper()[0]
    if sexo == 'F' and idade < 20:
        contador_mulheres += 1
media = soma_idades / 4
print(f'A média das idades é {media} anos')
print(f'O homem mais velho tem {idade_homem_velho} anos de idade e se chama {nome_homem_velho}')
print(f'Ao todo temos {contador_mulheres} mulhers com menos de 20 anos ')
