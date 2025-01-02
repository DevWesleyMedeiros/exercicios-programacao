'''Será que você passou de ano?'''

media1 = float(input('Digite a primeira nota: '))
media2 = float(input('Digite a segunda nota: '))
media_final = (media1 + media2) / 2
if media_final < 5:
    print(f'Sua média é de {media_final} e você foi \033[31mREPROVADO\033[03m')
elif media_final > 5 and media_final <= 6.9:
    print('Você terá de fazer \033[33mRECUPERAÇÃO\033[0m')
else:
    print('PARABÉNS você foi \033[34mAPROVADO!!\033[0m')

print('FIM DO PROGRAMA!!')
