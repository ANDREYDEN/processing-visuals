from Circle import Circle

W = 900
num = 20
dst = 25
circles = []

def setup():
    size(900, 900)
    global circles
    circles.append(Circle(W/2, W/2, W, None, 0.2))
    for i in range(1, num):
        circles.append(Circle(W/2, W/2 + dst*i, 
                              W - dst*2*i, circles[i-1], 
                              circles[i-1].vel + 0.1))
    
def draw():
    background(0)
    noFill()
    stroke(255)
    for c in circles:
        c.move()
        c.show()
