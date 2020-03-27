# GoTenna Photo Viewer Applica)on
A gallery to view urls from a csv file.

# 0. Clone repository
```
git clone
```

# 1. Set environment variables
Replace variables in env.example and rename it .env
```bash
mv env.example .env
```

# 2. Install Dependencies
Recommended to create a virtual environment to handle dependencies for python
```
virtualenv -p python3 env
source env/bin/activate
pip install -r requirements.txt

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