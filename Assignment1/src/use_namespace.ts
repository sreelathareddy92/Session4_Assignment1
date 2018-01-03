/** 
 * file that consumes function and interface of PersonNameSpace
 * 
 * PersonNameSpace.
 * @interface Person
 * @function personDetail 
 */

/// < reference path="basic_namespace.ts" />

let personDetails: PersonNameSpace.Person = { name: "Tanvi", age: 8, address: "Hyderabad" }
PersonNameSpace.personDetail(personDetails);