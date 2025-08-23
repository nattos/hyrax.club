import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './seq-tracks';
import './seq-track';
import './seq-note';
import './seq-note-underlay';
import { COMMON_STYLES } from './drum-patterns-styles';

@customElement('hyrax-app')
export class App extends MobxLitElement {
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
<div class="info-grid">
  <div class="section-break">
  </div>
  <div class="data centered">
    <div class="h0">
      Easy drum patterns
    </div>
    <div class="block-quote">
      "Remembering sequences is hard. Remembering edits is easier!"
    </div>
    <div>
      Presenting a paradigm to constructing all sorts of drum patterns. Focus on remembering the two extremely basic fundamental patterns (boom-slap and 4-to-the-floor), and their rules-of-thumb for making edits on top.
    </div>
    <div class="data centered">
      This tutorial is interactive! Warning: it may be loud.
    </div>
  </div>

  <div class="section-break"></div>
  <hyrax-seq-tracks class="sampler-divider" allowDelete hideChrome samples="kick"></hyrax-seq-tracks>
  <div class="section-break"></div>


  <div class="data">
    <div class="h1">
      boom-slap - the money beat
    </div>
    <div>
      This is a very simple to construct beat is a great starting point to form various other beats. The alternating kick and snare 1-2 creates the "rocking" rhythm of rock music, also called the money beat. A kick for a boom, followed by a snare for a slap sound creates variation in frequency content.
    </div>
    <div>
      Note how the kick and the snare do not overlap, they do not "hit together", so the whole thing can be sequenced with just one layer.
    </div>
    <div>
      You can play them together with a sample from a real song.
    </div>
    <div>
      Try editing the sequence, moving around the kick and snare to see how the rhythm changes.
    </div>
  </div>
  <hyrax-seq-tracks bpm=110 class="highlighted">
    <div slot="header" class="header">kick-snare</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_110.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;@kick;;;;@snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      drag samples around to edit
    </div>
  </hyrax-seq-tracks>
  <div class="data">
    <div class="block-quote">
      Note how the kick and the snare do not overlap, they do not "hit together", so the whole thing can be sequenced with just one layer
    </div>
  </div>

  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      the snare as a timekeeper
    </div>
    <div>
      An important feature of this beat is the snare that hits on the "backbeat". The backbeats are the "weaker" beats 2 and 4, that sit in-between the strong kicks on 1 and 3. This snare has a lot of presence due to its stronger midtones than the kick.
    </div>
    <div class="block-quote">
      We can treat this snare as our "timekeeper", the clock that keeps things ticking regularly
    </div>
    <div>
      While this isn't the only way to think of things, keeping the snare fixed to the backbeat gives us an almost cheat way to form other beats.
    </div>
    <div>
      Take the following basic rhythm and try moving the kicks around to form the example beat.
    </div>
  </div>
  <hyrax-seq-tracks bpm=96>
    <div slot="header" class="header">a shift</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_hats_96.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;kick;;@;;@snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      shift the kick to match the example - small hints in blue mark correct locations
    </div>
  </hyrax-seq-tracks>

  <div class="data">
    You can also try shifting around the snares to see how the rhythm tends to fall apart. In contrast, we can basically move the kicks as much as we want and get a steady, understandable rhythm.
  </div>

  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      adding minimal elements
    </div>
    <div>
      We can also add elements to this basic pattern.
    </div>
    <div>
      Hats add accents to our pattern, creating a rolling sensation and more density.
    </div>
  </div>
  <hyrax-seq-tracks bpm=131 allowDelete samples="hat">
    <div slot="header" class="header">hats</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_hats_131.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;@;;@snare;;@;;@kick;;@;;@snare;;@;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      drag this sample onto the track - drag away to delete
    </div>
  </hyrax-seq-tracks>

  <div class="section-break"></div>


  <div class="data">
    <div class="h1">
      many patterns
    </div>
    <div>
      With this strategy of shifting the kick drums, and minimal adding of new elements, we can produce all sorts of rhythms.
    </div>
    <div class="block-quote">
      We can create tons patterns by just editing a basic pattern slightly
    </div>
  </div>
  <hyrax-seq-tracks bpm=85 allowDelete>
    <div slot="header" class="header">rnb</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/rnb_85.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;@;;;@snare;;;;kick;;@;;@snare;;;" fillHats></hyrax-seq-track>
  </hyrax-seq-tracks>



  <hyrax-seq-tracks bpm=133 allowDelete>
    <div slot="header" class="header">garage</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/garage_133.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;@;kick;;@;;@snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
  </hyrax-seq-tracks>
  <hyrax-seq-tracks bpm=130 allowDelete>
    <div slot="header" class="header">breaks</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/breaks_130.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;@;;kick;@;;;@snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
  </hyrax-seq-tracks>
  <div class="data">
    <div>
      This pattern is a bit harder to replicate. The pattern is two bars long, while ours is only one. For now, focus on replicating the first bar.
    </div>
  </div>
  <hyrax-seq-tracks bpm=100 allowDelete>
    <div slot="header" class="header">hip-hop</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/hiphop_100.wav" slicesBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;@;;kick;;@;;@snare;;;@" fillHats></hyrax-seq-track>
  </hyrax-seq-tracks>




  <div class="data">
    <div>
      The dubstep rhythm is considered a half-time rhythm. The pattern is two bars, and the snares hit in the middle of each bar. The same is true for the trap beat.
    </div>
  </div>
  <hyrax-seq-tracks bpm=140 allowDelete>
    <div slot="header" class="header">dubstep</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/dubstep_140.wav" slicesBars=8 slicesPageByBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;;;;;@snare;;;;;;;;kick;;;@;;;@;;@snare;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
  </hyrax-seq-tracks>



  <hyrax-seq-tracks bpm=142 allowDelete beatScale=2>
    <div slot="header" class="header">trap</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/trap_142.wav" slicesBars=4 slicesPageByBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;;;@;;@snare;;;;@;;;;kick;;;;@;;;;@snare;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
  </hyrax-seq-tracks>
  <div class="data">
    <div>
      Drum 'n' bass is fast, making it harder to reason about the rhythm, but it follows the same simple rules. DnB rhythms can be easily constructed using the same shifting paradigm.
    </div>
  </div>
  <hyrax-seq-tracks bpm=174 allowDelete>
    <div slot="header" class="header">dnb</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/dnb_174.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;kick;;@;;@snare;;;" fillHats fillHatsStep=2></hyrax-seq-track>
  </hyrax-seq-tracks>


  <div class="data">
    <div>
      For all the previous examples, we have only constructed single bar patterns. Listening to the examples, this clearly has limits. Many of the examples have a different rhythm every other bar, usually a slight perturbation of the first bar.
    </div>
    <div>
      We can construct these by sequencing two bars.
    </div>
    <div>
      This doubles the complexity, but we can still use the power of "shifting" to keep what we need to remember to a minimum.
    </div>
  </div>
  <div class="data">
    <div class="h1">
      more than one bar
    </div>
    <div>
      Here's a two bar sequence.
    </div>
    <div>
      For simplicity, the timekeeper snares have been frozen - as we know by now, these snares don't need to move.
    </div>
  </div>
  <hyrax-seq-tracks bpm=118>
    <div slot="header" class="header">two bar seq</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_edit_118.wav" slicesBars=4 pinned slicesPageByBars=2></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@!snare;;;@;kick;;;;@!snare;;;;kick;;@;;@!snare;;;@;kick;;;;@!snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      shift the kicks
    </div>
  </hyrax-seq-tracks>
  <div class="data">
    <div>
      Now we can more satisfactorily construct some of the examples we saw earlier.
    </div>
  </div>
  <hyrax-seq-tracks bpm=100 allowDelete>
    <div slot="header" class="header">hip-hop two bar</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/hiphop_100.wav" slicesBars=2 pinned slicesPageByBars=2></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@!snare;;@;;kick;;@;;@!snare;;;@;@kick;;;;@!snare;@;@;;kick;;@;;@!snare;;;" fillHats></hyrax-seq-track>
  </hyrax-seq-tracks>
  <hyrax-seq-tracks bpm=133 allowDelete>
    <div slot="header" class="header">garage two bar</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/garage_133.wav" slicesBars=4 pinned slicesPageByBars=2></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@!snare;;;@;kick;;;;@!snare;;;;@kick;;;;@!snare;;;@;kick;;@;;@!snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
  </hyrax-seq-tracks>


  <div class="section-break"></div>
  <div class="section-break"></div>
  <hyrax-seq-tracks class="sampler-divider" allowDelete hideChrome samples="snare"></hyrax-seq-tracks>
  <div class="section-break"></div>
  <div class="section-break"></div>


  <div class="data">
    <div class="h1">
      4-to-the-floor
    </div>
    <div>
      This pattern's distinct feature is its constant, unyeilding kick drums spaced extremely regularly, hitting every single beat. It serves as the basis for all "4-to-the-floor" style music like house and techno, and all descendent genres.
    </div>
    <div>
      Frequently said to sound like "marching ants".
    </div>
  </div>
  <hyrax-seq-tracks bpm=130 class="highlighted">
    <div slot="header" class="header">house</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/house_130.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;"></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      the backbeat
    </div>
    <div>
      These rhythms tend to focus on gradual construction through layering. The house beat can be constructed by layering a snare backbeat.
    </div>
  </div>
  <hyrax-seq-tracks bpm=130 allowDelete>
    <div slot="header" class="header">house backbeat</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/house_beat_130.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;@;;;;;;;;@;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      add snares - the kicks are frozen for simplicity
    </div>
  </hyrax-seq-tracks>

  <div class="data">
    <div>
      Note how in this rhythm, we now have drums hitting at the same time, necessitating care that they do not conflict too much. But, multiple drums hitting at the same time creates a sense of power.
    </div>
    <div>
      Just like in our single-track boom-slap rhythm from before, the snares hit on the weaker beats 2 and 4.
    </div>
  </div>


  <div class="data">
    <div class="h1">
      decoration
    </div>
    <div>
      "Tops" or hats tend to hit between the beats, creating a "unce-unce" rhythm, filling in the "ce" part with high frequency sparkle.
    </div>
  </div>
  <hyrax-seq-tracks bpm=128 allowDelete>
    <div slot="header" class="header">house beat with hats</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/house_hats_128.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;@snare;;;;;;;;@snare;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;@;;;;@;;;;@;;;;@;"></hyrax-seq-track>
  </hyrax-seq-tracks>



  <div class="data">
    <div>
      The hats pattern can also be inverted. Instead of hitting on the weaker beats, we can have it hit directly on the 1-2-3-4 beats. This creates an extremely regular, aggressive feel.
    </div>
  </div>
  <hyrax-seq-tracks bpm=128 allowDelete>
    <div slot="header" class="header">bigroom</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/bigroom_128.wav" slicesBars=8 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;snare;;;;;;;;snare;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@;;hat;;@;;hat;;@;;hat;;@;;hat;"></hyrax-seq-track>
  </hyrax-seq-tracks>



  <div class="data">
    <div class="h1">
      shaka-shaka
    </div>
    <div>
      For trance, the hats tend to be double time, and the snare is either changed out for a clap, or skipped altogether. This gives the so-called "boots-n-cats" sound.
    </div>
  </div>
  <hyrax-seq-tracks bpm=138 allowDelete samples="kick;snare;clap;hat">
    <div slot="header" class="header">trance</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/trance_138.wav" slicesBars=8 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;@clap;;;;;;;;@clap;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;@;;;;@;;;;@;;;;@;" fillHats fillHatsStep=2 fillHatsOffset=1></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      back to break beats
    </div>
    <div>
      If we add in some inspirations from the first paradigm, and start shifting stuff around, we can get some interesting "breakbeat" like patterns.
    </div>
  </div>
  <hyrax-seq-tracks bpm=135 allowDelete>
    <div slot="header" class="header">techno breaks</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/techno_breaks_135.wav" slicesBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;@;kick;;@;;@kick;;;@;kick;;@;"></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;;;;;;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
    <div slot="notes" class="notes">
      break up the regularity by shifting those kicks
    </div>
  </hyrax-seq-tracks>

  <div class="section-break"></div>
  <div class="section-break"></div>
  <hyrax-seq-tracks class="sampler-divider" allowDelete hideChrome samples="hat"></hyrax-seq-tracks>
  <div class="section-break"></div>
  <div class="section-break"></div>
</div>
`;
  }

  static styles = [
    COMMON_STYLES,
    css`
body, :host {
  display: block;
  background-color: var(--app-bg-color1);
  margin: 0;
}

.info-grid {
  display: grid;
  grid-auto-rows: auto;
  width: fit-content;
  margin: auto;
}
.info-grid .data {
  grid-column: 1;
}
.info-grid hyrax-seq-tracks {
  grid-column: calc(max(1, var(--multi-column) * 2));
}
.info-grid .centered {
  grid-column: 1 / calc(max(2, var(--multi-column) * 3));
}
.h0 {
  color: var(--app-text-color1);
  font-size: 300%;
  letter-spacing: 0.0125em;
  margin-bottom: 2em;
}
.h1 {
  margin-top: calc((1 - var(--multi-column)) * 3em);
}

.data {
  display: flex;
  flex-direction: column;
  min-width: calc(max(80%, (1 - var(--multi-column)) * 20em));
  max-width: 30em;
  gap: 1em;
  place-self: center;
  padding-left: calc(var(--multi-column) * 2em);
  margin-top: 1em;
  margin-bottom: 4em;
  font-size: 100%;
}
@media (hover: none) {
  .data {
    font-size: 30px;
  }
}
.data.centered {
  margin-left: 0;
  text-align: center;
  min-width: 0;
  padding-left: 0;
}
.data.block-quote {
  min-width: 0;
}

hyrax-seq-tracks {
  --tracks-grid-color: var(--app-track-grid-color);
}
hyrax-seq-tracks.highlighted {
  background-color: var(--app-bg-color2);
  border-left: 5px solid var(--app-hi-color1);
  position: relative;
  left: -5px;
  --tracks-grid-color: var(--app-text-color2);
}
hyrax-seq-tracks .header {
  color: var(--app-text-color1);
}
hyrax-seq-tracks .notes {
  text-align: center;
  margin-top: 1em;
  max-width: 50%;
  place-self: center;
  font-size: 80%;
  font-style: italic;
  color: var(--app-text-color2);
  padding-top: 1em;
}
.section-break {
  grid-column: 1;
  padding: 5em 0;
}

.info-grid .sampler-divider {
  place-self: center;
  grid-column: 1 / calc(max(2, var(--multi-column) * 3));
  margin: 0;
  padding: 0;
}

`];
}

document.body.appendChild(new App());
