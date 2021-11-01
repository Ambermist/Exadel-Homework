class Zoo {
    constructor (address, area, establishedDate, workers, animals){
        this._address = address;
        this._area = area;
        this._establishedDate = establishedDate;
        this._workers = workers;
        this._animals = animals;
    }

    get address(){
        return this._address;
    }
    set address(address){
        this._address = address;
    }
    get area(){
        return this._area;
    }
    set area(area){
        this._area = area;
    }
    get establishedDate(){
        return this._establishedDate;
    }
    get ticketPrice(){
        return this._ticketPrice;
    }
    set ticketPrice(ticketPrice){
        this._ticketPrice = ticketPrice;
    }
    addAnimal(animal){
        this._animals.push(animal);
    }
    removeAnimal(animalId){
        this._animals.splice(animalId,1);
        return this._animals;
    }
    editAnimal(id, newAnimal){
        this._animals[id] = newAnimal;
    }
    showAnimals(){
        console.log(this._animals);
        return this._animals;
    }
    showAnimalById(id){
        console.log(this._animals[id]);
    }
    addWorker(worker){
        this._workers.push(worker);
    }
    removeWorker(workerId){
        this._workers.splice(workerId,1);
        return this._workers;
    }
    editWorker(id, newWorker){
        this._workers[id] = newWorker;
    }
    showWorkers(){
        console.log(this._workers);
    }

}

//Animal

class Animal {
    constructor (type, color, weight, height, placeOfOrigin){
        this._type = type;
        this._color = color;
        this._weight = weight;
        this._height = height;
        this._placeOfOrigin = placeOfOrigin;
    }

    
    set weight(weight){
        this._weight = weight;
    }
    set height(height){
        this._height = height;
    }
    getInfo(){
        console.log(this);
    }
    
}
class Snakes extends Animal {
    constructor (type, color, weight, height, placeOfOrigin, isPoisonous){
        super(type, color, weight, height, placeOfOrigin);
        this._isPoisonous = isPoisonous;
    }    
}
class CatLike extends Animal {
    constructor (type, color, weight, height, placeOfOrigin, isSafeToPet){
        super(type, color, weight, height, placeOfOrigin);
        this._isSafeToPet = isSafeToPet;
    }    
}
class Birds extends Animal {
    constructor (type, color, weight, height, placeOfOrigin, isFlying){
        super(type, color, weight, height, placeOfOrigin);
        this._isFlying = isFlying;
    }    
}
    
class Worker {
    constructor (firstName, lastName, phone){
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
    }
}

let vet = new Worker("Ann", "Smith", "8209839890");
let director = new Worker("Corey", "Taylor", "554345890");
let manager = new Worker("David", "Draiman", "43234345890");
let lion = new CatLike("lion", "yellow", 120.5, 1.4, "Africa", false);
let python = new Snakes("python", "spotted", 30, 0.1, "South America", false);
let raven = new Birds("raven", "black", 1, 0.15, "Europe", true);
let zoo1 = new Zoo("Botanical st., 20", 300, '13.10.2011', [vet], [lion]);
zoo1.addWorker(director);
zoo1.addWorker(manager);
zoo1.removeWorker(0);
zoo1.ticketPrice = 100;
zoo1.addAnimal(raven);
zoo1.editAnimal(0, python);
//lion.getInfo();
zoo1.showAnimals();
zoo1.showWorkers();

let divZoo = document.createElement('div');
divZoo.classList.add('zoo');
let zooP1 = document.createElement('p');
zooP1.innerHTML = `address: ${zoo1._address}, area: ${zoo1._area}, established: ${zoo1._establishedDate}, ticket: ${zoo1._ticketPrice}`;
let zooP2 = document.createElement('p');
zooP2.innerHTML = JSON.stringify(zoo1.showAnimals());
divZoo.appendChild(zooP1);
divZoo.appendChild(zooP2);

document.body.appendChild(divZoo);
