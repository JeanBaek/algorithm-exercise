class HashTable {
    table = new Array(71);
    
    setItem(key, value) {
      const hashIdx = this.hashFunc(key);
      let bucket = this.table[hashIdx];
      
      if (bucket) bucket.push([key, value]);
      else this.table[hashIdx] = [[key, value]];
    }
    
    getItem(key) {
      return this.table[this.hashFunc(key)].find(el => el[0] === key)[1];
    }
    
    hashFunc(key) {
      const decimal = 13;
      let hash = 17;
      
      key.split('').forEach(char => {
        hash = (decimal * hash * char.charCodeAt()) % this.table.length;
      })
  
     return hash; 
    }
  }
  
  const hash = new HashTable();
  
  hash.setItem('firstName', 'eunjin');
  hash.setItem('lastName', 'baek');
  console.log(hash.getItem('lastName'));

/**** 프로그래머스 2019 카카오 개발자 겨울 인턴십 "호텔 방 배정" ****/
function getRoomNum(hopeNum, hotelMap) {
    if (hotelMap.has(hopeNum)) {
        const nextNum = getRoomNum(hotelMap.get(hopeNum), hotelMap);
        hotelMap.set(hopeNum, nextNum+1)
        
        return nextNum;
    }
        
    hotelMap.set(hopeNum, hopeNum+1);
    return hopeNum;
}


function solution(k, room_number) {
    const rooms = new Map();

    return room_number.map(num => getRoomNum(num, rooms))
}