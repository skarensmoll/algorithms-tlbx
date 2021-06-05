# Uses python3
import sys

def gcd(a, b):

    reminder = a % b

    if reminder == 0 :
        return b

    return gcd(b, reminder)

def lcm_naive(a, b):
    for l in range(1, a*b + 1):
        if l % a == 0 and l % b == 0:
            return l

    return a*b


def lcm(a, b):
    return int(a * b / gcd(a, b))

if __name__ == '__main__':
    input = input()
    a, b = map(int, input.split())

    first = min(a, b)
    second = max(a, b)
    print(lcm(first, second))
    print(lcm_naive(first, second))

