// 2 MASALA
// function harBiriniChiqarish(str) {
//   const charMap = new Map();
//   for (let i = 0; i < str.length; i++) {
//     const char = str.charAt(i);
//     if (!charMap.has(char)) {
//       charMap.set(char, [i]);
//     } else {
//       charMap.get(char).push(i);
//     }
//   }
//   return charMap;
// }

// const str = "SALOM DUNYO";
// const result = harBiriniChiqarish(str);
// console.log(result);

// 3 MASALA

// function takrorlanmagan(arr) {
//   if (new Set(arr).size === 1) {
//     return arr[0];
//   } else {
//     return [...new Set(arr)];
//   }
// }
// console.log(takrorlanmagan([1, 2, 3, 4]));

// 4 MASALA

// function nusxalash(arr1, arr2) {
//   const birinchiNusxalash = new Set(arr1);
//   const ikkinchiNusxalash = new Set(arr2);
//   const umumiy = new Set([...birinchiNusxalash, ...ikkinchiNusxalash]);
//   return [...umumiy];
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(nusxalash(array1, array2));

// 5 MASALA

// function tekshirish(str) {
//   const tek1 = str.split(/\s+/);
//   const tek2 = new Map();
//   tek1.forEach((x, index) => {
//     if (!tek2.has(x)) {
//       tek2.set(x, new Set([index]));
//     } else {
//       tek2.get(x).add(index);
//     }
//   });

//   return tek2;
// }
// const sentence = "Lorem ipsum dolor sit ipsum consectetur adipiscing ipsum";
// const result = tekshirish(sentence);
// console.log(result);

// 6 MASALA

// function tekshirish(arr) {
//   return [...new Set(arr)];
// }

// const array = [1, 2, 3, 4, 4, 5, 6, 6, 7];
// const result = tekshirish(array);
// console.log(result);

// 8 MASALA

// function birlashtirish(str1, str2) {
//   const result = str1 + str2;
//   const birinchi = new Set(result);
//   const birlashtirishArray = [...birinchi];
//   const jami = birlashtirishArray.join("");

//   return jami;
// }
// const str1 = "apple";
// const str2 = "olma";
// console.log(birlashtirish(str1, str2));
