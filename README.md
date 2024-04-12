# Growing Pains JavaScript Program

This JavaScript program simulates the growth of plants in a garden over several weeks. It provides warnings when the garden is nearing or exceeding its capacity, and calculates the additional space required for a larger number of plants.

## Program Parts

The program is divided into three parts:

### Part 1: Growing Pains

This part simulates the growth of plants in a garden over three weeks. The number of plants doubles each week. The program provides warnings based on the garden's capacity:

- If the number of plants exceeds 80% of the garden's capacity, it advises to prune the plants.
- If the number of plants is between 50% and 80% of the garden's capacity, it advises to monitor the growth of the plants.
- If the number of plants is less than 50% of the garden's capacity, it advises that there is room for more plants.

### Part 2: Thinking Bigger

This part calculates the additional space required if the scientists were to start with 100 plants and did not prune them for 10 weeks. It also calculates the radius of the expanded garden if the space remained circular.

### Part 3: Errors in Judgement

This part simulates a scenario where the scientists did not listen to the program's recommendations and started with 100 plants in the original 5-meter-radius garden. It uses a try-catch block to handle the error when the amount of space required to hold the plants exceeds the amount of space available in the garden.

## Running the Program

To run this program, you need a JavaScript environment like Node.js. Save the program in a file, say `script.js`, and run it with the command `node script.js`.You can also use `index.html` file to be opened on your browser to inspect
and console will display the calculations and warnings.

## Output

The program outputs the warnings and calculations to the console or on the browser depending on what is used.