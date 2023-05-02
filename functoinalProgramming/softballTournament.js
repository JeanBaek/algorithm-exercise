const evaluations = [
    {name: 'Jane', position: 'catcher', score: 25},
    {name: 'John', position: 'pitcher', score: 10},
    {name: 'Harry', position: 'pitcher', score: 3},
]

const roster = evaluations.reduce((roster, {name, position}) => {
    if (roster[position]) return roster;

    return objectSet(roster, position, name);
}, {})

