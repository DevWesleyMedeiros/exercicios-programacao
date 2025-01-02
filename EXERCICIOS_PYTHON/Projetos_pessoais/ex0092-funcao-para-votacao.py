def votoObrigatorio(numero):
    from datetime import datetime

    ano_atual = datetime.today().year
    idade = ano_atual - numero
    print(f'Você tem {idade} anos de idade')

    if idade < 16:
        return "Para você o voto não pode votar"
    elif 16 <= idade < 18 or idade > 65:
        return "Voto facultativo para você"
    else:
        return "O voto é obrigatório para você"


ano = int(input('Em que ano você nasceu? '))
verificar_ano = votoObrigatorio(ano)
print(verificar_ano)
