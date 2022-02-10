1. GCD, HCF, LCM

# Euclidean Algorithm

-  GCD(a,b) = GCD(b, a % b) => Recursive Case
   GCD(a,0) => a => Base Case

-  LCM(a,b) = (a x b) / GCD(a,b)

=> b === 0 ? a : GCD(b, a % b)

2. Trailing Zeroes

-  TZ(n!) = Floor(n/5^1) + Floor(n/5^2) + Floor(n/5^3) ......
   Till Floor(n/5^i) !== 0

3. Factorial

-  fact = fact x i

-  n x factorial(n-1)
