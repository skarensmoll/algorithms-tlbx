# Uses python3
import sys

def fibonacci_partial_sum_naive(m, to):
    sum = 0

    current = 0
    next  = 1

    for i in range(to + 1):
        if i >= m:
            sum += current

        current, next = next, current + next

    return sum % 10

def fibonacci_partial_sum(m, to):
    previous = 0
    current = 1
    sum = 0

    for i in range(2, to + 1):
        previous, current = current, (previous + current) % 10

        if i >= m:
            sum = (sum + current) % 10

    return sum

if __name__ == '__main__':
    input = input();
    n, m = map(int, input.split())
    print(fibonacci_partial_sum_naive(n, m))
    print(fibonacci_partial_sum(n, m))
