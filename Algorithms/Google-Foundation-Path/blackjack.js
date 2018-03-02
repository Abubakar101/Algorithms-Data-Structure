// Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

function blackjack(a, b) {
	let firstVal = 0,
		secVal = 0;

	if (a > 21 && b > 21) return 0;

	if (a <= 21) {
		firstVal = a;
	}
	if (b <= 21) {
		secVal = b;
	}

	return firstVal > secVal ? a : b;
}

blackjack(19, 21); //→ 21
blackjack(21, 19); //→ 21
blackjack(19, 22); //→ 19
