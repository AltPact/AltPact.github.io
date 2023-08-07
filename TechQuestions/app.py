from flask import Flask, request

app = Flask(__name__)

# Default page load from the index.html file
@app.route('/')
def index():
    return open('index.html').read()

# Feedback page to show the information has be recieved correctly
@app.route('/submit', methods=['POST'])
def submit():
    field_value = request.form.get('field')
    # Prints out submitted information
    print("Field value:", field_value)
    return "Form submitted successfully!"

# Runs on executions of the file (which will lead to opening up the default page at '/')
if __name__ == '__main__':
    app.run()