type StringOrNum = string | number;
type MyText = string | { text: string };
type MyCoordubates = [number, number];

let myThing: StringOrNum;
myThing = 123;
myThing = 'Also String';

// Med alias kan vi namnge en typ av kombinerade datatyper.
let coordinates: MyCoordubates = [12.324, 213.2];
