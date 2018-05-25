/*
The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new undos.

https://www.codewars.com/kata/531489f2bb244a5b9f00077e/train/javascript

https://www.youtube.com/watch?v=4sdiWc3vVJo
*/
function undoRedo(object) {
	let trackSteps = [],
		undoSteps = [];

	return {
		set: function(key, value) {
			if (object[key]) trackSteps.push(['edit', key, object[key], value]);
			else trackSteps.push(['set', key, value]);

			object[key] = value;
			undoSteps = [];
		},
		get: function(key) {
			return object[key];
		},
		del: function(key) {
			trackSteps.push(['del', key, object[key]]);
			if (object[key]) delete object[key];
			undoSteps = [];
		},
		undo: function() {
			if (trackSteps.length === 0) throw new Error();
			const lastAction = trackSteps.pop();

			if (lastAction[0] === 'set') delete object[lastAction[1]];
			else if (lastAction[0] === 'edit') object[lastAction[1]] = lastAction[2];
			else if (lastAction[0] === 'del') object[lastAction[1]] = lastAction[2];

			undoSteps.push(lastAction);
		},
		redo: function() {
			if (undoSteps.length === 0) throw new Error();
			const undoActions = undoSteps.pop();

			if (undoActions[0] === 'set') object[undoActions[1]] = undoActions[2];
			else if (undoActions[0] === 'edit')
				object[undoActions[1]] = undoActions[3];
			else if (undoActions[0] === 'del') delete object[undoActions[1]];

			trackSteps.push(undoActions);
		},
	};
}
