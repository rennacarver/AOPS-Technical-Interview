# Queue it up! Tech Challenge





## Features
 - click the 'Queue it up!' button to queue a list of tasks and have them complete sequentially

## Thinking/Questions Asked
 - Does the runTask() function call know which instance of addToQueue called it? Yes
 - Running runTask() twice from addToQueue does not start the next task
 - 

## Lessons Learned
 - The initial intuition/insight ('it feels recursive') was correct
 - Building out a solution is a lot of stumbling in the dark and asking lots of questions at first
 - Stepping away from the code editor is where most of the problem solving occurs
 - Working with function pointers and recursion for the first time is pretty fun

## Limitations/Future Enhancements
 - If the tasks could be added instantaneously at the same time, the starting condition (taskQueue === 1) would fail
