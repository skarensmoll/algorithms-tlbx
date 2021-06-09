# python3
import sys


def compute_min_refills(distance, tank, stops):
    ls = 0
    refill = 0
    stops.append(distance)
    nStops = len(stops)

    for x in range(nStops):
        rtk = tank - (stops[x] - ls)

        if(rtk < 0):
            ls = stops[x-1]
            refill += 1
            #checking if the refill worked
            rtk = tank - (stops[x] - ls)
            if rtk < 0:
                refill = -1
                break;


    return refill


if __name__ == '__main__':
    d, m, _, *stops = map(int, input().split())
    print(compute_min_refills(d, m, stops))
