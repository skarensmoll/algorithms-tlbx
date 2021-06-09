# Uses python3
import sys
from collections import namedtuple

Segment = namedtuple('Segment', 'start end')

def sortFromSmallestToLargest(segments):
    sizes = []
    for s in segments:
        size = s.end - s.start
        sizes.append(size)

    print(sizes)
    return sorted(zip(segments, sizes), key=lambda x: x[1])

def optimal_points(segments):
    segments = sorted(segments, key=lambda x: x[1])
    #write your code here

    points = []
    pivot = 0

    for s in segments:
        print(s.start, s.end)
        if not (pivot <= s.end and pivot >= s.start) :
            points.append(s.end)
            pivot = s.end

    return points

if __name__ == '__main__':
    #input = "4 4 7 1 3 2 5 5 6"
    input = "3 1 3 2 5 3 6"

    n, *data = map(int, input.split())
    segments = list(map(lambda x: Segment(x[0], x[1]), zip(data[::2], data[1::2])))
    points = optimal_points(segments)
    print(len(points))
    print(*points)
