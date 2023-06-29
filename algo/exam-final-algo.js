'use strict';

import { log } from 'console'

log("EXO 1 :");
// Écrivez une fonction qui prend deux nombres en argument
// et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
const exo1 = (n1, n2) => {
  return (n1 > n2)
}

log(exo1(7, 9), exo1(5, 2)) // false, true

log('EXO 2 :')
// Implémentez une fonction pour inverser une chaîne de caractères.
// Vous ne devez pas utiliser la méthode reverse
const exo2 = (str) => {
  let res = [];

  for (let i = str.length; i >= 0; i--) {
    res.push(str[i])
  }

  return res.join('')
}

log(exo2('test'), exo2('examen')) // tset, nemaxe

log('EXO 3 :')
// Un palindrome est un mot qui se lit dans les deux sens ("kayak")
// Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.
const exo3 = (str) => {
  const reverseStr = exo2(str);

  if (reverseStr === str) {
    return true
  } else return false
}

log(exo3('kayak'), exo3('developpeur')) // true, false

log('EXO 4 :')
//Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
const exo4 = (nmb) => {
  let res = nmb;

  if (typeof nmb === 'string') {
    nmb = parseInt(nmb)
  } else if (typeof nmb !== "number") {
    return console.error('invalid argument type')
  }

  for (let i = nmb - 1; i > 0; i--) {
    res *= i
  }

  return res
}

log(exo4(10), exo4(16)) // 3628800, 20922789888000

log('EXO 5 :')
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
const exo5 = (nmb) => {
  const primary = 2

  if (typeof nmb === 'string') {
    nmb = parseInt(nmb)
  } else if (typeof nmb !== "number") {
    return console.error('invalid argument type')
  }

  if (primary === nmb) {
    return true
  } else if (nmb % primary !== 0 && nmb % nmb === 0 && nmb % 1 === 0) {
    return true
  } else return false

}

log(exo5(4), exo5(101)) //false, true

log('EXO 6 :')
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle
const exo6 = (arr) => {
  return Math.max(...arr)
}

log(exo6([1, 2, 3, 4, 9, 3, 6, 2]), exo6([2, 5, 10, 35, 235, 14])) // 9, 235

log('EXO 7 :')
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
const exo7 = (str, str1) => {
  let flag = true;

  if (typeof str !== 'string' && typeof str1 !== 'string') {
    return console.error('invalid argument type')
  } else {
    str = str.toLowerCase()
    str1 = str1.toLowerCase()

    for (const l of str) {
      if (!str1.includes(l)) {
        flag = false
      }

      if (!flag) {
        return flag
      }
    }

    if (flag === true) {
      return flag
    }
  }

}

log(exo7("test", "second"), exo7('dev', 'dev')); // false, true

log('EXO 8 :')
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
const exo8 = (str) => {
  let tmp = [];

  for (const l of str) {
    if (tmp.includes(l)) {
      return false
    } else {
      tmp.push(l)
    }
  }

  return true
}

log(exo8('test'), exo8('algo')) // false, true

log('EXO 9 :')
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.
const exo9 = (arr) => {

  if (!Array.isArray(arr)) {
    return console.error('invalid argument type')
  }

  let higher = exo6(arr) // recupérer l'élément le plus grand du tableau
  let secondHigher = 0;

  for (const n of arr) {
    if (n > secondHigher && n <= higher) {
      secondHigher = n
    }
  }

  return secondHigher
}

log(exo9([2, 4, 5, 7, 4, 7]), exo9([1, 9, 5, 34, 7]))

log('EXO 10 :')
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
const exo10 = (arr) => {
  if (!Array.isArray(arr)) {
    return console.error('invalid argument type')
  }

  const oddNumber = [];
  let res = 0;

  for (const n of arr) {
    if (typeof n !== "number") {
      return console.error('invalid array value type')
    } else if (n % 2 === 0 && n !== 0) {
      oddNumber.push(n)
    }
  }

  oddNumber.forEach(n => {
    res += n
  })

  return res
}

log(exo10([15, 12, 2, 4, 5, 7]), exo10([10, 3, 6, 4, 0])) // 18, 20

log("EXO 11 :")
// Créez une fonction pour inverser l'ordre des mots dans une phrase.
// Vous pouvez utliser les méthode disponible dans les prototypes String et Array
const exo11 = (str) => {
  const splitStrArr = str.split(" ");

  splitStrArr.reverse();
  
  return splitStrArr.join(" ")
}

log(exo11("Examen de fin d'année"), exo11('Je code des algos')) // d'année fin de Examen, algos des code Je

log('EXO 12 :')
// Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
const exo12 = (arr) => {
  if (!Array.isArray(arr)) {
    return console.error('invalid argument type')
  }

  const res = [];

  arr.filter(i => {
    if (!res.includes(i)) {
      res.push(i)
    }
  })

  return res
}

log(exo12([1, 3, 3, 5]), exo12([5, 6, 3, 7, 4, 5, 2])); // [ 1, 3, 5], [ 5, 6, 3, 7, 4, 2 ]

log('EXO 13 :')
// Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.
const exo13 = (str) => {
  const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
  let res = 0;

  if (typeof str !== "string") {
    return console.error('invalid argument type')
  }

  for (const l of str) {
    if (voyelles.includes(l)) {
      res++;
    }
  }

  return res
}

log(exo13('Bonjour'), exo13('developpeur')) // 3, 5

log('EXO 14 :')
// Implémentez une fonction qui permet de trouver le plus petit nombre
// d'un tableau à 2 dimensions passé en argument
const exo14 = (arrays) => {
  if (!Array.isArray(arrays)) {
    return console.error('invalid argument type')
  }

  let plusPetit;

  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      return console.error('invalid array value type')
    }

    for (const n of arr) {
      if(typeof n !== "number") {
        return console.error('invalid sub-array value type')
      }

      if (!plusPetit) {
        plusPetit = n
      }

      if (n < plusPetit) {
        plusPetit = n
      }

    }
  }

  return plusPetit
}

log(exo14([[10, 3, 2, 4, 6], [15, 35, 1, 6, 4]]), exo14([[134, 35, 46, 35, 6, 6], [356, 46, 35, 6]])) // 1, 6

log("EXO 15 :")
// Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
// dans un tableau de nombre entier (deuxieme argument).
const exo15 = (number, arr) => {
  if (typeof number !== 'number' && !Array.isArray(arr)) {
    return console.error('invalid argument type')
  }

  const res = [];

  for (const i in arr) {
    if (typeof arr[i] !== typeof number) {
      return console.error('invalid array value type')
    }
    if (arr[i] === number) {
      res.push(i)
    }
  }

  return res
}

log(exo15(3, [3, 5, 7, 3, 5, 2]), exo15(1, [1, 6, 1, 3, 5, 1])) // [ '0', '3' ], [ '0', '2', '5' ]

log('EXO 16 :')
// Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.
const exo16 = (numbers) => {

  if (typeof numbers !== 'number') {
    return console.error('invalid argument type')
  }

  let res = 0;

  numbers.toString().split('').forEach(i => res++)

  return res
}

log(exo16(1040502), exo16(2505259295))