class Game{
    constructor()
    {
        this.aRockPaperScissors = ["rock" , "Paper" , "Scissors"];
        this.nTurns = 0;
        this.nPlayerWins = 0;
    }
    isDone()
    {
        return this.nTurns > 2;
    }
    Prompt()
    {
        return "rock Paper or Scissors (best of 3)";
    }
    choose()
    {
        const nComputer = Math.floor(Math.random() * this.aRockPaperScissors.length);
        return this.aRockPaperScissors[nComputer];
    }
    TakeTurn(sAnswer)
    {
        this.nTurns++;
        let aReturn = [];
        const sComputer = this.choose();
        if(this.aRockPaperScissors.includes(sAnswer))
        {
            aReturn.push("Please type rock, Paper or scissors");
            this.nTurns--;
        }
        else if(sAnswer == sComputer)
        {
            aReturn.push(`Tie!!! you both chose ${sAnswer}`);
            this.nTurns--;
        }
        else if(sComputer == "Paper" && sAnswer == "rock")
        {
            aReturn.push("I win, Paper smothers rock");
        }
        else if(sComputer == "rock" && sAnswer == "SCISSORS")
        {
            aReturn.push("I win, rock smashes scissors");
        }
        else if(sComputer == "SCISSORS" && sAnswer == "paper")
        {
            aReturn.push("I win, scissors cut Paper.");
        }
        else {
            aReturn.push(`you win :( ... you chose ${sAnswer}. I chose ${sComputer}.`)
            this.nPlayerWins++;
        }

        if (this.nTurns == 2 && this.nPlayerWins == 2)
        {
            aReturn.push("Game Over.... you win");
        }
        else if(this.nTurns == 2)
        {
            aReturn.push("Game Over.... Computer win");
        }

        return aReturn;
    }
}

export{Game}