# Uses python3
import sys

def get_fibonacci_huge_naive(n, m):
    if n <= 1:
        return n

    previous = 0
    current  = 1

    for _ in range(n - 1):
        previous, current = current, previous + current

    return current % m

def getFib(n):
    previous = 0
    current = 1

    for _ in range(2, n + 1):
        previous, current = current, previous + current

    return current

def get_pisiano_periodic(n, m):
    period = 0
    current = 1
    previous = 0
    period_found = False

    while not period_found:
        previous, current = current, previous + current

        period = period + 1

        if (previous % m == 0) and (current % m == 1):
            period_found = True

    return period

def get_fibonacci_last_mod(n, m):
    period = get_pisiano_periodic(n, m)
    reminder = n % period
    fib = getFib(reminder)

    return fib % m

if __name__ == '__main__':
    input = input();
    n, m = map(int, input.split())
    print(get_fibonacci_last_mod(n, m))
