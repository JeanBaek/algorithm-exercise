// 휴대폰 번호가 유효한지 판별하는 함수를 만드시오.

const checkAvailablePhoneNum = (num) => {
    num = num.split("-").join("");
  
    const checkAllNum = Number.isInteger(Number(num));
    const checkStartNum = num.slice(0, 3) === "010" ? true : false;
    const checkNumLength = num.slice(3).length === 7 || num.slice(3).length === 8 ? true : false
  
    return checkAllNum && checkStartNum && checkNumLength ? true : false;
}

checkAvailablePhoneNum("0101234567");