> ## GCD, HCF, LCM

### Euclidean Algorithm

-  GCD(a, b) = GCD(b, a % b) => Recursive Case <br />
   GCD(a, 0) => a => Base Case

-  LCM(a, b) = (a x b) / GCD(a, b)

-  return b === 0 ? a : GCD(b, a % b)

#

## 2. Trailing Zeroes

-  TZ(n!) = Floor(n/5^1) + Floor(n/5^2) + Floor(n/5^3) ......<br />
   Till Floor(n/5^i) !== 0

#

## 3. Factorial

-  fact = fact x i

-  n x factorial(n-1)

#

## 4. Prime Numbers

### Naive's Algorithm

-  fixing a number & then iterating over a range of numbers or letters.
   usually 2-3 nested loops.
   usually used for string pattern matching, array sum, etc.
   Inefficient Approach.

### Sieve Of Eratosthenes Algorithm

-  1 2 3 4 5 6 7 8 9 10 11 12<br />
   F T T F T F T F F F T F - Boolean Array<br />
   For 2, Starts from second multiple of 2, jumps in multiples of 2, goes till N.<br />
   For 3, Starts from second multiple of 3, jumps in multiples of 3,goes till N.<br />
   For 4, it is already false because of 2.<br />
   For 5, Starts from second multiple of 5, jumps in multiples of 5,goes till N.<br />
   For 6, it is already false because of 2.<br />
   .<br />
   .<br />
   .<br />
   .<br />
   For root of N, .......<br />
   j=2\*i => starts from 2nd multiple of i<br />
   j<=n => goes till n<br />
   j+=i => jumps in multiples of i
