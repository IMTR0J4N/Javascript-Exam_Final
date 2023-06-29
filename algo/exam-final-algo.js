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