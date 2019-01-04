from Spring import Spring

W = 800
s = Spring(0, 50)

def setup():
    size(800, 800)
    stroke(255)
    noFill()
    
def draw():
    background(0)
    s.show()
    s.change()
