function Question(prompt, directions, answers) {
    this.prompt = prompt;
    this.directions = directions;
    this.answers = answers;

    this.directions.push(this.directions[this.directions.length - 1]);
    this.directions.push(this.directions[this.directions.length - 1]);
}