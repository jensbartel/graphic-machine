const Bio = () => {
    return (
        <>
            {/* refactor to use data array and map through it? */}

            <div className='bio'>
                <strong>Bio</strong>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ea veniam. Labore quis consectetur hic aut iusto quam! Molestias,
                    laboriosam, eligendi officia nostrum sapiente, rerum facere minima sit fuga distinctio vero aperiam laborum! Illo architecto cum enim
                    adipisci dolor tenetur veritatis esse vero quibusdam nulla, sit, ea atque! Ipsam at voluptate debitis inventore eum, consequuntur blanditiis
                    fugiat! Hic quidem similique reprehenderit! Animi accusamus aspernatur autem ab repellat cumque voluptatibus voluptate beatae dolorem
                    ducimus quis labore fugit id, deleniti distinctio praesentium voluptates recusandae atque esse eligendi, numquam nemo sequi inventore
                    asperiores? Distinctio libero laborum sed fugit maxime nisi earum explicabo omnis enim alias! Ea perspiciatis earum provident porro
                    temporibus blanditiis error exercitationem, dolorum reprehenderit, delectus harum necessitatibus vel architecto cum totam.
                </p>

                <div className='bio-item'>
                    <div className='bio-dates'>1978</div>
                    <div className='bio-contents'>Born in Dessau/Germany</div>
                </div>
                <div className='bio-item'>
                    <div className='bio-dates'>1997-2002</div>
                    <div className='bio-contents'>Study of Graphic Design, University of Applied Sciences Potsdam (Germany)</div>
                </div>
                <div className='bio-item'>
                    <div className='bio-dates'>2002-2008</div>
                    <div className='bio-contents'>Japanese Studies/Art History, Heidelberg University (Germany)</div>
                </div>
                <div className='bio-item'>
                    <div className='bio-dates'>2010-2018</div>
                    <div className='bio-contents'>Phd program in Art History, Columbia University (New York)</div>
                </div>
                <div className='bio-item'>
                    <div className='bio-dates'>2013-2016</div>
                    <div className='bio-contents'>Researcher at Musashino Art University (Tokyo),</div>
                </div>
                <div className='bio-item'>
                    <div className='bio-dates'></div>
                    <div className='bio-contents'>part-time work at Toki no Wasuremono gallery in Aoyama</div>
                </div>
                <div className='bio-item'>
                    <div className='bio-dates'>2019-present</div>
                    <div className='bio-contents'>Working at a Kyoto art gallery and publishing company</div>
                </div>
            </div>
        </>
    );
};

export default Bio;
