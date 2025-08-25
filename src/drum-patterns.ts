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
      <span style="position:relative;top:-0.025em;letter-spacing:-0.07em;">S</span><span style="position:relative;top:0.065em;letter-spacing:-0.1em;font-size:170%;">h</span><span style="position:relative;top:-0.07em;letter-spacing:-0.05em;">i</span><span style="position:relative;top:0.125em;">f</span><span style="position:relative;top:-0.0125em;">t</span> your beats into gear
    </div>
    <div class="block-quote">
      "Remembering sequences is hard.<br>Remembering edits is easier!"
    </div>
    <div>
      Presenting a simple paradigm for building drum patterns from scratch. Focus on remembering the two extremely basic fundamental patterns (boom-crack and 4-to-the-floor), and their rules-of-thumb like <em>shifting</em> for making edits on top.
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
      boom-crack - the money beat
    </div>
    <div>
      This section introduces the first basic pattern to build off of, <em>boom-crack</em>.
    </div>
    <div>
       A <em>kick</em> for a boom, followed by a <em>snare</em> for an explosive crack creates variation in frequency content.
    </div>
    <div>
      This very simple to construct pattern is a great starting point to form various other beats. The alternating kick and snare 1-2 creates the "rocking" rhythm of rock music, also called the money beat.
    </div>
    <div>
      You can play the kick and snare together with a sample from a real song.
    </div>
    <div>
      Try editing the sequence, moving around the kick and snare to see how the rhythm changes.
    </div>
    <div class="subnote">
      <div>Tips:</div>
      <div>Press and hold <em>listen</em> to hear the example. Let go to stop. You can also tap on the waveform itself.</div>
      <div>Tap <em>play</em> to start continuous play mode.</div>
      <div>Pressing <em>listen</em> while in continous play mode lets you hear the example momentarily. Let go to go back to hearing your pattern.</div>
    </div>
  </div>
  <hyrax-seq-tracks bpm=110 class="highlighted">
    <div slot="header" class="header">kick-snare</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_110.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;@kick;;;;@snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      drag samples around to edit
    </div>

    <div slot="preview-button" class="floating-hint preview-button-notes">
      <div>
        press and hold!
      </div>
    </div>
    <div slot="play-button" class="floating-hint play-button-notes">
      <div>
        tap to toggle!
      </div>
    </div>

  </hyrax-seq-tracks>
  <div class="data">
    <div class="block-quote">
      Note how the kick and the snare <em>do not overlap</em>, they do not "hit together", so the whole thing can be sequenced with just one layer
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
      We can treat this snare as our <em>timekeeper</em>, the clock that keeps things ticking regularly
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
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;kick;;@=kick;;@snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      shift the kick to match the example - small hints in blue mark correct locations
    </div>
  </hyrax-seq-tracks>

  <div class="data">
    <div class="subnote">
      <div>Try it:</div>
      <div>Shift around the snares as well! See how the rhythm tends to fall apart.</div>
      <div>In contrast, we can basically move the kicks as much as we want and get a steady, understandable rhythm.</div>
    </div>
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
    <hyrax-seq-track pattern="@kick;;@=hat;;@snare;;@=hat;;@kick;;@=hat;;@snare;;@=hat;"></hyrax-seq-track>
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
    <hyrax-seq-track pattern="@kick;@=kick;;;@snare;;;;kick;;@=kick;;@snare;;;" fillHats></hyrax-seq-track>
    <div slot="notes" class="notes">
      you can focus on the kick + snare - placeholder hats are added automatically
    </div>
  </hyrax-seq-tracks>

  <div class="spacer"></div>

  <hyrax-seq-tracks bpm=133 allowDelete>
    <div slot="header" class="header">garage</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/garage_133.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;@=kick;kick;;@=kick;;@snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="spacer"></div>

  <hyrax-seq-tracks bpm=130 allowDelete>
    <div slot="header" class="header">breaks</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/breaks_130.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;@=kick;;kick;@=kick;;;@snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="spacer"></div>

  <div class="data">
    <div>
      The following pattern is a bit harder to replicate. The pattern is two bars long, while ours is only one. For now, focus on replicating the first bar.
    </div>
    <div>
      Note that in this rhythm, some of the beats are shifted off the grid. Also called "humanization", this can be used to make a pattern feel less robotic.
    </div>
  </div>
  <hyrax-seq-tracks bpm=100 allowDelete>
    <div slot="header" class="header">hip-hop</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/hiphop_100.wav" slicesBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;@=kick;;kick;;@=kick;;@snare;;;@=kick" fillHats></hyrax-seq-track>
  </hyrax-seq-tracks>



  <div class="spacer"></div>

  <div class="data">
    <div>
      The dubstep rhythm is considered a half-time rhythm. The pattern is two bars, and the snares hit in the middle of each bar. The same is true for the trap beat.
    </div>
    <div>
      Note the use of heavy syncopation to create that "tippy" feeling in the second half of the pattern.
    </div>
  </div>
  <hyrax-seq-tracks bpm=140 allowDelete>
    <div slot="header" class="header">dubstep</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/dubstep_140.wav" slicesBars=8 slicesPageByBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;;;;;@snare;;;;;;;;kick;;;@=kick;;;@=kick;;@snare;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="spacer"></div>

  <hyrax-seq-tracks bpm=142 allowDelete beatScale=2>
    <div slot="header" class="header">trap</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/trap_142.wav" slicesBars=4 slicesPageByBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;;;@=kick;;@snare;;;;@=kick;;;;kick;;;;@=kick;;;;@snare;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
  </hyrax-seq-tracks>


  <div class="data">
    <div>
      Drum 'n' bass is fast, making it harder to reason about the rhythm, but it follows the same simple rules. DnB rhythms can be easily constructed using the same shifting paradigm.
    </div>
  </div>
  <hyrax-seq-tracks bpm=174 allowDelete>
    <div slot="header" class="header">dnb</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/dnb_174.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;kick;;@=kick;;@snare;;;" fillHats fillHatsStep=2></hyrax-seq-track>
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
    <div>
      The first bar is the same as the second bar, except that <em>one</em> of the kicks is delayed.
    </div>
    <div>
      Try constructing the rhythm, and then moving the kick in the second bar so that it is back on beat 1. Listen to the difference.
    </div>
  </div>
  <hyrax-seq-tracks bpm=118>
    <div slot="header" class="header">two bar seq</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_edit_118.wav" slicesBars=4 pinned slicesPageByBars=2></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@!snare;;;@=kick;kick;;;;@!snare;;;;kick;;@=kick;;@!snare;;;@=kick;kick;;;;@!snare;;;"></hyrax-seq-track>
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
    <hyrax-seq-track pattern="@kick;;;;@!snare;;@=kick;;kick;;@=kick;;@!snare;;;@=kick;@kick;;;;@!snare;@=kick;@=kick;;kick;;@=kick;;@!snare;;;" fillHats></hyrax-seq-track>
    <div slot="notes" class="notes">
      which kicks are fundamental, and which are extra?
    </div>
  </hyrax-seq-tracks>

  <div class="spacer"></div>

  <hyrax-seq-tracks bpm=133 allowDelete>
    <div slot="header" class="header">garage two bar</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/garage_133.wav" slicesBars=4 pinned slicesPageByBars=2></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@!snare;;;@=kick;kick;;;;@!snare;;;;@kick;;;;@!snare;;;@=kick;kick;;@=kick;;@!snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
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
      This section introduces the second basic pattern to build off of, <em>4-to-the-floor</em>.
    </div>
    <div>
      This pattern's distinct feature is its constant, unyeilding kick drums spaced extremely regularly, hitting every single beat. It serves as the basis for all "4-to-the-floor" style music like house, techno, trance, and all descendent genres.
    </div>
    <div>
      Frequently said to sound like <em>marching ants</em>.
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
    <hyrax-seq-track pattern=";;;;@=snare;;;;;;;;@=snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      add snares - the kicks are frozen for simplicity
    </div>
  </hyrax-seq-tracks>

  <div class="data">
    <div>
      Note how in this rhythm, we now have drums hitting at the same time, necessitating care that they do not conflict too much. But, multiple drums hitting at the same time creates a sense of power.
    </div>
    <div>
      Just like in our single-track boom-crack rhythm from before, the snares hit on the weaker <em>beats 2 and 4</em>.
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
    <hyrax-seq-track pattern=";;;;@snare;;;;;;;;@snare;;;"></hyrax-seq-track>
    <hyrax-seq-track pattern=";;@=hat;;;;@=hat;;;;@=hat;;;;@=hat;"></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="data">
    <div class="subnote">
      <div>
        Note:
      </div>
      <div>Our edits here tend to involve <em>layering</em>.</div>
      <div>This is very typical of house, techno, trance, and associated 4-to-the-floor rhythms.</div>
    </div>
  </div>




  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      to align or not
    </div>
    <div>
      The hats pattern can also be inverted. Instead of hitting on the weaker beats, we can have it hit directly on the 1-2-3-4 beats. This creates an extremely regular, aggressive feel.
    </div>
  </div>
  <hyrax-seq-tracks bpm=128 allowDelete>
    <div slot="header" class="header">bigroom</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/bigroom_128.wav" slicesBars=8 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;@snare;;;;;;;;@snare;;;"></hyrax-seq-track>
    <hyrax-seq-track pattern="@=hat;;hat;;@=hat;;hat;;@=hat;;hat;;@=hat;;hat;"></hyrax-seq-track>
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
    <hyrax-seq-track pattern=";;;;@clap;;;;;;;;@clap;;;"></hyrax-seq-track>
    <hyrax-seq-track pattern=";;@=hat;;;;@=hat;;;;@=hat;;;;@=hat;" fillHats fillHatsStep=2 fillHatsOffset=1></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="spacer"></div>

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
    <hyrax-seq-track pattern="@kick;;;@=kick;kick;;@=kick;;@kick;;;@=kick;kick;;@=kick;"></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;;;;;;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
    <div slot="notes" class="notes">
      break up the regularity by shifting those kicks
    </div>
  </hyrax-seq-tracks>

  <div class="data">
    <div>
      This is an example of a typical <em>3+3+2</em> rhythm found in reggaeton and afrobeats. 3+3+2 refers to the spacing between beats. In this case, there are two repeats, one starting on beat 1, and the other starting on beat 3. The syncopated 3+3+2 rhythm creates the sense of a "bounce" or "swing".
    </div>
    <div>
      You can try shifting around the kicks even more to get a sense of which patterns have more or less swing. You can also delete kicks to see which are more or less critical.
    </div>
  </div>


  <div class="data">
    <div>
      Here is the <em>reggaeton</em> beat itself. You can hear the underlying 4-to-the-floor kick pattern.
    </div>
    <div>
      The 3+3+2 rhythm is formed from snare hits, instead of the kicks in the techno example previously.
    </div>
    <div>
      In tradition for 4-to-the-floor rhythms we have seen so far, the additional elements are added on by layering. The layering of the 3+3+2 rhythm on top of the regular kicks creates a contrasting cross-rhythm. These two rhythms move in and out of alignment, or phase, typical of a polyrhythm.
    </div>
  </div>
  <hyrax-seq-tracks bpm=119 allowDelete>
    <div slot="header" class="header">reggaeton</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/reggaeton_119.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;"></hyrax-seq-track>
    <hyrax-seq-track pattern="@=snare;;;@=snare;;;@=snare;;@=snare;;;@=snare;;;@=snare;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      layer on snares with a different rhythm
    </div>
  </hyrax-seq-tracks>


  <div class="data">
    <div class="h1">
      putting the cake all together
    </div>
    <div>
      The 3+3+2 rhythm can be seen reused all over the place, and it instantly adds a bit of "funk" to a beat. It's only one example of a cross-rhythm, but it's easy to remember and can be a good starting point.
    </div>
    <div>
      In the example track here, it's used more subtly with the tom drums. This usage can be found frequently in house styles, building the swing that is critical to funkier music.
    </div>
    <div>
      We can also take this opportunity to build a more complete layered rhythm, with 4 different tracks - kick clap hats and toms. Gradually build up the layers, referencing previous examples as necessary.
    </div>
    <div>
      For the final layer, we've also introduced a new sample, the "tom".
    </div>
    <div>
      Try listening to your rhythm with and without the tom hitting on the 3+3+2 cross-rhythm to get a sense of how it contributes. You can also try constructing your own cross-rhythm by shifting the toms around to odd beats.
    </div>
  </div>
  <hyrax-seq-tracks bpm=120 allowDelete samples="kick;snare;clap;hat;tom">
    <div slot="header" class="header">layered house beat</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/house_layered_120.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;"></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;@=clap;;;;;;;;@=clap;;;"></hyrax-seq-track>
    <hyrax-seq-track pattern=";;@=hat;;;;@=hat;;;;@=hat;;;;@=hat;"></hyrax-seq-track>
    <hyrax-seq-track pattern="@=tom;;;@=tom;;;@=tom;;;;;;;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      layer your cake with a tom cross-rhythm
    </div>
  </hyrax-seq-tracks>

  <div class="data">
    <div>
      These layered cross-rhythms are not only used for drums and percussion, but for pretty much everything imaginable. In house music in particular bass notes and synth chords or stabs often follow cross-rhythms.
    </div>
  </div>






  <div class="section-break"></div>
  <div class="section-break"></div>
  <hyrax-seq-tracks class="sampler-divider" allowDelete hideChrome samples="tom"></hyrax-seq-tracks>


  <div class="data">
    <div class="h1">
      you've finished!
    </div>
    <div>
      If nothing else, remember the two patterns, boom-crack and 4-to-the-floor.
    </div>
    <div>
      These two patterns are very simple to construct. Once you have them, you can make some simple edits on top to get a fantastic variety of rhythms.
    </div>
    <div>
      <em>boom-crack</em> benefits from shifting kicks around.
    </div>
    <div>
      <em>4-to-the-floor</em> prefers layering on very simple extras, with the occasional cross-rhythm.
    </div>
    <div>
      enjoy!
    </div>
  </div>
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
  width: 100%;
  max-width: 1024px;
  margin: auto;
}

.info-grid {
  display: grid;
  grid-auto-rows: auto;
}
.info-grid .data {
  grid-column: 1;
}
.info-grid hyrax-seq-tracks {
  grid-column: 1 / 1;
}
.info-grid .centered {
  grid-column: 1 / 1;
}
.h0 {
  color: var(--app-text-color1);
  font-size: 300%;
  letter-spacing: 0.0125em;
  margin-bottom: 2em;

  span {
    font-size: 200%;
    color: var(--app-hi-color1);
  }
}
.h1 {
  margin-top: 3em;
}

.data {
  display: flex;
  flex-direction: column;
  min-width: max(80%, 20em);
  max-width: 30em;
  gap: 1em;
  place-self: center;
  margin: 1em;
  margin-top: 4em;
}
.data.centered {
  text-align: center;
}
.data .block-quote {
  width: fit-content;
  align-self: center;
}
.data .subnote {
  color: var(--app-text-color2);
  font-size: 100%;
  max-width: calc(max(50%, 30em));
  display: flex;
  flex-direction: column;

  div {
    padding: 0.35em 1.5em;
    margin-inline: 0;
  }
}

hyrax-seq-tracks {
  --tracks-grid-color: var(--app-track-grid-color);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}
hyrax-seq-tracks.highlighted {
  background-color: var(--app-bg-color2);
  border-left-color: var(--app-hi-color1);
  --tracks-grid-color: var(--app-text-color2);
}
hyrax-seq-tracks .header {
  color: var(--app-text-color1);
}
hyrax-seq-tracks .notes {
  text-align: center;
  margin-top: 1em;
  max-width: 80%;
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
.spacer {
  grid-column: 1;
  padding: 2em 0;
}

.info-grid .sampler-divider {
  place-self: center;
  grid-column: 1 / 1;
  margin: 0;
  padding: 0;
}

.floating-hint {
  position: relative;
  user-select: none;
  pointer-events: none;

  > div {
    z-index: 1;
    position: absolute;
    background-color: var(--app-text-color2);
    color: var(--app-bg-color1);
    width: fit-content;
    padding: 0.25em 0.875em;
    opacity: 0.5;
  }
}

.preview-button-notes {
  > div {
    bottom: 1em;
    right: 50%;
    max-width: 7em;
  }
}
.play-button-notes {
  > div {
    top: 3.25em;
    right: 20%;
    max-width: 4em;
  }
}

`];
}

document.body.appendChild(new App());
