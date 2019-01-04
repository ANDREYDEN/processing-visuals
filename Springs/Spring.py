W = 800

class Spring:
    def __init__(self, k, b):
        self.b = b
        self.k = k
        self.dir = 1
        
    def f(self, x):
        return self.k*sin(50*x) + self.b
    
    def rot(self, x, angle):
        X = x*cos(angle) - self.f(x)*sin(angle)
        Y = x*sin(angle) + self.f(x)*cos(angle)
        return (X, Y)
        
    def change(self):
        if abs(self.k) > 10:
            self.dir *= -1 
        self.k += 0.5*self.dir
        
    def show(self):
        beginShape()
        for x in range(W):
            p = self.rot(x, PI/6)
            vertex(p[0], p[1])
        endShape()
