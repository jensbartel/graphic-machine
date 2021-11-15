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

const FootNoteText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores soluta quasi doloremque amet earum impedit dolore repellendus commodi aperiam ad modi, explicabo eos minima optio, unde blanditiis deleniti voluptates? Odit cupiditate consequatur expedita consequuntur, eos ad quibusdam corrupti fugiat possimus! Quae ipsam labore tempore harum in quisquam animi enim dolore impedit ex, excepturi rerum...`;

const headline4 = `Pullquote Animations`;

const MoritaPullquote = `Quotes by the artist to emphasize some of his major points. Pure CSS and JavaScript.`;

const MoritaData = { headline1, testText1, outline, headline2, MoritaVIPText, headline3, FootNoteText, headline4, MoritaPullquote };

export default MoritaData;
