# Lucky Tours Website

This is the codebase for the Lucky Tours Agency website, built with **Flask** (Python) and vanilla HTML/CSS.

## Prerequisites

- [Python 3.x](https://www.python.org/downloads/) installed on your system.
- `pip` (Python package installer).

## Setup & Installation

1.  **Clone or Download** this repository.
2.  Open a terminal in the project directory.
3.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

## Running the Application

1.  Start the Flask server:
    ```bash
    python app.py
    ```
2.  Open your browser and navigate to:
    `http://127.0.0.1:5000`

## Features

- **Home Page**: Featured tours and hero section.
- **Tours**: Filterable list of tour packages (Honey moon, Family, etc.).
- **Enquiry**: Form to capture user interest, saved to a SQLite database (`site.db`).
- **Contact**: Location details and Google Maps integration.
- **Admin/Database**: 
    - The database `site.db` is automatically created on the first run.
    - `Tour` categories are pre-populated.