let taskQueue = []

function handleTask () {
  console.log('task is complete')
  taskQueue.shift()
  console.log(`taskQueue.length: ${taskQueue.length}`)
  console.log(`------end of runTask-----`)

  if (taskQueue.length > 0) {
    const nextTask = taskQueue[0]
    nextTask( () => {handleTask()})
  }
}

function addToQueue(runTask) {
  // addToQueue runs when the 'Queue it up!' button is clicked.

  console.log(`addToQueue is running`)

  taskQueue.push(runTask)

  console.log(`taskQueue.length: ${taskQueue.length}`)

  console.log(`------end of addToQueue-----`)


  //Call runTask when the task is ready to start.

  if (taskQueue.length === 1) {
    runTask(
      handleTask
    ); 
  } 
  
}
