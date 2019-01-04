class Circle:
    def __init__(self, x, y, r, parent, vel=1):
        self.x, self.y, self.r = x, y, r
        self.parent = parent
        self.vel = vel
        self.dir = 1
        
    def move(self):
        if self.parent:
            if abs(self.parent.y - self.y) + self.r + 20 > self.parent.r:
                self.dir = 1 if self.parent.y - self.y > 0 else -1
            self.y += self.dir*self.vel
        
    def show(self):
        ellipse(self.x, self.y, self.r, self.r)
