In JavaScript, you have what are called "regular expression literals", which is the /[aeiou]/gi thing. The [aeiou] is known as a "character class" or a "character set", which means "match one of aeiou". The g and i after the closing / are flags that determine how the regular expression behaves. 
g means "global" or "find all matches", and 
i means "case insensitive". 
You then replace all these matches with an empty string '' so that all the occurrences of vowels are removed in the generated string