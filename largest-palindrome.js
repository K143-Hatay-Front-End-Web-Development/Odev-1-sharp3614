//A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// -----> Find the largest palindrome made from the product of two 3-digit numbers.
let max = 0, product, number1, number2;
let i = 100;
while (i < 1000) {
    let j = 100;
    while (j < 1000) {
        product = i * j; // uc basamaklı 2 sayiyi burada carpiyoruz
        if (product > max) { // elde edilen sayi en buyuk sayidan buyukse asagidaki isleme gecmesi saglaniyor
            if (product.toString().split('').reverse().join('') == product.toString()) {
                //yukarida sirasiyla yapilan islemler 
                // - ilk once elde edilen sayiyi string bir veri türüne çeviriyoruz
                // - string degeri parçalayıp tersten siraliyoruz
                // - parcalamis oldugumuz veriyi join yardimiyla birlestirip tersten siralamadan onceki degerle karsilastiriyoruz
                // - sayi palindromic sayi ise max degerine yeni en buyuk palindromic sayiyi atiyoruz
                max = product 
                number1 = i
                number2 = j
            }
        }
        j++;
    }
    i++;
}
console.log(`Largest palindrome ----> ${number1} x ${number2} = ${max}`)