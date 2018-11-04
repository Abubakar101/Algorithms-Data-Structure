/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
*/

function formatDuration (secs) {
  if (secs <= 0) return "now";
  
  // Format Logic
	const yrs = Math.floor(secs / 31536000);
	secs -= yrs * 31536000;
	const days = Math.floor(secs / 86400);
	secs -= days * 86400;
	const hrs = Math.floor(secs / 3600);
	secs -= hrs * 3600;
	const mins = Math.floor(secs / 60);
	secs -= mins * 60;

	// singular/plural - of time
	let arr = [];
	if (yrs > 0) arr.push(`${yrs} ${yrs === 1 ? 'year' : 'years'}`);
	if (days > 0) arr.push(`${days} ${days === 1 ? 'day' : 'days'}`);
	if (hrs > 0) arr.push(`${hrs} ${hrs === 1 ? 'hour' : 'hours'}`);
	if (mins > 0) arr.push(`${mins} ${mins === 1 ? 'minute' : 'minutes'}`);
	if (secs > 0) arr.push(`${secs} ${secs === 1 ? 'second' : 'seconds'}`);

	// Grammer & syntax
	let output = '';
	for (let i = 0, j = arr.length; i < j; i++) {
		if (i >= j - 2 && i !== j - 1) output += `${arr[i]} and `;
		else if (i < j - 2) output += `${arr[i]}, `;
		else output += `${arr[i]}`;
	}
	return output;
}


console.log(formatDuration(3662) === '1 hour, 1 minute and 2 seconds');
