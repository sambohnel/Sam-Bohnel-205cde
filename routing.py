from flask import Flask, make_response, abort, redirect, render_template 
import os

app = Flask(__name__);

@app.route('/')
def index():
    return render_template("HomePage.html")
    
@app.route('/90spage')
def ninetyspage():
    return render_template("90spage.html")
    
@app.route('/00s')
def twos():
    return render_template("00s.html")
    
@app.route('/10s')
def tens():
    return render_template("10s.html")
    
@app.route('/CL')
def CL():
    return render_template("CL.html")

@app.route('/WC')
def WC():
    return render_template("WC.html")
    
@app.route('/EURO')
def EURO():
    return render_template("EURO.html")
    
#Run the application
if __name__ == '__main__':
    app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT',8080)))
    
    