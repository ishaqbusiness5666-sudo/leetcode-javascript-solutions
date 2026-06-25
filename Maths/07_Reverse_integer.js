/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let Num = x.toString().split("")
    let Sign = "";
    let Result;

    if (Num[0]=== "-") {
        Sign = Num.shift()
    }
    Num.reverse()
    if ( Number(Num.join("")) > 2147483647) {
        return 0
    }
    if(Sign){
        Num.unshift(Sign)
    }
    Result = Number(Num.join(""))
    return Result;
};

let x = 1534236469
console.log(reverse(x))