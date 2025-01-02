times = ('Bot','Fla', 'Pal', 'Gre','Flu',
         'Brag', 'Apr', 'SP', 'Cui', 'Cru',
         'Fort', 'Int', 'Amg', 'Corin', 'San',
         'Goi', 'Bah', 'Corit', 'AMmg', 'Vas')
print('=' * 70)
print('Lista dos times do Brasileirão', times)
print('=' * 70)
print('Os cinco primeiros times são {} '.format(times[0:5]))
print('=' * 70)
print('Os quatro últimos times da tabela são {}'.format(times[-4:]))
print('=' * 70)
print('Os times em ordem alfabética são {}'.format(sorted(times)))
print('=' * 70)
print(f'A posição do GRÊMIO é {times.index("Gre")+1}° ')
