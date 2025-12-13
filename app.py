from flask import Flask, render_template, request, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)
app.secret_key = 'lucky_tours_secret_key'  # Change this to a random secret key for security
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Models
class Tour(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.String(50), nullable=False, unique=True)
    name = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"Tour('{self.name}', '{self.image}')"

class Enquiry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    tour_type = db.Column(db.String(50), nullable=False)
    message = db.Column(db.Text, nullable=True)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __repr__(self):
        return f"Enquiry('{self.name}', '{self.email}', '{self.tour_type}')"

# Database Initialization
def init_db():
    with app.app_context():
        db.create_all()
        # Populate initial tour data if empty
        if not Tour.query.first():
            initial_tours = [
                Tour(category_id='honeymoon', name='Honeymoon Tours', image='honeymoon.png'),
                Tour(category_id='family', name='Family Tours', image='family.png'),
                Tour(category_id='college', name='College Tours', image='college.png'),
                Tour(category_id='school', name='School Tours', image='school.png'),
                Tour(category_id='international', name='International Tours', image='international.png'),
                Tour(category_id='domestic', name='Domestic Tours', image='domestic.png')
            ]
            db.session.bulk_save_objects(initial_tours)
            db.session.commit()
            print("Database initialized with default tour categories.")

# Routes
@app.route('/')
def home():
    return render_template('index.html', title='Home')

@app.route('/about')
def about():
    return render_template('about.html', title='About Us')

@app.route('/tours')
def tours():
    # Fetch tours from database
    tour_categories = Tour.query.all()
    # If for some reason DB is empty (shouldn't be due to init_db), fallback handling could go here
    return render_template('tours.html', title='Tour Categories', categories=tour_categories)

@app.route('/enquiry', methods=['GET', 'POST'])
def enquiry():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        tour_type = request.form.get('tour_type')
        message = request.form.get('message')
        
        # Save to Database
        new_enquiry = Enquiry(name=name, email=email, phone=phone, tour_type=tour_type, message=message)
        try:
            db.session.add(new_enquiry)
            db.session.commit()
            print(f"New Enquiry Saved: {name}, {tour_type}")
            flash('Your enquiry has been submitted successfully! We will contact you soon.', 'success')
        except Exception as e:
            db.session.rollback()
            print(f"Error saving enquiry: {e}")
            flash('There was an error submitting your enquiry. Please try again.', 'error')
            
        return redirect(url_for('enquiry'))
    
    return render_template('enquiry.html', title='Enquire Now')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact Us')

if __name__ == '__main__':
    if not os.path.exists('site.db'):
        init_db()
    else:
        # Also run init_db to ensure tables exist if file exists but maybe is empty or corrupted
        init_db()
        
    app.run(debug=True)
