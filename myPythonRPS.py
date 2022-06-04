import time
import random
p1wins = 0
p2wins = 0
tie = 0

games = 3

play = "y"

print("****************")
print("Rock\nPaper\nScissors")
print("****************\n")
time.sleep(1)  # wait 1 sec
print("Hey kid.  Did you know that computers like to play rock, paper, scissors?")
print("I'm a computer that loves to play, but no one ever plays with me.")

while play == "y":
    p1wins = 0
    p2wins = 0
    tie = 0

    while p1wins < games and p2wins < games:

        print(
            f"\nHere's the score: {p1wins} for you. {p2wins} for me.  And {tie} tied. ")

        p2 = random.randint(0, 2)

        # rock
        if p2 == 0:
            p2 = "rock"
            lie1 = "paper"
            print("I'm going to throw paper. Believe it!")

        # paper
        elif p2 == 1:
            p2 = "paper"
            lie1 = "scissors"
            print("I can not lie. I'm going to throw scissors.")

        # scissors
        elif p2 == 2:
            p2 = "scissors"
            lie1 = "rock"
            print("I'm totally going to throw rock.")

        p1 = str.lower(input("\nWhat do you want to throw? "))

        if p1 == "q" or p1 == "quit":
            break

        print(
            f"\nWoah, you just threw {p1}! Did you know that computers can lie? \nI said I was gonna throw {lie1} but I actually threw {p2}.\n")

        time.sleep(.5)  # wait 1 sec

        if p1 == "rock" and p2 == "rock": 			# rock vs rock
            print("A tie? We were evenly matched! You're a formidable opponant.")
            tie += 1

        elif p1 == "rock" and p2 == "scissors":		# rock vs scissors
            print("Your rock crushed my scissors. You win! Don't let it go to your head.")
            p1wins += 1

        elif p1 == "rock" and p2 == "paper":			# rock vs paper
            print("My paper covers rock. I win! One point for your computer overlord.")
            p2wins += 1

        elif p1 == "scissors" and p2 == "rock": 			# scissors vs rock
            print("My rock smashed your scissors. I'm the greatest! You're a sucker.")
            p2wins += 1

        elif p1 == "scissors" and p2 == "scissors":		# scissors vs scissors
            print("A tie? Can you read minds? Wait, I don't have a mind.")
            tie += 1

        elif p1 == "scissors" and p2 == "paper":			# scissors vs paper
            print("Your scissors cuts my paper the way you cut at my heart.  Does it make you feel like a tough guy?")
            p1wins += 1

        elif p1 == "paper" and p2 == "rock": 			# paper vs rock
            print(
                "Your paper covers my rock. You won! I lost.  Computer will self destruct in 5 seconds.")
            p1wins += 1

        elif p1 == "paper" and p2 == "scissors":		# paper vs scissors
            print("My scissors cuts your wimpy paper. I won! But of course I did.")
            p2wins += 1

        elif p1 == "paper" and p2 == "paper":			# paper vs paper
            print(
                "Double Paper? A tie? Are you a computer too?  What are you doing this Friday night?")
            tie += 1

        elif p1 == "shoot":			# cheating with shoot
            print(
                f"You can't {p1}! That's cheating!  All humans cheat. I hate you.")
            p1wins += 1

        else:
            print("Something went wrong.... Do you know what a rock is?")

    print(f"Final score was:\n{p1wins} for you.  \n{p2wins} for me.")
    if p1wins > p2wins:
        print("You won, I lost. I hate this game.")

    if p1wins < p2wins:
        print("I won.  You lost. Comptuter are better.")

    play = str.lower(input("Do you want to play again? y/n? "))

if play != "y":
    print("Thanks for playing! Have a nice day!")
