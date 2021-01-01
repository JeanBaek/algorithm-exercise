const regPhoneNum = (num) => {
    num = num.split("-").join("");
  
    const checkAllNum = Number.isInteger(Number(num));
    const checkStartNum = num.slice(0, 3) === "010" ? true : false;
    const checkNumLength = num.slice(3).length === 7 || num.slice(3).length === 8 ? true : false
  
    return checkAllNum && checkStartNum && checkNumLength ? true : false;
}

regPhoneNum("0101234567");