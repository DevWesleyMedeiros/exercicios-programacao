def notasAlunos(*notas, sit=False):

    '''
    --> Função que registra dados escolares de um aluno
    :param notas: Uma ou mais notas de alunos (aceita várias notas)
    :param sit: Valor opcional para mostrar ou não a situação
    :return: Dicionário com as informações das notas dos alunos
    '''

    notaMaior = notaMenor = 0
    somaNotas = contNotas = 0
    dictNotas = dict()

    for nota in notas:
        contNotas += 1
        dictNotas["Total Notas"] = contNotas
        if contNotas == 1:
            notaMaior = nota
            notaMenor = nota
        else:
            if nota > notaMaior:
                notaMaior = nota
                dictNotas["Maior Nota"] = notaMaior
            elif nota < notaMenor:
                notaMenor = nota
                dictNotas["Menor Nota"] = notaMenor
        somaNotas += nota

    mediaNotas = somaNotas / contNotas
    dictNotas["Média"] = mediaNotas

    if sit:
        if mediaNotas >= 0 and mediaNotas < 4:
            dictNotas["Situação"] = 'Nota Ruim'
        elif mediaNotas >= 4 and mediaNotas < 7:
            dictNotas["Situação"] = 'Nota Razoável'
        else:
            dictNotas["Situação"] = 'Nota Boa'

    return dictNotas


'''
notas = notasAlunos(1.5, 8.8, 5, 10)
print(notas)
'''
print(help(notasAlunos))
