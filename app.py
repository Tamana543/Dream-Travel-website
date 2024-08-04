from flask import Flask, render_template, request, redirect, url_for
import yagmail
import logging

app = Flask(__name__)
# configure logging
logging.basicConfig(filename='error.log',level=logging.ERROR, format='%(asctime)s - %(levelname)s - %(message)s')
@app.route("/", methods=['GET', 'POST'])
def add_post():
    # Handle form submission logic
    return redirect(url_for('index'))
def root():
      if request.method == 'POST':
        subscribe = request.form.get("email")
        content = f"**Register Form**\n\nEmail Address: {subscribe}"
        try:
            yag = yagmail.SMTP("onlymail0003@gmail.com", "nwcy zhkl jjac jqgx")
            yag.send("tamanafarzami33@gmail.com", subject="my site comment!", contents=content)
        except Exception as e:
            logging.error(f"Something went wrong and we could not send info: {e}")
        return redirect(url_for('root'))  # Redirect to the root to avoid resubmission on refresh
      return render_template("index.html")
    
    # For GET requests, render the index.html template

if __name__ == "__main__":
    app.run(debug=True)

                                            


# os.system('flask run')      

# if request.method == "GET" :
      #       return
      #       render_template("./index.html")
      # else :
      #       subscribe = request.form["email"]
      #       Content = f"**Register Form**\n\nEmailAddress: {subscribe})"
      #       try : 
      #             yag = yagmail.SMTP("onlymail0003@gmail.com","nwcy zhkl jjac jqgx")
      #             yag.send("tamanafarzami33@gmail.com", subject="my site comment!", Contents= "msg") 
      #       except Exception as e :
      #             import logging
      #       logging.basicConfig(filename="error.log")  
      #       logging.error("Something wet wrong and we could not send info so we ave them" + e) 
