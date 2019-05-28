
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function() {
          console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW

let task1 = newTask("Clean Cat Litter", "take out all the poop from the litterbox"); // task 0
let task2 = newTask("Do Laundry", "sad face"); // task 1
let tasks = [task1, task2]

task1.logTaskState();
task1.completeTask();
task1.logTaskState();
console.log(tasks)
