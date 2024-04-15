function characterCard(Name, Type, Damage, Vitality, Skill) {
    this.Name = Name;
    this.Type = Type;
    this.Damage = Damage;
    this.Vitality = Vitality;
    this.Skill = Skill;
}

function PetCard(Name, Type, Damage, Vitality, Skill) {
    characterCard.call(this, Name, Type, Damage, Vitality, Skill)
}


function BossCard(Name, Type, Damage, Vitality, Skill) {
    characterCard.call(this, Name, Type, Damage, Vitality, Skill)
}



const Bardo = new characterCard('Bardo', 'Suport', 10, 100, 'Cura');
const Guerreiro = new characterCard('Guerreiro', 'Tank', 60, 120, 'Barreirao Divina');
const Mago = new characterCard('Mago', 'carry', 200, 90, 'Bola - De - Fogo');
const Lobo = new PetCard('Lobo', 'PET', 30, 60, 'distração')

const basilisco = new BossCard('basilisco', 'Boos', 350, 270, 'poison')


console.log(Bardo)
console.log(Guerreiro)
console.log(Mago)
console.log(Lobo)
console.log(basilisco)