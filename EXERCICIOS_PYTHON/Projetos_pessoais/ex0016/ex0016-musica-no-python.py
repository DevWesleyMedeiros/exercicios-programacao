import pygame

pygame.init()
pygame.mixer.init()
pygame.mixer.music.load('natureza.mp3')
pygame.mixer.music.play()

'''Aguarda a música terminar de tocar'''
while pygame.mixer.music.get_busy():
    pass
