function greet(){
    let name = 'Prajwal';

    function displayName(){
         console.log('Hi '+ name);

         let age = 23;

         function displayAge(){
            console.log(name + ' age is '+ age);
         }

         return displayAge;
    }

    return displayName
}

let g1 = greet();
//g1();//displayName()

let g2 = g1();

g2(); //displayAge();