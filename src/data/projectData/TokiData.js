const introText = `
<!--Purpose of this project was to provide Toki-no-Wasuremono gallery (based in Tokyo) with a mobile-friendly layout for their webpage without replacing the existing pages altogether.
<br><br>-->

Toki-no-Wasuremono is specializing in 20th Japanese avant-garde art, photography and prints by major Japanese architects. Featured artists include Tadao Ando, Arata Isozaki, Gutai, Onosato Toshinobu, Miyawaki Aiko, Q-Ei, Nobuo Sekine, Eikoh Hosoe, Tamiko Nishimura etc. <br>Finished page is bilingual Japanese/English<br><br>

<span style="display: block; color: #8f8f8f; font-size: 0.7rem; line-height: 0.5 !important">Concept: August 2015. Implementation: February-May 2016.<br>
Tools: HTML/CSS/JS, PHP, Visual Basic. </span>
`;

const introHeadline = `Toki-no-Wasuremono Gallery`;

const caption1 = `Left to right: Landing page, "Current Exhibition" page, "Main Artists" page, "All Artists" page.`;

const caption2 = `Left to right: Exhibition page, work page (below: work page with drop-down menu open), inquiry page (below: inquiry confirmation page), "Past Exhibitions" page (below: inquiry "Thank you" page).`;

const backendExplanation = `<strong>Comment: </strong>Toki-no-Wasuremono's homepage in 2015 was pure HTML/CSS with some PHP. I was there in a part-time position for webpage maintenance and volunteered to provide a mobile-friendly layout. Decision was made to not replace the existing site but use the mobile layout as an add-on; i.e. replicating the content in a new format, while keeping the old files intact.

Process was as above: isolate artwork data and image url from existing files; consolidate data into a .csv file (which works as sort of a pseudo-database). I then created a utility in VB which accepted the data .csv and different types of template files to process them into new .html files with the revised layout.`;

const TokiData = { introHeadline, introText, caption1, caption2, backendExplanation };

export default TokiData;
