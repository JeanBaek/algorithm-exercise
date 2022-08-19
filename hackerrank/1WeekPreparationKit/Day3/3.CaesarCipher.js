const UPPER_Z_UTFCODE = 90;
const LOWER_Z_UTFCODE = 122;
const ALPHABET_LENGTH = 26;

function caesarCipher(s, k) {
	k %= 26;
	// Write your code here
	// k만큼 unicode + 3 반환하면 될듯
	// charCodeAt(i) String.fromCharCode(c+k)
	return s.split("").reduce((p, c, i) => {
		const isUppecase = /[A-Z]/.test(c);
		const isLowercase = /[a-z]/.test(c);

		if (isUppecase || isLowercase) {
			let newUtfcode = s.charCodeAt(i) + k;
			const isNeedToBack =
				(isUppecase && UPPER_Z_UTFCODE < newUtfcode) ||
				(isLowercase && LOWER_Z_UTFCODE < newUtfcode);

			if (isNeedToBack) newUtfcode -= ALPHABET_LENGTH;

			p += String.fromCharCode(newUtfcode);
		} else p += c;

		return p;
	}, "");
}

console.log(caesarCipher("There's-a-starman-waiting-in-the-sky.", 3));

console.log(caesarCipher("middle-Outz", 2));
