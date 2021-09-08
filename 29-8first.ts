interface Player{
    name: string, 
    salary: number,
    club: string,
    isPlay: boolean
    gf?: string
}

const messy:Player = {
    name: "messy",
    salary: 544,
    club: "bersolona",
    isPlay: true,
    gf: "rebaca"
}

const ronaldo:Player={
    name: "ronaldo",
    salary: 4535,
    club: "real madrid",
    isPlay: false
}

function getBonus (player:{salary: number}){
    return player.salary * 3;
}

const newPlayer = {salary: 3434};
getBonus(newPlayer);

getBonus(messy);
