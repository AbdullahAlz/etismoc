# Global:
- rects should be sharp edged and not rounded
- There should be a consistent template used across the pages. The code should be modular and the data should be stored under a `data` directory, supporting both Arabic and English languages. It is best to use multiple files for each language rather than a single file with a locale check in the beginning.

# Home Page
- The background should stop moving
- There will no longer be a "Why choose [Company] section"
- The "Our Services" section should be renamed to "Services" and should support RTL and images, which, if used, will render on the left with text on the right for LTR languages, and vice versa for RTL languages.
# News
This section should include a card for latest news:
- Title
- Short description
- large Arrow in the bottom right/left corner to link to full article
- small date in the bottom left/right
- RTL support for Arabic, which flips the arrow and date to the opposite side.
- This section should be part of the Home page, 
# About
Below the News segment in the home page, there should be an about segment. This will start with "Who we are" and then provide one image on the left (right for RTL) and a short description on the right. This should be followed by a "Show more" link to the actual about page. 
# Career
 This should provide an area with cards for career opportunities. For application, it should default to contact. 
# Contact
Set up OpenStreetMap for the location embedded in the page and set up initial infrastructure for a captcha.