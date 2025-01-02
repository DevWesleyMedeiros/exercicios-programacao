from random import randint
from time import sleep
from operator import itemgetter

jogos = {"jogador1":randint(1, 6),
         "jogador2":randint(1, 6),
         "jogador3":randint(1, 6),
         "jogador4":randint(1, 6)
         }
ranking = list()
for k, v in jogos.items():
    print(f'O {k} tirou {v} no dado')
    sleep(1)
ranking = sorted(jogos.items(), key=itemgetter(1), reverse=True)
print('=' * 30)
print(' ==== RANKING DOS JOGADORES === ')
for i, v in enumerate(ranking):
    print(f'{i+1}° lugar: {v[0]} com {v[1]}' )
    sleep(1)

'''
A biblioteca operator em Python é um módulo que fornece funções que implementam operações comuns do Python como funções.
Essas funções são frequentemente usadas como argumentos para funções de ordem superior, como map(), sorted(), reduce(), entre outras.
A biblioteca operator pode ser útil para evitar a criação de funções lambda simples e melhorar a legibilidade do código.
Aqui estão algumas das operações suportadas pela biblioteca operator e como você pode usá-las:

    Operações Aritméticas:
        operator.add(a, b): Retorna a soma de a e b.
        operator.sub(a, b): Retorna a diferença entre a e b.
        operator.mul(a, b): Retorna o produto de a e b.
        operator.truediv(a, b): Retorna a divisão de a por b (em ponto flutuante).

    Operações de Comparação:
        operator.eq(a, b): Retorna True se a for igual a b, senão False.
        operator.ne(a, b): Retorna True se a não for igual a b, senão False.
        operator.lt(a, b): Retorna True se a for menor que b, senão False.
        operator.le(a, b): Retorna True se a for menor ou igual a b, senão False.
        operator.gt(a, b): Retorna True se a for maior que b, senão False.
        operator.ge(a, b): Retorna True se a for maior ou igual a b, senão False.

    Operações de Sequência:
        operator.concat(a, b): Retorna a concatenação de a e b.
        operator.contains(container, item): Retorna True se item estiver em container, senão False.
        operator.itemgetter(index): Retorna uma função que obtém o elemento no índice especificado.
        operator.setitem(container, index, value): Atribui value ao índice index em container.

    Operações Lógicas:
        operator.and_(a, b): Retorna a AND b.
        operator.or_(a, b): Retorna a OR b.
        operator.not_(a): Retorna a negação de a.
'''

'''
Neste exemplo, a função get_grade criada com itemgetter(1) extrai o segundo elemento (índice 1) de cada tupla, ou seja, as notas dos alunos. 
O resultado é uma lista ordenada de alunos com base nas notas.
Exemplo com dicionários:

python
Neste exemplo, a função get_age criada com itemgetter("age") extrai os valores associados à chave "age" em cada dicionário.
Isso permite que a lista de dicionários seja ordenada com base nas idades.

O método itemgetter() pode ser especialmente útil em situações em que você precisa realizar ordenações ou acessar valores de maneira eficiente,
evitando a necessidade de escrever funções lambda ou loops extras.

from operator import itemgetter

data = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30},
    {"name": "Charlie", "age": 22},
]
# Criando uma função que extrai a idade dos dicionários
get_age = itemgetter("age")

# Ordenando a lista de dicionários com base nas idades
sorted_data = sorted(data, key=get_age)
print(sorted_data)
'''