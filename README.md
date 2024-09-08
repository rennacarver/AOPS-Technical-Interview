# Queue it up! Tech Challenge

![Slide1](https://github.com/user-attachments/assets/9cb1bf62-0bd2-45a0-b836-c53a7825b02b)


## Features
 - click the 'Queue it up!' button to queue a list of tasks and have them complete sequentially

## Thinking/Questions Asked
 - Does the runTask() function call know which instance of addToQueue called it? Yes
   - Running runTask() twice from addToQueue does not start the next task

## Lessons Learned
 - The initial intuition/insight ('it feels recursive') was correct
 - Building out a solution is a lot of stumbling in the dark and asking lots of questions at first
 - Stepping away from the code editor is where most of the problem solving occurs
 - Working with function pointers and recursion for the first time is pretty fun

## Limitations/Future Enhancements
 - If the tasks could be added instantaneously at the same time, the starting condition (taskQueue === 1) would fail
