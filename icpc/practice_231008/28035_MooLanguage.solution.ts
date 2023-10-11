const fs = require("fs");
const filepath = "./28035_MooLanguage.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([numProblem, ...problems]: string[]) {
    const outputMap: Array<[number, string]> = [];

    let i;

    for (i = 0; i < problems.length;) {
        // N === words, C === commas, P === 마침표
        const [N, C, P]: string[] = problems[i].split(' ');
        const [words, commas, periods]: number[] = [Number(N), Number(C), Number(P)];

        if (words === 1) {
            outputMap.push([0, '']);
        }

        const wordsBank = new Map();
        wordsBank.set('noun', []);
        wordsBank.set('transitive-verb', []);
        wordsBank.set('intransitive-verb', []);
        wordsBank.set('conjunction', []);

        for (let j = 0; j < words; j++) {
            const [word, type] = problems[i + j + 1].split(' ');
            console.log({word, type})
            wordsBank.get(type).push(word);
        }

        console.log({wordsBank})

        const maxVerb = wordsBank.get('transitive-verb').length + wordsBank.get('intransitive-verb').length;
        const maxConj = wordsBank.get('conjunction').length;
        const maxPeriod = periods;


        // if (maxVerb - maxConj <= maxPeriod) {
        //     // maxVerb - maxConj 만큼 문장 생성 가능
        //
        //
        // } else {
        //     // maxPeriod 만큼 문장 생성 가능
        //
        //
        // }

        // sentences 모두 만들고
        const sentencesType1 = [];
        const sentencesType2 = [];
        wordsBank.get('intransitive-verb').forEach((v: string) => {
            const noun = wordsBank.get('noun').pop();

            if (!noun) return;
            sentencesType1.push(`${noun} ${v}`);
        });

        wordsBank.get('transitive-verb').forEach((v: string) => {
            const noun1 = wordsBank.get('noun').pop();
            const noun2 = wordsBank.get('noun').pop();

            if (!noun1 || !noun2) return;
            sentencesType2.push(`${noun1} ${v} ${noun2}`);
        })

        // TODO: 조금 더 풀어보기
        // 타동사 sentences에 period 붙이기

        // 문장 만들고 나서, 타동사가 있는 문장 뒤에 '남는 컴마와 단어'를 모두 연결
        // const possible연결단어 = Math.min(남는 컴마, 남는 단어)

        // conj로 연결하고

        // 단어개수 기준으로 오름차순을 만든 후에
        // 오름차순

        // 마지막 문장부터 빼내어서 period 붙이고

        //

        // outputMap에 push([단어개수, sentence]);


        i = words + 1;
    }

    outputMap.forEach(([num, sentences]) => {
        console.log(num);
        console.log(sentences);
    })

    return;
}

solution(input)


export {}

