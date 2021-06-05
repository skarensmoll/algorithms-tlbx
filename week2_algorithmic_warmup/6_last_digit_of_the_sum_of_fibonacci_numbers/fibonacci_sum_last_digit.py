# Uses python3
import sys

def fibonacci_sum_naive(n):
    if n <= 1:
        return n

    previous = 0
    current  = 1
    sum      = 1

    for _ in range(n - 1):
        previous, current = current, previous + current
        sum += current

    return sum % 10


def fibonacci_last_digit_sum(n):
    sum = 1
    previous = 0
    current = 1

    for _ in range(2, n + 1):
        previous, current = current, (previous + current) % 10
        sum = (sum + current) % 10

    return sum

if __name__ == '__main__':
    n = int(input())
    print(fibonacci_last_digit_sum(n))
