// 프로그래머스 [오픈채팅방] lv.2
const solution = (record) => {
  const noticeSet = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  const nicknameHash = {};
  const logList = [];

  record.forEach((log) => {
    const [action, uid, nickname] = log.split(" ");

    if (nickname) nicknameHash[uid] = nickname;
    if (noticeSet[action]) logList.push([uid, action]);
  });

  return logList.map(
    ([uid, action]) => `${nicknameHash[uid]}${noticeSet[action]}`
  );
};

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);

// ㅋㅋ 아이디어 잘 내서 잘 풀었다고 생각했는데, 좋아요 많이 받은 풀이 보니까 비슷하네..
// 이제 사고 방식이 점점 이들과 비슷해져가고 있나보다.
