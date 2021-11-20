// responsive
const headline1 = `Responsive Layouts`;

const testText1 = `Responsive layouts for desktop/laptop, desktop (large screens), various tablet sizes (iPad 7th/8th generation, iPad Pro; portrait and landscape orientation) and mobile phones.`;

const outline = `Event page for the exhibition <em>Morita Shiryū: Bokujin</em> at Shibunkaku held January–February 2021 in Kyoto and Tokyo. The exhibition gives a survey-type of overview of the calligrapher Morita Shiryū's (1912–1998) work from the 1940s to 90s. Parts of the exhibition continue to be shown in Japan and abroad, most recently in Paris.<br><br>

<strong><u>Brief:</u></strong><br>Works by Morita and other artists of the postwar avant-garde calligraphy scene are a mainstay of the gallery. Exhibition represents an effort to carry the artist’s legacy to new audiences in Japan and abroad. The website is meant to serve as a <strong>reference and archive</strong> about the works, and includes a scholarly article and further relevant data such as exhibition history and a chronology. <br><br>

<strong>Comment on the text amount:</strong> The site is extremely text-heavy, but the gallery decided to go ahead as is against developer's (my) recommendation.* <br>Prof. Ozaki, who provided the article in Part IV, was asked a certain number of characters and ended up writing twice. For the sake of Japanese-style politeness it was refrained from asking him to shorten. <span style="font-size: smaller"> * (in my other role as part of the overseas sales team) </span><br><br>

The (somewhat awkward) solution is to use extensive scroll navigation to maneuver through the document, and hide about half of the article in "Read more" sections. It would have seemed more natural to me to omit Part II (or consolidate with Part I), bring Part III after the article in Part IV and shorten Part I to the essentials.
<br><br><br>

Production time: Fall 2020<br>
Online since: late December 2020<br>
Tools used: React, SASS, Github, Google Cloud Platform`;

const headline2 = `Exhibition Main Page & VIP Pages`;

const MoritaVIPText = `The site contains a VIP area intended for prospective clients and collectors which features each work included with extensive data (exhibition history, literature, provenance etc.; add “/vip” to URL to view). The VIP area link was provided to client the client network via mailing list.

<strong>Note:</strong> It is common policy among galleries to not expose ones best works to the broader public. Hence the arrangement to <em>not</em> link the VIP pages to the main (public) exhibition page.`;

const headline3 = `Navigation & Animations; Miscellaneous`;

const FootNoteText = `Various efforts were taken to negotiate the hideous amount of text, like separating it into sections and making chapters accessible by quick links. Footnotes can be previewed by hovering over them. 

“VIP pages” that target art collectors are accessed by adding “/vip” to the URL. These pages are not linked from the main page for the sake of gallery discretion; URL was directly mailed to prospective clients. Media queries allow for desktop, large desktop, various tablet types and mobile phone.<br><br>

<span style="display: block; color: #8f8f8f; font-size: 0.7rem; line-height: 0.5 !important">Exhibition on view in January–February 2021 in Kyoto and Tokyo, Fall–Winter 2021: Paris.<br>
Site online since December 2019. Tools: React, SASS, Git/Github. <br>Hosting: Google Cloud Platform. Installation view photo credits: H. Ichikawa.</span>
`;

const headline4 = `Pullquote Animations`;

const MoritaPullquote = `Quotes by the artist to emphasize some of his major points. Pure CSS and JavaScript.`;

const MoritaData = { headline1, testText1, outline, headline2, MoritaVIPText, headline3, FootNoteText, headline4, MoritaPullquote };

export default MoritaData;
