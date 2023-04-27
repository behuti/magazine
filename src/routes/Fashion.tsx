import React from "react";
import Hero from "../components/hero/hero";
import Article from "../components/article/article";
import AudioPlayer from "../components/audioPlayer/audioPlayer";

const Fashion = () => {
  return (
    <>
      <Hero imgSrc={"img/fashion.jpg"} imgDesc="Fashion Hero"></Hero>
      <Article mainTitle={"Kylie Jenner's New Classic Beauty Routine"}>
        <AudioPlayer audioSrc={"audio/swimming_news.ogg"} />
        <p>
          In mauris ipsum, tempor vitae velit id, commodo consectetur turpis.
          Phasellus nunc nunc, fermentum nec bibendum semper, lobortis et
          libero. Integer volutpat neque nulla, eu ultrices ante malesuada sed.
          Sed aliquam et nunc ac euismod. Donec id lacus lacinia, ultrices
          tortor vel, consequat dui. Donec posuere nunc lectus, sed vehicula
          velit laoreet quis. Ut semper odio vel magna aliquet, at placerat dui
          auctor. Nam erat ligula, rhoncus in imperdiet id, auctor vitae felis.
          Nunc ut bibendum neque. Etiam consectetur in orci pretium feugiat. Sed
          ut ipsum sit amet diam rutrum tincidunt.
        </p>
        <p>
          Curabitur condimentum faucibus suscipit. Nulla dapibus metus id massa
          suscipit gravida. Nam at tristique erat, quis mattis est. Cras maximus
          eu ante quis ullamcorper. Vivamus urna ante, rhoncus sagittis aliquet
          quis, feugiat a nibh. Aliquam faucibus condimentum risus eu dignissim.
          Morbi nec lacus in magna faucibus rutrum id in risus.
        </p>

        <p>
          Donec erat dui, rhoncus a diam at, vulputate dictum sem. Donec ut
          sapien et leo aliquet ultrices nec a nunc. Donec hendrerit elit arcu,
          sit amet consectetur odio lobortis vel. Nullam in suscipit nisl, nec
          pharetra orci. Etiam ornare quam sed magna pulvinar, ut euismod quam
          facilisis. Cras pellentesque tincidunt auctor. Vestibulum est mauris,
          pellentesque quis magna nec, suscipit rhoncus risus.
        </p>
        <p>
          Sed dictum at nulla id porttitor. Etiam posuere vitae sapien vel
          venenatis. Mauris a odio diam. Integer vel auctor massa, eget
          dignissim lacus. Nunc molestie urna ut molestie porta. Duis vitae
          porta mi. Proin iaculis aliquam metus. Nulla facilisi. Fusce volutpat,
          massa sit amet laoreet posuere, mi neque posuere ex, non auctor augue
          ante sed metus. Proin placerat est eget odio vestibulum, sed sodales
          mi pharetra. Proin in ornare elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>
          In hac habitasse platea dictumst. Duis eu odio lectus. Maecenas felis
          massa, volutpat in diam sed, sagittis luctus neque. Cras posuere
          finibus odio. Suspendisse nec viverra mauris. Mauris tellus nibh,
          vestibulum a nunc vitae, pretium maximus nunc. Integer rhoncus tortor
          vitae ex porttitor consectetur. Nulla scelerisque iaculis ullamcorper.
          Sed a tortor ornare neque pulvinar consequat sit amet non tortor.
          Praesent pulvinar id diam elementum tincidunt. Phasellus commodo
          tempus ante, a molestie lorem. Fusce fringilla, ex ut condimentum
          sagittis, sapien nisi malesuada justo, ut sagittis lorem nibh in
          justo. Fusce fringilla, ligula in convallis imperdiet, lorem nunc
          vulputate velit, ac accumsan lectus elit sed neque. Etiam quis est ut
          ex dapibus semper. Etiam laoreet erat ac lacus varius ornare. Nullam
          nec sagittis lacus.
        </p>
      </Article>
    </>
  );
};

export default Fashion;
