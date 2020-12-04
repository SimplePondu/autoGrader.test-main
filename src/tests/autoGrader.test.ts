import {autoGrader} from '../helpers/autoGrader';
import { winner } from '../helpers/winner';



describe('grade level function', ()=>{
    it('should check more than 100 points', ()=>{
        const summerize = autoGrader(105);
        expect (summerize).toEqual('Invalid grade')
    });
    it('should check [90,99] points', ()=>{
        const summerize = autoGrader(99);
        expect (summerize).toEqual('A')
    });
    it('should check [80,89] points', ()=>{
        const summerize = autoGrader(85.4);
        expect (summerize).toEqual('B')
    });
    it('should check [70,79] points', ()=>{
        const summerize = autoGrader(70);
        expect (summerize).toEqual('C')
    });
    it('should check [60,69] points', ()=>{
        const summerize = autoGrader(60);
        expect (summerize).toEqual('D')
    });
    it('should check [0,59] points', ()=>{
        const summerize = autoGrader(5);
        expect (summerize).toEqual('F')
    });
    it('should check that negative numbers are not included', ()=>{
        const summerize = autoGrader(-59);
        expect (summerize).toEqual('Invalid grade')
    });
    it('should check 100', ()=>{
        const summerize = autoGrader(100);
        expect (winner(100)).toEqual('Respect, bro! You get 10000 dollars')
    });
   })