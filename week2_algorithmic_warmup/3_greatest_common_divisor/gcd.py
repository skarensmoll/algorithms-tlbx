# Uses python3
import sys

def gcd_naive(a, b):
    current_gcd = 1
    for d in range(2, min(a, b) + 1):
        print(d)
        if a % d == 0 and b % d == 0:
            if d > current_gcd:
                current_gcd = d

    return current_gcd

def gcd(a, b):
    remainder = a % b

    if remainder == 0:
       return b
    else:
       return gcd(b, remainder)


if __name__ == "__main__":
    input = input()
    a, b = map(int, input.split())
    first = min(a,b)
    second = max(a,b)

    print(gcd(first, second))
