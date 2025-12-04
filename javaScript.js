//? ======ARIFMETIK OPERATORLAR(ARITHMETIC)=======

//? 1. + qo'shish operatori (addition)
//? 2. - ayirish operatori (subtraction)
//? 3. * ko'paytirish operatori (multiplication)
//? 4. / bo'lish operatori (division)
//? 5. % qoldiq operatori (modulus)
//? 6. ** daraja operatori (exponentiation)

console.log("5" + 3); // 53     chunki  5 string turida. Faqat qo'shishda string turida bo'ladi
console.log(5 + true); // 6     true = 1 
console.log(5 + false); // 5    false = 0
console.log("5" - 3); // 2      ayirishda string number ga aylanadi
console.log("5" * "2"); // 10   ko'paytirishda ham string number ga aylanadi
console.log("10" / 2); // 5     bo'lishda ham string number ga aylanadi
console.log(10 - "2x"); // NaN  2x degan x yani string qatnashib turibdi shuning uchun NaN chiqdi
console.log("5" * "2"); // 10   ko'paytirishda ham string number ga aylanadi
console.log(true * 5); // 5     true 1 ga teng deb olamiz shuning uchun kopaytirilganda 5 chiqdi  
console.log(true % "besh"); // NaN  besh string turida qatnashib turibdi shuning uchun NaN chiqdi
console.log(5 / 0); // Infinity     0 bo'lganda Infinity chiqadi Infinity - cheksizlik degani
console.log(-5 / 0); // -Infinity   -0 bo'lganda -Infinity chiqadi -Infinity - manfiy cheksizlik degani
console.log(10 % 3); // 1       qoldiqni chiqaradi
console.log(-10 % 3); // -1     qoldiqni chiqaradi
console.log(2 ** (3 ** 2)); // 512     3 ning 2-darajasi 9 bo'ladi keyin 2 ning 9-darajasi 512 bo'ladi
console.log(2025 - undefined); // NaN    undefined bilan har qanday amal qilishda NaN chiqadi
console.log(undefined + 5); // NaN       undefined bilan har qanday amal qilishda NaN chiqadi
console.log(null + 5); // 5        null ni qiymati 0 deb olinadi
console.log(null * 5); // 0        null ni qiymati 0 deb olinadi
console.log(5 / null); // Infinity    null ni qiymati 0 deb olinadi shuning uchun 5 ni 0 ga bo'lishda Infinity chiqadi

let a=5;
console.log(a++ + ++a); // 12      a++ va ++a ni qiymati 1 ga teng deb olinadi shuning uchun 5+6=12 chiqadi


//* ==================Assignment Operators (Tayinlash operatorlari)==========>

//? 1. = tayinlash operatori
//? 2. += qo‘shib tayinlash operatori
//? 3. -= ayirib tayinlash operatori
//? 4. *= ko‘paytirib tayinlash operatori
//? 5. /= bo‘lib tayinlash operatori
//? 6. %= qoldiqni saqlab tayinlash operatori
//? 7. **= darajaga ko‘tarib tayinlash operatori

console.log(5 = 4); // Xato chiqadi chunki 4 beshga teng emas
console.log(5 += 3); // 8     5 ga 3 ni qo'shib beradi  
console.log(5 -= 3); // 2     5 dan 3 ni ayirib beradi
console.log(5 *= 3); // 15    5 ni 3 ga ko'paytirib beradi
console.log(5 /= 3); // 5     5 ni 3 ga bo'lib beradi
console.log(5 %= 3); // 2     5 ni 3 ga qoldiqni saqlab beradi
console.log(5 **= 3); // 125   5 ni 3 ga darajaga ko'tarib beradi





console.log(5 != "5"); // false   != teng emas degani lekin 5 va "5" qiymatlari teng deb olinadi shuning uchun false chiqadi 
console.log(5 !== "5"); // true    !== qiymatlari va turlari teng emas degani shuning uchun true chiqadi
console.log(null == undefined); // true    null va undefined qiymatlari teng deb olinadi
console.log(null === undefined); // false   null va undefined qiymatlari va turlari teng emas deb olinadi
console.log(0 == false); // true     0 va false qiymatlari teng deb olinadi
console.log(5 == 4); // false    5 va 4 qiymatlari teng emas 
console.log(5 === 5); // true     5 va 5 qiymatlari va turlari teng deb olinadi
