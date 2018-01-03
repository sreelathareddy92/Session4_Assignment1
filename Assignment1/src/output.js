/**
 * The PersonNameSpace with an inteface Person and a function personDetail
 *
 * PersonNameSpace.
 * @interface Person
 * @function personDetail
 */
var PersonNameSpace;
(function (PersonNameSpace) {
    function personDetail(person) {
        console.log("The Person details are name: " + person.name + " with age " + person.age + " staying \n        at " + person.address);
    }
    PersonNameSpace.personDetail = personDetail;
    ;
})(PersonNameSpace || (PersonNameSpace = {}));
/**
 * file that consumes function and interface of PersonNameSpace
 *
 * PersonNameSpace.
 * @interface Person
 * @function personDetail
 */
/// < reference path="basic_namespace.ts" />
var personDetails = { name: "Tanvi", age: 8, address: "Hyderabad" };
PersonNameSpace.personDetail(personDetails);
