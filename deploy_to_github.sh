#!/bin/bash
# Ensure valid git repo
git add .
git commit -m "Deploy updates: Add Netlify config and sync background images" || echo "Nothing to commit"

# Ensure remote 'origin' exists and points to the correct URL
if ! git remote | grep -q "^origin$"; then
    git remote add origin git@github.com:guyronhuji/YASite.git
else
    git remote set-url origin git@github.com:guyronhuji/YASite.git
fi

git push -u origin main --force
