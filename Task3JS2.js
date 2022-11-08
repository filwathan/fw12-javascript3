// #region nomer 1

// array.prototype
let arrayNomerSatu = ["lest", "go", "!!!"];
// forEach
// adalah sebuah fungsi ato method untuk mengulang suatu array sesuai banyaknya data pada array tersebut.
// data dapat di inisialkan dan di panggil.
// array.forEach(inisial => { perintah });
arrayNomerSatu.forEach(a => console.log(a));

// filter
// hampir mirip dengan foreach akan tetapi pada filter mengembalikan sebuah array sesuai dengan perintahnya
console.log( arrayNomerSatu.filter(a => a.length > 3) );


// push
// digunakan untuk menambahkan array pada index paling belakang
arrayNomerSatu.push("Come On");
console.log(arrayNomerSatu);


// pop
// digunakan untuk membuang index paling akhir pada array
arrayNomerSatu.pop();
console.log(arrayNomerSatu);

// indexOf
// mencari index dengan dalam array dengan value yang sama dengan return nilai
console.log( arrayNomerSatu.indexOf("go") );

// string.prototype
let stringNomerSatu = "Lest Go"
let stringTambahan = "Come One"
// concat
// meanggabungkan beberapa item menjadi string baru
console.log(stringNomerSatu.concat(" ", stringTambahan));

// includes
// mencari string yang memiliki character yang di inginkan dengan mengembalikan nilai bolean
console.log(stringNomerSatu.includes("go"));

// toLowerCase
// mengubah string menjadi huruf kecil semua
console.log(stringNomerSatu.toLowerCase());

// toUpperCase
// mengubah string menjadi huruf besar semua
console.log(stringNomerSatu.toUpperCase());

// slice
// memilih character tertentu dalam string dan mengembalikan sebagai string baru
console.log(stringNomerSatu.slice(0,4));


//#endregion

//#region nomer 2
const searchName = function(lertters, manyitems, cb) {
    const names = [
    'Abagail','Alexandra','Alison', 'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn', 'Deirde', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
    ];
    let result = []
    let penampung = []
    
    names.forEach(item => penampung.push(item.toLowerCase()))    
    penampung.filter(item => {
        if (item.includes(lertters)) {
            result.push(item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase() )
        }
    } )

    if (result.length > manyitems){
        for ( let index = result.length; index > manyitems; index--){
            result.pop();
        }
    }    
    cb(result);
}

const callback = function (output) {
    console.log(output);
}
//#endregion

//#region nomer 3

const seleksiNilai = function(firstValue, lastValue, arrayValue){
    let result = [];
    if (firstValue >= lastValue ) {
        return console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
    else {
        if (arrayValue.length < 5) {
            return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        }
        else{
            result = arrayValue.filter(data => (data > firstValue && data < lastValue) )
            if (result.length == 0){
                return console.log("Nilai tidak ditemukan");
            }
            else{
                return console.log(result);
            }   
        }
    }
}

//#endregion

//#region nomer 4
let data = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// 4 a
let myBio = {...data,name: "Wizra Raudha Filwathan", email: "filwathan@gmail.com", hobbies: "playing games"}
console.log(myBio)

// 4 b

let {street, city} = data.address;
console.log(street)
console.log(city)

//#endregion