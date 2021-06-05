# Uses python3
def calc_fib(n):
    fibonacci = [0, 1]

    for i in range(2, n):
        fibonacci.append(fibonacci[i-1] + fibonacci[i-2])

    return fibonacci


n = int(input())
print(calc_fib(n))
