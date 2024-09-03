import { consultant, Consultant } from './intersection';

// <T> fungerar som en placeholder för att göra functionen mer generisk
function identify<T>(thing: T): T {
  return thing;
}

identify<string>('Hello');
identify('Hello');
identify<number>(21);
identify<Consultant>(consultant);
