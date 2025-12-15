import os
from datetime import datetime
from flask import Flask, render_template, request, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configuration
app.secret_key = os.environ.get('SECRET_KEY', 'default_dev_secret_key')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///site.db')
if app.config['SQLALCHEMY_DATABASE_URI'].startswith("postgres://"):
    app.config['SQLALCHEMY_DATABASE_URI'] = app.config['SQLALCHEMY_DATABASE_URI'].replace("postgres://", "postgresql://", 1)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- Models ---
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

# --- Database Initialization ---
def init_db():
    """Initializes the database with default tour categories if they don't exist."""
    with app.app_context():
        db.create_all()
        
        # Check if tours already exist to avoid duplicates
        if not Tour.query.first():
            initial_tours = [
                Tour(category_id='honeymoon', name='Honeymoon Tours', image='cat_honeymoon.png'),
                Tour(category_id='leisure', name='Leisure Tours', image='hero_switzerland.png'),
                Tour(category_id='adventure', name='Adventure Tours', image='cat_adventure.png'),
                Tour(category_id='pilgrimage', name='Pilgrimage / Spiritual Tours', image='cat_pilgrimage.png'),
                Tour(category_id='cultural', name='Cultural & Heritage Tours', image='cat_culture.png'),
                Tour(category_id='wildlife', name='Wildlife & Nature Tours', image='cat_wildlife.png'),
                Tour(category_id='beach', name='Beach Tours', image='cat_beach.png'),
                Tour(category_id='ayurveda', name='Ayurveda & Wellness Tours', image='cat_ayurveda.png'),
                Tour(category_id='rural', name='Rural & Village Tourism', image='cat_rural.png'),
                Tour(category_id='food', name='Food & Culinary Tours', image='cat_food.png'),
                Tour(category_id='luxury', name='Luxury Tours', image='cat_luxury.png'),
                Tour(category_id='festival', name='Festival & Event Tours', image='cat_festival.png'),
                Tour(category_id='educational', name='Educational / Industrial Tours', image='cat_education.png'),
                Tour(category_id='corporate', name='Corporate & MICE Tours', image='cat_corporate.png'),
                Tour(category_id='roadtrip', name='Road Trip / Bike Tours', image='hero_mountain.png'),
                Tour(category_id='family', name='Family Tours', image='family.png'),
                Tour(category_id='college', name='College Tours', image='cat_education.png'),
                Tour(category_id='school', name='School Tours', image='cat_education.png'),
                Tour(category_id='international', name='International Tours', image='cat_adventure.png'),
                Tour(category_id='domestic', name='Domestic Tours', image='cat_culture.png')
            ]
            
            # Robustly add tours
            for tour in initial_tours:
                existing = Tour.query.filter_by(category_id=tour.category_id).first()
                if not existing:
                    db.session.add(tour)
            
            try:
                db.session.commit()
                print("Database initialized with default tour categories.")
            except Exception as e:
                db.session.rollback()
                print(f"Error initializing database: {e}")

# --- Routes ---
@app.route('/')
def home():
    return render_template('index.html', title='Home')

@app.route('/about')
def about():
    return render_template('about.html', title='About Us')

@app.route('/tours')
def tours():
    # Ensure DB is initialized if using SQLite and file is missing (failsafe)
    if app.config['SQLALCHEMY_DATABASE_URI'].startswith('sqlite'):
        if not os.path.exists('site.db'):
             init_db()

    try:
        tour_categories = Tour.query.all()
    except Exception:
        # Fallback if table doesn't exist
        init_db()
        tour_categories = Tour.query.all()
        
    return render_template('tours.html', title='Tour Categories', categories=tour_categories)

@app.route('/enquiry', methods=['GET', 'POST'])
def enquiry():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        tour_type = request.form.get('tour_type')
        message = request.form.get('message')
        
        new_enquiry = Enquiry(name=name, email=email, phone=phone, tour_type=tour_type, message=message)
        try:
            db.session.add(new_enquiry)
            db.session.commit()
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

# Auto-run db initialization for development convenience
# For production workers (gunicorn), this might strictly be done via a separate command, 
# but calling it here ensures it runs if executed directly.
if __name__ == '__main__':
    # Initialize DB if it doesn't exist
    if not os.path.exists('site.db'):
        init_db()
    
    app.run(debug=True)
else:
    # If running via gunicorn, we can attempt to ensure tables exist
    # This is a bit of a hack for simple deployments, proper migrations (Flask-Migrate) are better.
    # But for this scope, this works.
    with app.app_context():
        db.create_all()
        # Optional: init data if empty
        if not Tour.query.first():
             init_db()

