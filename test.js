/**
 * @Author zlx
 * @Date 2018/4/25 上午11:42
 */

// var a = {name: '123', age: 19};
//
// Object.defineProperty(a, 'sex', {
//     get() {
//         return this.sex;
//     },
//     set(new_val) {
//         console.log('name被更新了，从'+this.sex+'变成'+ new_val);
//         this.sex = new_val;
//     }
// });
//
// a.sex = '456';


var lost = {
    loc : "Island"
};
Object.defineProperty(lost, "location", {
    get : function () {
        return this.loc;
    },
    set : function (val) {
        console.log(val)
        this.loc = val;
    }
});
lost.location = "Another island";
console.log(lost)