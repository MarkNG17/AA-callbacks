/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function (sentence, obj)
{
    let words = sentence.split(' ');
    let objKeys = Object.keys(obj);

    for (let i = 0; i < words.length; i++)
    {
        for (let j = 0; j < objKeys.length; j++)
        {

            if (words[i].endsWith(objKeys[j]))
            {

                words[i] = obj[objKeys[j]](words[i]);
            }
        }
    }

    let newSentence = words.join(' ');

    return newSentence;
};

let cipher1 = {
    ly: function (word)
    {
        return word.slice(0, -1) + 'ee';
    },
    ize: function (word)
    {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
