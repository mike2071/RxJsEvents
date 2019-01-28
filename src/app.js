import $ from "jquery";
import Rx from "rxjs/Rx";

console.log('Welcome to Rxjs Observables');

const output = $("#output");
output.append('Welcome to Rxjs Observables ( this text is output using Jquery<br/><br/>');

// ** Example One ** \\
// const btn = $("#btn");
// const btnStream$ = Rx.Observable.fromEvent(btn, "click");

// btnStream$.subscribe(
//   x => {
//     console.log(x);
//     output.append(x.currentTarget.value);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log(complete);
//   }
// );

// ** Example Two ** \\
// const input = $("#input");
// const keyStream$ = Rx.Observable.fromEvent(input, "keyup");

// keyStream$.subscribe(
//   x => {
//     console.log(x.currentTarget.value);
//     output.append(x.currentTarget.value);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log(complete);
//   }
// );

// ** Example Three ** \\
// const mouseStream$ = Rx.Observable.fromEvent(document, "mousemove");

// mouseStream$.subscribe(
//   x => {
//     console.log(x);
//     output.html("<h1>X: " + x.clientX + " Y: " + x.clientY + "</h1>");
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log(complete);
//   }
// );

// ** Example Four ** \\
// const numbers = [33,44,55,66,77];
// const numbersStream$ = Rx.Observable.from(numbers);

// // Note that completed run because we reach the end of our stream
// // but in the others it did not.
// numbersStream$.subscribe(
//     x => {
//       console.log(x);
//       output.append('<h1>' + x + '</h1>');
//     },
//     err => {
//       console.log(err);
//     },
//     complete => {
//       console.log('Completed');
//       output.append('<h1>Completed</h1>');
//     }
//   );