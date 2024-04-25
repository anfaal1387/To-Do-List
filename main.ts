import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";

let todoList: string [] = [];
let conditions = true;

console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<<<==========================>>>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<<<<==============>>>>>Welcome to UmmeAnfaal-To Do List Applications<<<<<<===========>>>>>>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<<============================>>>>>\n`));
while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "Input",
            message: "Entre Your New Task"
        }
    ]);

    todoList.push(addTask.task);
    console.log(`"${addTask.task}" task added in your To-Do list Successfully`);


    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do You Want To Add More Tasks?",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore
}
console.log(chalk.bgMagenta("Your Updated TO-DO List is:" , todoList));


let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "Choices",
                type: "list",
                message: "Select an opion You Want to do:",
                choices: ["Add Tasks", "Edit Tasks", "Delete Tasks", "View To-Do List", "Exit"],
            }
        ]);
        if(option.choices === "Add Task"){
            await addTasks()
        }
        else if(option.choices === "View To-Do List"){
            await viewTasks()
        }
        else if(option.choices === "Exit"){
            conditions = false;
        }
    }
 }

let addTasks = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Entre Your New Tasks:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added sucessfully in To-Do List`);
}

//Function to view all To-Do List
let viewTasks = () => {
    console.log("\n Your To-Do List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`)
    })
}
main();
