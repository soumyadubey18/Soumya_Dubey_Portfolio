# Updating the Portfolio Resume

The portfolio displays and downloads the PDF at `public/Soumya_Dubey_Resume.pdf`.

To replace it with a newer resume:

1. Replace `public/Soumya_Dubey_Resume.pdf` with the updated PDF, keeping the same filename.
2. Verify the PDF in the portfolio's **View & Download Resume** modal.
3. Include the updated PDF when committing and deploying the site so it remains available at `/Soumya_Dubey_Resume.pdf`.

The resume modal previews this file directly, so no resume text needs to be duplicated in the React component.

## Keeping portfolio details in sync

When the resume changes, cross-check the portfolio's role title, experience dates, education, skills, and current training status against the new PDF. Update the corresponding content in `src/components/Home.js`, `src/components/About.js`, `src/components/TechnicalSkills.js`, and `src/components/Experience.js` as needed.

The PDF in `public/` is the source used by the app; `build/` is generated output and should not be edited by hand. Run `npm run build` before deployment, then verify the built PDF matches the public copy.

Project demos should only be added to a project's `demo` URL in `src/components/CloudDevOpsProjectGrid.js` after confirming the deployed URL works. Projects without a verified demo continue to link to their source repositories.
