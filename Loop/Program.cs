Random rand = new Random();
int magicNum = rand.Next(0, 100);

int guess = 0;


while (guess != magicNum){
    Console.Write("What is the magic number? ");
    guess = int.Parse(Console.ReadLine());

    if (magicNum > guess){
        Console.WriteLine("Higher");
    }
    else if (magicNum < guess){
        Console.WriteLine("Lower");
    }
    else{
        Console.WriteLine("You rock!!!");
    }

}
Console.ReadKey();