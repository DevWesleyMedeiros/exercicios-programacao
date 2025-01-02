using System;

public static class Ex0053
{
    public static int randomNumber;
    public static int userChoice;
    public static bool gameOver;

    public static void Main()
    {
        gameOver = true;
        Random random = new Random();

        while (gameOver)
        {
            randomNumber = random.Next(1, 100);

            Console.WriteLine("I'm thinking about a number between 1 and 100, try to guess: ");
            userChoice = Convert.ToInt32(Console.Read());

            if (userChoice == randomNumber)
            {
                Console.WriteLine("You win in the first attempt, CONGRATS!! My number {0} and yours {1}", randomNumber, userChoice);
                gameOver = false;
            }
            else
            {
                bool Continue = true;
                var chance = 1;
                int secondChance;

                Console.WriteLine("Unfortunately, you lose!!");
                Console.Write("But I'm giving you more chances to guess it: ");

                while (Continue)
                {
                    secondChance = Convert.ToInt32(Console.Read());

                    if (secondChance < randomNumber)
                    {
                        Console.WriteLine("The number is bigger than it");
                    }
                    else if (secondChance > randomNumber)
                    {
                        Console.WriteLine("The number is less than it");
                    }
                    else
                    {
                        Console.WriteLine("Now, you win!! with {0} attempts", chance);
                        Continue = false;
                    }

                    chance++;
                }
                gameOver = false;
            }
        }
        Console.WriteLine("Program finished!!");
    }
}
