const friends = ['Michal', 'Steven', 'Peter'];
const newLength =  friends.push('Jay');
console.log(friend + '👍');
console.log(newLength + '👍');
friend.unshift('John');
console.log(friends);
const popped = friends.pop();
console.log(friends);
console.log(popped);
friends.shift();
console.log(friends.indexOf('Steven'));
console.log(friends.includs('Bod'));

console.log(friends.includs('Steven'));
console.log(friends.includes('Bod'));
friends.push(23);
console.log(friends);
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
	console.log('You have a friend calledd Steven');
}