# GoTenna Photo Viewer Application
A gallery to view urls from a csv file.
CSV file can be downloaded from https://pastebin.com/BmA8B0tY

# 0. Clone repository
```
git clone https://github.com/dfan001/gotenna-gallery.git
```

# 1. Set environment variables
Replace variables in env.example and rename it .env
```bash
mv env.example .env
```

# 2. Install Dependencies
Recommended to create a virtual environment to handle dependencies for Python
```
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
```

Install dependencies for React
```
npm install
```

# 3. Run backend server
```
python manage.py runserver
```

# 4. Open another terminal to start frontend
```
npm start
```
A browser window will open up with the React application at http://localhost:3000.

# Quirks
1. On large screen images will not be able to load when scrolling to bottom as a scrollbar wouldn't appear on those with the current styles. So that onscroll handler will not execute.