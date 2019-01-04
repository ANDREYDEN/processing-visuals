num = 50
dens = 50
points = []
polygon = ((100, 500), (500, 500), (300, 500 - sqrt(120000)))
time = 0

def f(P1, P2, x):
    x1, y1 = P1
    x2, y2 = P2
    return x*(y1-y2)/(x1-x2) + (x1*y2-x2*y1)/(x1-x2)

def genPointsOnLine(P1, P2, n):
    pts = []
    delta = (P2[0] - P1[0])//n
    for x in range(P1[0], P2[0], delta):
        pts.append((x, f(P1, P2, x)))
    return pts

def genPointsOnPoly(pol):
    res = []
    for i in range(-1, len(pol)-1):
        res += genPointsOnLine(pol[i], pol[i+1], dens)
    return res

def setup():
    size(600, 600)
    global points
    points = genPointsOnPoly(polygon)
    stroke(255)
    
def draw():
    global time
    time = (time+1)%len(points)
    background(100)
    for i in range(num):
        line(points[time-i][0], points[time-i][1],\
             points[time-i-num][0], points[time-i-num][1])
        
