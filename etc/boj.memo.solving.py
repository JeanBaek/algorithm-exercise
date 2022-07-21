# const fs = require("fs");
# const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
# const input = fs.readFileSync(filePath).toString().trim();

# const list = [
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
#   "",
# ];
# let result = "";

# input.split("\n").forEach((c: string, i: number) => {
#   if (i === 0) return;

#   const [code, n] = c.split(" ");

#   switch (code) {
#     case "add":
#       !list[+n - 1] && (list[+n - 1] = "1");
#       break;
#     case "remove":
#       list[+n - 1] && (list[+n - 1] = "");
#       break;
#     case "check":
#       result += list[+n - 1] ? 1 : 0;
#       break;
#     case "toggle":
#       list[+n - 1] ? (list[+n - 1] = "") : (list[+n - 1] = "1");
#       break;
#     case "all":
#       for (let i = 0; i < 20; i++) list[i] = "1";
#       break;
#     case "empty":
#       for (let i = 0; i < 20; i++) list[i] = "";
#       break;
#     default:
#   }
# });

# console.log(result.split("").join("\n"));



import sys;

count = int(sys.stdin.readline())
S = set();

for _ in range(count):
  temp = sys.stdin.readline().strip().split();

  if len(temp) == 1:  # n이 주어지지 않은 경우
    if temp[0] == "all":
      S = set([i for i in range(1, 21)])
    else:
      S = set()
  else:
    code, n = temp[0], temp[1]
    n = int(n)
    
    if code == "add":
      S.add(n)
    elif code == "remove":
      S.discard(n)
    elif code == "check":
      print(1 if n in S else 0)
    elif code == "toggle":
      if n in S:
        S.discard(n)
      else:
        S.add(n)


  
  elif code == "all":
    S = set([i for i in range(1, 21)])
  else:
    S = set()

    import sys

m = int(sys.stdin.readline())
S = set()

for _ in range(m):
    temp = sys.stdin.readline().strip().split()
   
    if len(temp) == 1:	#숫자가 입력되지 않는 경우
        if temp[0] == "all":
            S = set([i for i in range(1, 21)])
        else:
            S = set()  
    else:
        func, x = temp[0], temp[1]
        x = int(x)

        if func == "add":
            S.add(x)
        elif func == "remove":
            S.discard(x)
        elif func == "check":
            print(1 if x in S else 0)
        elif func == "toggle":
            if x in S:
                S.discard(x)
            else:
                S.add(x)
  


