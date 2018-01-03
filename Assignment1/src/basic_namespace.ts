/**
 * The PersonNameSpace with an inteface Person and a function personDetail
 * 
 * PersonNameSpace.
 * @interface Person
 * @function personDetail
 */

namespace PersonNameSpace {

    // export allows components defined in a module to use in other modules.
    export interface Person {
        name: String;
        address: String;
        age: number;
    }

    export function personDetail(person: Person)
    {
        console.log(`The Person details are name: ${person.name} with age ${person.age} staying 
        at ${person.address}`);
    };
} 
