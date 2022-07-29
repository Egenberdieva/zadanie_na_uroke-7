// oop

// class Dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new Dog(
//     5,
//     60,
//     'violet'
// )
// console.log(rex)
//
// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type =type;
//         this.gender =gender;
//         this.color =color;
//         this.voiceText = voiceText;
//     }
// }
//
// class Bear extends Animal{
//     constructor(type, gender, color, voiceText, height, weight, earLength) {
//         super(type, gender, color, voiceText);
//
//         this.height = height;
//         this.weight =weight;
//         this.earlength =earLength;
//     }
//      main(){
//     console.log(`Misha king because his height: ${this.height} his weight: ${this.weight} his voice: ${this.voiceText}`)
// }
//
//  }
//
//  const Misha = new Bear(
//      'domestic',
//      'female',
//      'brown',
//      'aaaaarrrr',
//      2.5,
//      500,
//      10
//  )
//
// console.log(Misha)
// Misha.main()
//
// class Cat extends Animal{
//     constructor(type, gender, color, voiceText, height, weight) {
//         super(type, gender, color, voiceText);
//         this.height = height;
//         this.weight =weight;
//     }
//     purpose(){
//         console.log(`Cat: ${this.voiceText} \nPurpose: ${this.weight}`)
//     }
// }
//
// const Bars = new Cat(
//     'pet',
//     'male',
//     'blue',
//     'myaaauu',
//     25,
//     2
// )
// console.log(Bars)
// Bars.purpose()
//
// function BearKing(type, gender, color, voiceText, height, weight, earLength) {
//     console.log(type, gender, color, voiceText, height, weight, earLength)
//
// }
//
// BearKing('domestic', 'female', 'brown', 'aaarrr', 2.5, 500, 10 )


class Building {
    constructor(structures, place, classification, material, cost) {
        this.structures = structures;
        this.place = place;
        this.classification = classification;
        this.material = material;
        this.cost = cost
    }
}

class School extends Building {
    constructor(structures, place, classification, material, cost, type, language, director, countChildren, countTeacher) {
        super(structures, place, classification, material, cost);
        this.type = type;
        this.language = language;
        this.director = director;
        this.countChildren = countChildren;
        this.countTeacher = countTeacher
    }

    main() {
        console.log(`SilkRoad best school because language: ${this.language} countChildren: ${this.countChildren}`)
    }
}

const SilkRoad = new School(
    'educational',
    '6 mrn',
    'school',
    'brick',
    10000000,
    'private',
    'english',
    'Temirov A.B.',
    15,
    40

)
console.log(SilkRoad)
SilkRoad.main()



class Home extends Building {
    constructor(structures, place, classification, material, cost, floor, elevator, concierge, residents, parking) {
        super(structures, place, classification, material, cost);
        this.floor = floor;
        this.elevator = elevator;
        this.concierge = concierge;
        this.residents = residents;
        this.parking =parking;
    }

    purpose() {
        console.log(`Avangard best home because elevator: ${this.elevator} floor: ${this.floor}`)
    }
}

const Avangard = new Home(
    'House',
    'magistral',
    'multi-storey building',
    'bricks',
    '100000000000',
    25,
    'japan',
    'yes',
    '500',
    'underground parking'


)
console.log(Avangard)
Avangard.purpose()



