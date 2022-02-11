# Data-Structures-and-Algorithms-using-JavaScript

This repository contains DSA using Javascript along with some mixed level problems.

## Tools Used

<p align="left">
<img height="140" width="140" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png">
<img height="140" width="140" src="https://logodix.com/logo/470309.png">
<img height="140" width="140" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">
<img height="140" width="140" src="https://code.visualstudio.com/assets/apple-touch-icon.png">
<img height="140" width="200" src="https://miro.medium.com/max/1400/1*sMryEXZVPKFjGNcfSzE8Mw.jpeg">
</p>

-  Library: None
-  Scripting: Javascript
-  Front-End: HTML, CSS
-  Runtime Environment: NodeJS
-  Integrated Development Environment: VSCode

#

#

# DATA STRUCTURES - ALGORITHMS

#

## 1. GCD, HCF, LCM

> ### Euclidean Algorithm

-  GCD(a, b) = GCD(b, a % b) => Recursive Case <br />
   GCD(a, 0) => a => Base Case

-  LCM(a, b) = (a x b) / GCD(a, b)

-  return b === 0 ? a : GCD(b, a % b)

#

#

## 2. Trailing Zeroes

-  TZ(n!) = Floor(n/5^1) + Floor(n/5^2) + Floor(n/5^3) ......<br />
   Till Floor(n/5^i) !== 0

#

#

## 3. Factorial

-  fact = fact x i

-  n x factorial(n-1)

#

#

## 4. Prime Numbers

> ### Naive's Algorithm

-  fixing a number & then iterating over a range of numbers or letters.
   usually 2-3 nested loops.
   usually used for string pattern matching, array sum, etc.
   Inefficient Approach.

> ### Sieve Of Eratosthenes Algorithm

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

#

#

More to Come ......

#

#

## Follow me on:

> [Dev Community](https://dev.to/ayushkanduri)

> [Twitter](https://twitter.com/ayush_codes)

> [LinkedIn](https://www.linkedin.com/in/ayushkanduri/)

> [YouTube](https://www.youtube.com/channel/UC6c1ajC_2jF7wQp7Y13t2bg)

I hope you like the project. Thanks for reading :)
