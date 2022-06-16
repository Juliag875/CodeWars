This pattern uses objects or sets to collect values /frequences of values. This can often avoid the need for nested loops or O(N^2) operations with arrays / strings.

Idea behind FrequencyCounter - Use an object to construct profile, a way of breaking down contents of arr or str (sort of linear structure) and then you can quickly compare that breakdown to how another obj looks that was constructed from arr or str. 

2 arrs-> break down into objects -> compare those objects.

Excercise - Frequency Counter - sameFrequency
Write a function which takes two positive numbers as input, find out is the two numbers have same frequency of digits. Your solution MUST have TIME : O(n)