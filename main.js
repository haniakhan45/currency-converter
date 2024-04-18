#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.bold("\n \t Welcome To Currency Converor\n"));
let exchange_rate = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currency(Euro)
    "JPY": 113, // Japanese Currency(Yen)
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.70, // Pakistani Rupees
};
let user_answer = await inquirer.prompt([{
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:"
    }
]);
let from_currency = exchange_rate[user_answer.from_currency];
let to_currency = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_currency;
let converted_amount = base_amount * to_currency;
console.log(`Converted Amount: ${chalk.green(converted_amount.toFixed(2))}`);
