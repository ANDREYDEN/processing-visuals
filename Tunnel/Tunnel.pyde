from __future__ import division

w = 1000
cnt = 0.25

def setup():
    size(1000, 1000)
    noStroke()
    
def draw():
    background(0)
    translate(w/2, w/2)
    global cnt
    prev_r = cnt
    d = prev_r/sin(PI/12)
    for layer in range(20):
        cur_r = prev_r*(d+prev_r)/(d-prev_r)
        d += prev_r + cur_r
        #println(cur_r)
        for i in range(12):
            a = i*PI/6
            ellipse(d*cos(a), d*sin(a), d/2, d/2)
        prev_r = cur_r
    #noLoop()
    if cnt > 0.42459909177:
        cnt = 0.25
    else:
        cnt += 0.025
        
