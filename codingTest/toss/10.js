function withJosa(text, josa) {
  /* 구현해주세요 */
  return "";
}

function chosungIncludes(text, keyword) {
  /* 구현해주세요 */
  return "";
}

function hangulIncludes(text, keyword) {
  /* 구현해주세요 */
  return false;
}

function solution(operation, text1, text2) {
  switch (operation) {
    case "withJosa": {
      return withJosa(text1, text2);
    }
    case "chosungIncludes": {
      return chosungIncludes(text1, text2).toString();
    }
    case "hangulIncludes": {
      return hangulIncludes(text1, text2).toString();
    }
  }
}

/* disassembleHangul 함수의 구현을 자세히 읽을 필요는 없습니다. */
function disassembleHangulLetter(letter) {
  const charCode = letter.charCodeAt(0);

  const isCompleteHangul =
    COMPLETE_HANGUL_START_CHARCODE <= charCode &&
    charCode <= COMPLETE_HANGUL_END_CHARCODE;

  if (!isCompleteHangul) {
    return undefined;
  }

  const hangulCode = charCode - COMPLETE_HANGUL_START_CHARCODE;

  const lastIndex = hangulCode % 28;
  const middleIndex = ((hangulCode - lastIndex) / 28) % 21;
  const firstIndex = Math.floor((hangulCode - lastIndex) / 28 / 21);

  return {
    first: HANGUL_CHARACTERS_BY_FIRST_INDEX[firstIndex],
    middle: HANGUL_CHARACTERS_BY_MIDDLE_INDEX[middleIndex],
    last: HANGUL_CHARACTERS_BY_LAST_INDEX[lastIndex],
  };
}

const COMPLETE_HANGUL_START_CHARCODE = "가".charCodeAt(0);
const COMPLETE_HANGUL_END_CHARCODE = "힣".charCodeAt(0);
const DISASSEMBLED_CONSONANTS_BY_CONSONANT = JSON.parse(
  `{"":"","ㄱ":"ㄱ","ㄲ":"ㄲ","ㄳ":"ㄱㅅ","ㄴ":"ㄴ","ㄵ":"ㄴㅈ","ㄶ":"ㄴㅎ","ㄷ":"ㄷ","ㄸ":"ㄸ","ㄹ":"ㄹ","ㄺ":"ㄹㄱ","ㄻ":"ㄹㅁ","ㄼ":"ㄹㅂ","ㄽ":"ㄹㅅ","ㄾ":"ㄹㅌ","ㄿ":"ㄹㅍ","ㅀ":"ㄹㅎ","ㅁ":"ㅁ","ㅂ":"ㅂ","ㅃ":"ㅃ","ㅄ":"ㅂㅅ","ㅅ":"ㅅ","ㅆ":"ㅆ","ㅇ":"ㅇ","ㅈ":"ㅈ","ㅉ":"ㅉ","ㅊ":"ㅊ","ㅋ":"ㅋ","ㅌ":"ㅌ","ㅍ":"ㅍ","ㅎ":"ㅎ"}`
);
const DISASSEMBLED_VOWELS_BY_VOWEL = JSON.parse(
  `{"ㅏ":"ㅏ","ㅐ":"ㅐ","ㅑ":"ㅑ","ㅒ":"ㅒ","ㅓ":"ㅓ","ㅔ":"ㅔ","ㅕ":"ㅕ","ㅖ":"ㅖ","ㅗ":"ㅗ","ㅘ":"ㅗㅏ","ㅙ":"ㅗㅐ","ㅚ":"ㅗㅣ","ㅛ":"ㅛ","ㅜ":"ㅜ","ㅝ":"ㅜㅓ","ㅞ":"ㅜㅔ","ㅟ":"ㅜㅣ","ㅠ":"ㅠ","ㅡ":"ㅡ","ㅢ":"ㅡㅣ","ㅣ":"ㅣ"}`
);
const HANGUL_CHARACTERS_BY_FIRST_INDEX = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const HANGUL_CHARACTERS_BY_MIDDLE_INDEX = Object.values(
  DISASSEMBLED_VOWELS_BY_VOWEL
);
const HANGUL_CHARACTERS_BY_LAST_INDEX = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
].map((consonant) => DISASSEMBLED_CONSONANTS_BY_CONSONANT[consonant]);

console.log(solution(...input));
