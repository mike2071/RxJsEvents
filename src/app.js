import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');

console.log("Test", btn)

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
    x  => {
        console.log(x)
    },
    err => {
        console.log(err)
    }, 
    complete => {
        console.log(complete)
    }
)