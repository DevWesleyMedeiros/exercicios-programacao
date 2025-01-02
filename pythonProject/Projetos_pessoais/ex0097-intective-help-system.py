# from time import sleep
# from colorama import init, Back, Fore, Style

# init(autoreset=True)  # Inicializa o colorama

# def Titulo(msg, cor=0):
#     tamanho = len(msg) + 4
#     print(Back.WHITE + Fore.BLACK + '~' * tamanho)
#     print(f'  {msg}')
#     print('~' * tamanho + Style.RESET_ALL)

# Titulo(Fore.GREEN + 'Sistema de ajuda pyHelp')
# while True:
#     funcao_ou_biblioteca = str(input('Função ou biblioteca > ')).strip()
#     print('=' * 30)
#     print(Fore.BLUE + f'Acessando o comando {funcao_ou_biblioteca}...')
#     print('=' * 30)
#     sleep(2)
#     help_msg = help(funcao_ou_biblioteca)
#     print(Back.WHITE + Fore.BLACK + f'{"=" * 30}\n{help_msg}\n{"=" * 30}' + Style.RESET_ALL)
#     opcao = str(input("Você quer continuar [S/N]? ")).strip().upper()[0]
#     while opcao not in "NS":
#         opcao = str(input('OPÇÃO INVÁLIDA!! Digite S para continuar e N para sair: ')).strip().upper()[0]
#     if opcao == 'N':
#         break
# print(Back.RED + Fore.WHITE + 'Fim do programa' + Style.RESET_ALL)

from time import sleep


def Titulo(msg, cor=0):
    tamanho = len(msg) + 4
    print('~' * tamanho)
    print(f'  {msg}')
    print('~' * tamanho)


Titulo('\033[42mSistema de ajuda pyHelp\033[42m')
while True:
    funcao_ou_biblioteca = str(input('Função ou biblioteca > ')).strip()
    print('=' * 30)
    print(f'\033[44mAcessando o comando {funcao_ou_biblioteca}...\033[44m')
    print('=' * 30)
    sleep(2)
    print(f'"\033[m"{help(funcao_ou_biblioteca)}')
    opcao = str(input("Você quer continuar [S/N]? ")).strip().upper()[0]
    while opcao not in "NS":
        opcao = str(input('OPÇÃO INVÁLIDA!! Digite S para continuar e N para sair: ')).strip().upper()[0]
    if opcao == 'N':
        break
print('\033[44m Fim do programa\033[44m')

