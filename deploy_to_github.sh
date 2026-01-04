#!/bin/bash
git add .
git commit -m "Fix deployment: Ensure adapter is installed $(date)" || echo "Nothing to commit"
git push origin main --force
