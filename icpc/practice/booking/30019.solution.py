import sys

def solution(input_data):
    NM, *bookingData = input_data
    N, M = map(int, NM.split())
    classRoomEndTime = {i + 1: 0 for i in range(N)}

    for b in bookingData:
        classroom, s, e = map(int, b.split())
        if classRoomEndTime.get(classroom, 0) <= s:
            print('YES')
            classRoomEndTime[classroom] = e
        else:
            print('NO')

if __name__ == "__main__":
    input_data = [line.rstrip() for line in sys.stdin.readlines()]
    solution(input_data)
