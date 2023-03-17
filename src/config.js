const LIST_TYPES = {
	BACKLOG: 'backlog',
	IN_PROGRESS: 'inProgress',
	READY: 'ready',
	DONE: 'done',
  }
  const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
	[LIST_TYPES.IN_PROGRESS]: 'Ready',
	[LIST_TYPES.READY]: 'In progress',
	[LIST_TYPES.DONE]: 'Finished',
  }
  export { LIST_COPY, LIST_TYPES };