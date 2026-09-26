# How to Add Your Resume

## Option 1: Upload Resume to Public Folder (Recommended for Portfolio)

1. **Place your resume PDF** in the `public` folder:
   - File name: `Soumya_Dubey_Resume.pdf`
   - Path: `public/Soumya_Dubey_Resume.pdf`

2. **Update the Home.js file** to point to your resume:
   ```javascript
   href = "/Soumya_Dubey_Resume.pdf"; // Will work when deployed
   ```

## Option 2: Use Google Drive Link (Easy, No Upload Needed)

1. **Upload your resume to Google Drive**

2. **Get the shareable link:**
   - Right-click file → Share
   - Change to "Anyone with the link can view"
   - Get the sharing link

3. **Update Home.js:**
   ```javascript
   href = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";
   ```

## Option 3: Use Cloud Storage (Dropbox, OneDrive, etc.)

Upload your resume to any cloud service and use the public/shareable link.

---

**Current Setup:** The button is configured to work with a PDF file. Just add your resume file to the appropriate location!
