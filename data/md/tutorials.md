
Welcome to the Mercury Playground ^^click "play" to start the codeadjust the code below:

```js
list kickBeat [1 0.01 0.1 1 0]
new sample kick_house time(1/16) play(kickBeat)

list hatBeat euclid(16 7)
new sample hat_909 time(1/16) play(hatBeat) pan(0.5)

new sample snare_hvy time(1 3/4)

list positions sineFloat(16 6.523 0 0.6)
list pitch repeat([2 1 1 0.84 0.94] 16)
new sample chimes_l time(1/16) shape(1 70 5) name(stut)
	set stut offset(positions) pan(random) gain(1) speed(pitch)

```

### 0.0: Intro

Welcome to the Mercury tutorials!These short tutorials will teach you everythingabout the Mercury live coding language
Lines starting with '(un)comment lines with Option+
Uncomment the line below and click 'play' aboveto hear the harp sample playnew sample harp_up time(1)


### 1.1: Sample

You can play a soundfile with 'new sample'followed by the samplename, for example: kick_909Start the code with 'play' or Alt + EnterStop the sound with 'silence' or Alt + .

```js
new sample kick_909
```
Try some other sounds like: hat_909, chimes, kalimba_eYou can find all the sounds by clicking the menu 'sounds'When you select a sound from the menu it is pasted on thelocation of the cursor in the editor

### 1.2: Time

A sound is played once per bar by default.You can change how often a sound is played in one measureFor example 11

```js
new sample kick_909 time(1/4)
```
Try for example: 1

### 1.3: Sounds

Code multiple sounds simply by creating extra linesstarting with 'new sample', followed by a sound name

```js
new sample kick_909 time(3/8)
new sample hat_909 time(1/8)
new sample snare_909 time(1/2)

```
Try various time() arguments and add extra sounds

### 1.4: Tempo

We can change the tempo and other settingswith the 'set' keyword

```js
set tempo 115

new sample kick_808_dist time(3/8)
new sample hat_808 time(1/16)
new sample snare_808 time(1/2)

```
Some genres are defined by there own bpm rangeTry for example tempo 86 for HipHop,or 162 for Drum'n'Bass

### 1.5: Offset

We can keep the time interval the same, but playsounds at a different position in the bar byusing a second argument for the offset

```js
new sample kalimba_g time(1)
new sample kalimba_a time(1 3/16)
new sample kalimba_e time(1 3/8)

```
These sounds all play 1 time per measureone starts at offset 0, one at 3Try different offsets like 1

### 1.6: Rhythm

With a list we can make more complex patterns, like a beat of 1's and 0'sA list is a collection of numbers (or words) written betweensquare-brackets "[]" and seperated by spacesThe list has a unique name that can be used in other functions

```js
list hatBeat [1 0 1 0 0 1 0 1]
new sample hat_808 time(1/16) play(hatBeat)

```
1 means play the sounds, a 0 means skip itTry changing the values and length of the listFor example: [1 0 1 1 0]

### 1.7: Beat

We can create multiple rhythms for different instrumentswith lists of various lengths to create an interesting beatHere the rhythm of the hihat is 7 long, and the tabla 5

```js
list hatBeat [1 0 1 0 0 1 0]
new sample hat_909 time(1/16) play(hatBeat)

list tablaBeat [1 0 1 1 0]
new sample tabla_mid time(1/16) play(tablaBeat)

```
Try different rhythms combined with different times

### 1.8: Linear

We can also create a list of sound names insteadto let one sample play the files sequentially

```js
list drumSounds [kick_909 hat_909 snare_909 hat_909]
new sample drumSounds time(1/8)

```
Try adding or removing some sound namesFor example add tabla_mid to the listFind other sounds in the drop-down menu below

### 1.9: Linear Beat

We can now combine a list of sounds with a list of beatsand add an extra sample 1

```js
set tempo 114

list sounds [hat_909 snare_909 hat_909 tabla_mid tabla_hi]
list beat [1 0 1 0 1 1]
new sample sounds time(1/16) play(beat)

new sample kick_909 time(1/4)

```
It gradually becomes more complex and interestingTry different combinations of beats, sounds and time

### 1.0: Polyrhythm

We can also create a so called polyrhythm with time()A polyrhythm is a composite rhythm of different timingintervals within a measure

```js
new sample kalimba_e time(1)
new sample kalimba_g time(1/3)
new sample kalimba_cis time(1/2)
new sample kalimba_a time(1/4)

```
Try changing some of the time values to play with the polyrhythm

### 1.1: Chance

Instead of a 1 (100%) or 0 (0%) in the play method,we can also use a decimal-point value that representsa percentage of chance that the sound will play

```js
set tempo 115

new sample hat_808 time(1/16) play(0.6)
```
play hat 60% of the time

```js
new sample kick_808_dist time(1/8) play(0.3)
```
play kick 30% of the time

```js
new sample snare_808 time(1/2)
```
by default the sound is played 100% of the time
Try some different percentages with values between 0 and 1

### 1.2: Chance List

It is also possible to add these chances in a listThis helps to create more complex rhythms with small variations

```js
list hatBeat [1 0.1 0.9 0.2]
new sample hat_909 time(1/16) play(hatBeat)
```
plays 100%, 10%, 90% and 20% in a sequence

```js
list kickBeat [1 0.05]
new sample kick_909 time(1/4) play(kickBeat)
```
plays 90% and then 5% of the time

```js
new sample clap_909 time(1 7/8)

```
Try to make other lists of probabilities

### 1.3: Speed

With the playback speed you do not affect the tempo,but instead the pitch of the sound (higher or lower)You can use this to create melodic like patterns

```js
list pitch [1 0.5 0.25 1 2]
new sample pluck_a time(1/8) speed(pitch)

```
Try some different values like 0.3, 1.8, 3.14, 11.16

### 1.4: Soundscape

We can combine multiple sounds with differentspeeds to create a kind of soundscape

```js
new sample gong_hi time(4) speed(0.3)
new sample bowl_hi time(3) speed(0.125)
new sample drone_cymbal time(7) speed(0.25)

```
Experiment with different time and speed valuesYou can use lists for the speed to even more create variations

### 1.5: Shape

Some samples sound quite long. We can make longer samplesshorter with the shape() method, setting a fade-inand fade-out time in milliseconds

```js
new sample harp_down time(1/3) shape(1 100)
new sample bowl_hi time(1) shape(1000 2)

```
Try some different settings to hear the difference

### 1.6: Shape List

We can also use a list to change the length of fade-inand fade-out sequentially

```js
list fadeIn [2 2 500]
list fadeOut [20 20 100 20 500]
new sample harp_down time(1/4) shape(fadeIn fadeOut)

```
Try some different values in the lists

### 1.7: Start Position

For longer samples it can be useful to start the playbackof the sound at a different position within the sampleYou can do that with the start() function by giving avalue between 0 and 1 (0.5 is halfway through the sound)

```js
list positions [0.7 0.2 0.3 0.2 0.5 0.1]
new sample choir_01 time(1/8) start(positions) shape(1 100 1)

```
The list contains different starting positions in % ofthe length of the sound

### 1.8: Panning

We can make the composition sound more interesting by using thestereo field from our speakers (called panning).We can place a sound left with -1, right with 1 and center with 0

```js
new sample violin_c time(1) pan(-1)
new sample pluck_e time(1 3/16) pan(1)
new sample bamboo_g time(1 4/16) pan(0)

```
Try some different values for the panning between -1 and 1

### 1.9: Panning List

Is with many functions we've seen so far we can alsouse a list for the panning. Or use the argument 'random'to randomize the panning

```js
list panning [-1 -0.75 -0.5 -0.25 0 0.25 0.5 0.75 1]
new sample hat_808 time(1/16) pan(panning)
```
this sound will move from left to right

```js
new sample tabla_mid time(1/4) pan(random)
```
this sound will play at a random position in the stereofield

### 1.0: Volume

Sometimes you want some sounds to sound louder or softerthan others. For this we can use the gain() method.A gain of 0 is off, a gain of 1 is the original volumeof the soundfile, a gain of 2 is 2x louder (be careful!).

```js
new sample wood_hit gain(0.8) pan(-1)
new sample scrape gain(0.6)
new sample wood_plate gain(0.7) pan(1)

```
Try some different values for the gain but be careful withvalues above 1!

### 1.1: Volume List

With a volume list we can change the volume over timeto create more dynamics in the sound and make it more "human"

```js
list dynamics [0.1 0.4 0.9 0.3 0.15 0.8 0.7 0.1]
list sounds [tabla_hi tabla_hi_short tabla_mid]
new sample sounds time(1/16) gain(dynamics)

```
Try some different list values

### 1.2: Time Divide

The timediv() method allows you to subdivide the timinginto smaller portions based on a list of integer numbersThe values from other lists are still inremented as theywould when regularly playing the instrument

```js
set tempo 110

new sample hat_808 time(1/8) timediv([1 1 2 1 3 1 4 1])
new sample [kick_808_dist snare_808] time(1/2) timediv([1 1 1 4]) play([1 1 0 0 0 1 1])

```
Try some different list values

### 1.2: Humanize

Humanize the playback of an instrument with the human()method. The argument is a delay range in milliseconds withwhich the trigger of the sound is randomly delayed or rushed

```js
set tempo 110

new sample hat_808 time(1/16) human(10)
new sample [kick_808_dist snare_808] time(1/2) human(100)

```
Try some different list values

### 1.4: Note & Tune

It is also possible to change the pitch of a sample with thenote() function, similar to the note function in a synth(see tutorial 203). In the case the sample is not recorded atc4 (midi 60, 261.626Hz) you'll have to set the tune() in orderto get the correct pitch transposition. Any adjustments to speed()will also affect the audible pitch together with note().

```js
set scale dorian eb
set tempo 100

new sample kalimba_a time(1/4) note([0 7 5 3] 2) tune(a3)
new sample piano_e time(1/4 1/8) note([0 9 12 10 7 3] 1) tune(e3)

```
Try other samples to hear the melody and adjust the tune accordingly

### 1.5: Name Instruments

Instruments can have a name. Giving the instrument a name gives two advantages:1. Parameters can be set for the instrument on another line with `set <name>`2. Re-evaluating code will transfer the current count to the new instrument.This will preserve continuity while sequencing (long) lists, insteadof hearing the counter reset every time code is evaluated

```js
set tempo 100
set scale minor

list notes spread(13 0 24)
list rhythm euclid(16 13)
new synth saw note(notes 0) time(1/16) play(rhythm) name(synthy)

```
these parameters are send to the synth named "synthy"
```js
set synthy fx(filter low 3000 0.3) fx(degrade 0.4) fx(delay)

```
try evaluating the code multiple times to hear the pattern does not reset

### 2.1: Synth

Instead of playing samples we can also create a synthesizer(synth) with 'new synth' that generates a sound based onvarious types of waveforms

```js
new synth saw
```
new synth sinenew synth squarenew synth triangle
Try these different types of synths by (un)commenting

### 2.2: Synth Time

Many of the functions from the 'sample' can also beapplied to the synth, for example with the time()we can choose the time interval it is triggered at

```js
new synth saw time(1/8)

```
Try also: play(), gain(), pan() combined with listsSee tutorials 106, 107, 110, 111, 112, 118, 120

### 2.3: Note

To choose a note to play for the synth we use the note()function. This function expects a number as a semitone (half-step)on the piano-keyboard. The numbers can be positive or negative.

```js
new synth saw time(1) note(0)
new synth saw time(1 1/16) note(3)
new synth saw time(1 3/16) note(7)

```
Try different note numbers like: -5, 12, 3.14

### 2.4: Melody

Similar to how we create a list for a rhythm we canalso create a list of notes to create a melody

```js
set tempo 137

list melody [0 7 12 19 15 12 5 3 7 5 2]
new synth saw time(1/16) note(melody)

```
Try some different values for the list to createother melodies

### 2.5: Octave

With a second argument in the note() function we can choosean octave offset. Stepping up one octave is the same asadding 12 to the semitone.

```js
set tempo 137

list theMelody [0 7 5 3 7 5 2]
list theOctaves [0 0 0 1 1 1 2 2 2]
new synth saw time(1/16) note(theMelody theOctaves)

```
Here the octave is changed every 3 notes

### 2.6: Scales

In many styles of music it is common to not use all thenotes that are available to us (like all the keys on the piano)But instead use a subset of those notes. This is called a scale.The scale usually gives a certain feeling to the sound.For example major=happy and minor=sad (oversimplification)

```js
set tempo 115
set scale major

list melody [0 1 2 3 4 5 6 7 8 9 10 11 12]
new synth saw time(1/16) note(melody 2)

```
Try changing the scale from major to minor and hear the differenceYou hear some notes twice, because some values between 0-12don't fit in the scale, so they're shifted to the closest valuethat does belong to the scale

### 2.7: More Scales

There are many scales to choose from. If you like to see thecomplet entire list you can get it with scaleNames()Then 'print' the list to the console

```js
list scales scaleNames()
print scales

set tempo 143
set scale romanian_minor

list melody [12 11 10 9 8 7 6 5 4 3 2 1 0]
new synth square time(1/16) note(melody 1)

```
Try some names of the scales you see in the console

### 2.8: Root

A scale starts at a specified note. This note is the root.By default this root is a 'c', but you can choose other rootslike d, f#, gb etc.

```js
set tempo 97
set scale minor_pentatonic gb

list melody [12 11 10 9 8 7 6 5 4 3 2 1 0]
new synth square time(1/16) note(melody 1)

```
Try some of the different roots to hear the difference

### 2.9: Synth Shape

The shape() method for the synth allows us to create a longeror shorter sound with a fade-inthe shape(off) resulting in a never stopping sound.

```js
new synth triangle time(1/4) shape(1 100) note(0 2)
new synth triangle time(1) shape(off)
```

### 2.0: Synth Shape List

And as you might have expected by now we can also use alist to modulate the length from the fade-in and fade-out times

```js
list fadeOut [50 50 100 10 200 500]
new synth saw time(1/16) shape(1 fadeOut)
```

### 2.1: Super Synth

The super synth is a synth that uses multiplewaveforms at the same time with a small detuning tocreate a more richer sound

```js
new synth saw time(1/16) super(0.142 3) shape(1 80 1)

```
Try different amounts of voices: 3, 5, 11Try different detunings: 1.021, 7.245, 12.032

### 2.2: Filter

The sound of the synth is still very bright. Most synthstherefore use a filter to change the color of the sound.This can be done with the `fx(filter)`, the `fx()` is aneffect function that allows us to change the sound invarious ways

```js
new synth saw time(1/16) fx(filter low 1200 0.6) shape(1 100)
```
This filter removes high frequencies above 1200Hz (lowpass)And has a little resonance on the cutoff frequencyResonance results in a whistling sounding effect

### 2.3: Filter Modulation

We can modulate the cutoff frequency and the resonanceof the filter with values in a list

```js
list cutoffs [200 400 700 1000]
list qs [0.3 0.3 0.3 0.3 0.8]

new synth saw time(1/16) fx(filter low cutoffs qs) shape(1 80)

```
Try some different values for both

### 2.4: Note Slide

With the 'slide()' function we can slide the pitchfrom one note to another (called portamento) in a specifiedamount of time (division or milliseconds)

```js
set tempo 123
set scale minor b

list bassLine repeat([3 2 0 -7] 4)
new synth saw note(bassLine 0) shape(2 250) time(1/4) slide(1/8)

```
Try some different values for both

### 3.1: FX Delay

There are many different effects that can be addedto your sounds. The Delay effect creates echos of thesound that slowly fade away in a rhythmic pattern

```js
set tempo 100
new sample piano_g time(2) fx(delay 3/16 2/16 0.8)

```
The delay can have arguments for the leftin division. A decimal-point value 0-1 determines the amount of fade-outTry different delaytimes: 5Try changing the values in the function to hear what happensIt is also possible to modulate the parameters with lists

### 3.2: FX Distortion

With the distortion effect you can give the sound a crunchyquality, like it is sounding through a guitar amplifierfx(drive amount) - alias: distort

```js
set tempo 100

list amounts spread(5 10 50)
new loop amen time(1) gain(0.6) fx(drive amounts)

```
Try changing the values in the function to hear what happensIt is also possible to modulate the parameters with lists

### 3.3: FX Reverb

With the reverb effect you can place the sound in asmall room or big church

```js
new synth saw note(0 0) time(1) shape(1 1/4 1) fx(reverb 0.3 10)
new synth saw note([0 3 7] 1) time(1/4) shape(1 1/32) fx(reverb 0.5 3)

```
The first decimal value determines the balance between original (dry)and reverb sound (wet). The second argument is the reverb time insecondsTry changing the values in the function to hear what happensIt is also possible to modulate the parameters with lists

### 3.4: Pitch Shift

With the pitch shifter effect you can change the pitchof a sound in semitones. Allowing you to make melodies witha single sample

```js
set scale harmonic_minor c
new sample chimes time(1/8) fx(shift [0 3 2 -1 7 5]) shape(100)

```
The first argument is the pitch shift in semitones which isalso mapped according to the scale that is setTry changing the values in the function to hear what happensIt is also possible to modulate the parameters with lists

### 3.5: Squash

The squash effect is also a type of distortion effect thatcompresses the sound a bit softer in the beginning butwith higher values introduces some crunch alsofx(squash amount)

```js
set tempo 115

list squashes [4 15 10 4 40]
new sample kick_909 time(1/16) fx(squash squashes) shape(1 50)

```
Try changing the values in the function to hear what happensIt is also possible to modulate the parameters with lists

### 3.6: FX All

It is possible to give multiple sounds the same effectsby using the `set all` code

```js
new sample kick_909 time(1/2)
new sample hat_909 time(1/4 1/8)
new synth saw time(3/16) note(0 1) shape(1 1/8) super(3 0.0423)

set all fx(shift -12 0.5) fx(squash 70) fx(reverb 0.5 2)

```
Note that this actually creates individual effects for all thesounds. Meaning they can all have individual modulation speedswhen using a list with arguments

### 3.7: FX Filter

The filter is a simple filter where the cutoff frequency isset with a list or argument. The second argument changes the Qand the third argument allows to set a ramptime in milliseconds orrelative to the bpm

```js
new synth saw shape(off) time(1/4) fx(filter low [4000 100 2000 50] 0.6 1/8)

```
Try changing the values in the function to hear what happensIt is also possible to modulate the parameters with lists

### 3.7: FX Trigger Filter

The trigger filter is a filter where the cutoff frequency isdriven by an envelope (shape). The filter is triggered every timethe note is played.Set the filter type: lowpass, highpass or bandpass.Set the attack and release times in milliseconds or relative to the tempo.Set the high and low frequency points between which the envelope moves.

```js
new synth saw note(0 0) time(1/1) shape(off) fx(triggerFilter low 1/4 3/4 5000 100)

```
Try changing the values in the function to hear what happensIt is also possible to modulate the parameters with lists

### 3.8: FX Compressor

A compressor allows you to reduce the dynamic range of a synth or sample.The signals volume gets reduced by a specified ratio when it crossesthe thresholdSet the threshold in dBFS (-100 to 0, default = -30)Set the compression ratio (20 to 0, default = 6)Set the attack and release time in milliseconds or relative to tempo

```js
new loop amen time(1) fx(compress -20 5 5 50)

```
Try changing the values in the fx function to hear what happensIt is also possible to modulate the parameters with lists

### 3.0: FX Degrade

A Downsampling Chiptune effect. Downsamples the signal by a specified amountResulting in a lower samplerate, making it sound more like 8bitfx(degrade amount) - alias: chip

```js
list degrades spreadF(16 0.5 0.9)
new sample choir_o time(1/4) shape(off) fx(degrade degrades)

```
Try changing the values in the fx function to hear what happensIt is also possible to modulate the parameters with lists

### 4.0: Algorithmic Composition

This chapter discusses the algorithmic processes that can be used inMercury. Mercury is heavily inspired by the composition technique Serialism.This technique approaches every musical parameter (rhythm, pitch, dynamics,etc) as an individual sequence of numbers. These sequences can then betransformed in many ways to extend and generate new musical material.
With algorithmic processes (functions) we can generate or transform lists.With the lists we can control the parameters in functions of instruments. Bycombining various list functions we can create more complex outputs.
This chapter will cover most of the algorithmic methods, but many uniquecombinations are up to you to discover!
A list is a collection of items (numbers, words) that has a unique name
```js
list myValues [1 2 3.14 6.18 kick_909 snare_808]

```
It is possible to print the content of a list. This is useful to viewthe result of list functions
```js
print myValues
```

### 4.1: Spread

Generate a list of n-length containing whole numbersStarting at x and ending at y (excluding y)spread(size low high)
Useful for melodies and ascendingsequences for modulation of for example note-length

```js
list melody spread(5 0 12)
list length spread(7 500 20)
print melody length

new synth saw note(melody 1) time(1/16) shape(1 length)
```

### 4.2: Spread Inclusive

Generate a list of n-length containing whole numbersStarting at x and ending at y (including y)spreadInclusive(size low high)
Useful for melodies and ascendingsequences for modulation of for example note-length

```js
list melody spreadInclusive(5 0 12)
list length spreadInclusive(7 500 20)
print melody length

new synth saw note(melody 1) time(1/16) shape(1 length)
```

### 4.3: Spread Float

Generate a list of n-length containing floating-point numbersStarting at x and ending at y (excluding y)spreadFloat(size low high) (alias: spreadF)spreadInclusiveFloat(size low high) (alias: spreadInclusiveF)
Useful for parameters that are based on floating-point numberssuch as sequences for modulation of for example gain and panning

```js
list volume spreadF(16 0 1)
list panning spreadInclusiveF(7 -1 1)
print volume panning

new synth saw note(0 1) time(1/16) shape(1 80) pan(panning) gain(volume)
```

### 4.4: Fill

Fill a list with values and a number of repetitions. The valuesare provided in pairs of number, amount.fill(value1 amount1 value2 amount2 etc...)
Useful for creating longer lists with a lot of duplicate values

```js
list melody fill(0 4 7 2 3 4 12 2 9 4 3 2 2 2)
print melody

new synth sine note(melody 2) time(1/16)
```

### 4.5: Euclidean Rhythm

Generate a euclidean rhythm. The algorithm evenly spaces n-beats overn-steps, return a list of 1's and 0's. Inspired by Godfried Toussaintsfamous paper "The Euclidean Algorithm Generates Traditional Musical Rhythms".euclidean(steps, beats, rotate) (alias: euclid)
Useful for generating intricate rhythmical patterns with the play() function

```js
set tempo 130
list rhythm1 euclid(16 5)
list rhythm2 euclid(8 5)
print rhythm1 rhythm2

new sample bongo time(1/16) play(rhythm1)
new sample bongo_lo time(1/16) play(rhythm2) 
```

### 4.6: Hexadecimal Rhythm

Hexadecimal beats make use of hexadecimal values (0 - f) that are a base-16number system. Because one digit in a base-16 number system has 16 possiblevalues (0 - 15) these can be converted to 4 bits that therefore can be seenas groups of 4 16th notes. These hexadecimal values will then represent anypermutation of 1's and 0's in a 4 bit number, where 0 = 0 0 0 0, 7 = 0 1 11, b = 1 0 1 1, f = 1 1 1 1 and all possible values in between.
Useful for generating intricate rhythmical patterns with the play() function

```js
set tempo 130
list rhythm1 hex('f02c')
list rhythm2 hex('094a')
print rhythm1 rhythm2

new sample bongo time(1/16) play(rhythm1)
new sample bongo_lo time(1/16) play(rhythm2)
```

### 4.7: Fibonacci Numbers

Generate a list of Fibonacci numbers F[n] = F[n-1] + F[n-2]. The fibonaccisequence is famous because it's numbers pop up in nature in many placesand when you divide any number in the sequence by its previous number itconverges towards the golden ratio (phi, 1.618)fibonacci(amount)fibonacci(amount, starting number)
Useful as a starting point for melodic content or modulation of parameters

```js
list melody fibonacci(9)
list cutoff fibonacci(8 12)
print melody cutoff

new synth saw note(melody 1) time(1/8) shape(off) fx(filter low cutoff)
```

### 4.8: Pisano Periods

Generate Pisano periods from the Fibonacci sequence. The pisano period is aresult of applying a modulo (%) operation on the Fibonacci sequenceF[n] = (F[n-1] + F[n-2]) mod a. The length of the period differs per modulusvalue, but the sequence will always repeat.
Useful as a starting point for melodic content or modulation of parameters

```js
list melody pisano(13)
print melody

new synth sine note(melody 2) time(1/16)
```

### 4.2: Translate Time

Generate 2-dimensional arrays of relative notevalues that canbe used as chord information or flattened to generate melodicprogressions based on chordschordsFromNumerals(list)
Convert a chord progression from roman numerals to semitonesalias: makeChords()
```js
print chordsFromNumerals([I IIm IVsus2 V7 VIm9])

```
Convert a chord progression from chordnames to semitones
```js
print chordsFromNames([C Dm Fsus2 G7 Am9])

set scale chromatic c
list chords flatten(chordsFromNumerals(repeat([I7 IV7sus2 IIm7 V7] 2)))
print chords 

new synth saw note(chords 1) time(1/16)
```

### 4.0: Random

Generate a list of n-length containing random valuesof whole numbers between low and high value (excluding high)Note that any time you evalute the code the random numbers aredifferent. See "randomseed" for a solution to this issue.random(size low high)
Useful to generate random sequences for melodies and any parameter

```js
list melody random(8 0 12)
list cutoff random(5 300 4000)
list length random(4 80 300)
print melody cutoff length

new synth saw note(melody 1) time(1/8) shape(1 length) fx(filter low cutoff)
```

### 4.1: Random Seed

Set the seed for the Random Number Generator (RNG). A value of 0 sets tounpredictable seeding. Seeding the RNG results in predictable psuedorandom numbers that give the same result every time the code isevaluated.randomSeed anyValue
Useful to fix generated random numbers
Try both seeds and hear the difference
```js
set randomSeed 4738
```
set randomSeed 7385

```js
list melody random(5 0 12)
list cutoff random(5 100 2000)
list rhythm random(16 0 2)
print melody cutoff rhythm

new synth saw note(melody 1) time(1/16) play(rhythm) fx(filter low cutoff)
```

### 4.2: Drunk

Generate a list of n-length containing random valuesof whole numbers between low and high value (excluding high)Every random number is based on the previous number and generatedwithin a specified step-range.drunk(size step low high)
Useful to generate random sequences for melodies and any parameter

```js
list melody drunk(16 2 0 12)
list cutoff drunk(16 1000 300 4000)
list length drunk(16 50 80 500)
print melody cutoff length

new synth saw note(melody 1) time(1/16) shape(1 length) fx(filter low cutoff)
```

### 4.3: Clave

Generate random clave patterns. The output is a binary list that representsa rhythm, where 1's represent onsets and 0's rests. A clave pattern can befound in musical genres such as salsa, mambo, rumba, raggae, raggaeton andmore. It is usually defined as an alternation of a beat with 1 or 2 restsclave(size)
Useful to generate random rhythms

```js
set tempo 130
list rhythm1 clave(8)
list rhythm2 clave(8)
print rhythm1 rhythm2

new sample bongo time(1/16) play(rhythm1)
new sample bongo_lo time(1/16) play(rhythm2)
```

### 4.4: Coin

Generate a list of n-length containing random coin tossesThe resulting list only contains 0's and 1'scoin(size)
Useful to generate random rhythms

```js
set tempo 130
list rhythm1 coin(8)
list rhythm2 coin(8)
print rhythm1 rhythm2

new sample bongo time(1/16) play(rhythm1)
new sample bongo_lo time(1/16) play(rhythm2)
```

### 4.5: Choose

Use Choose to randomly select items from a defined listchoose(size list)
Useful to generate random lists with predefined optionsFor example for melodies or sample selections

```js
list melody choose(16 [-1 0 2 3 6 7])
list beat choose(8 [kick_808 hat_808 snare_808])
print melody beat

new synth sine note(melody 2) time(1/16)
new sample beat time(1/8)
```

### 4.6: Shuffle

Shuffle the contents of a list. The shuffle order is alsocontrolled by the random seed.shuffle(list) - alias: scramble
Useful to generate random orders of a predefined listFor example for melodies or sample selections

```js
list melody shuffle([-1 0 2 3 6 7 9 12])
list beat shuffle([kick_808 hat_808 snare_808 tabla_hi_short])
print melody beat

new synth sine note(melody 2) time(1/16)
new sample beat time(1/8)
```

### 4.0: Reverse

Reverse the contents of a list.reverse(list) - alias: rev
Useful to generate a reversed version of a list likefor example a melody

```js
list melody [0 2 3 7 9 12]
list revMelody reverse(melody)

new synth saw note(melody 1) time(1/4)
new synth saw note(revMelody 2) time(1/4 1/8)
```

### 4.1: Palindrome

Reverse the contents of a list and append it tothe original list to create a palindrome.palinedrome(list) - alias: palin, mirror
Useful to extend a melody or list starting from asingle phrase

```js
list melody palindrome([0 2 3 7 9 12])
print melody

new synth saw note(melody 1) time(1/16)
```

### 4.2: Invert

Invert the contents of a list. This is done by looking atthe highest and lowest value in the list and flipping everynumber to the opposite side.invert(list) - alias: flip
Useful to transform a melodic phrase to generate newmusical material

```js
list melody [0 3 2 7 9 7 12 14]
list inv invert(melody)
print melody inv

new synth saw note(melody 1) time(1/4)
new synth saw note(inv 0) time(1/4 1/8)
```

### 4.3: Join

Join to or more lists together into one longer listjoin(list1 list2 ... list-n) - alias: combine
Useful to transform a melodic phrase to generate newmusical material

```js
list melody [0 3 7 12]
list inv invert(melody)
list shuf shuffle(melody)
list joined join(melody inv shuf shuf)
print melody inv shuf joined

new synth sine note(joined 2) time(1/16)
```

### 4.4: Repeat

Repeat the content of a list a specified amount of times.The amount can be specified as another list resulting in differentrepetitions per value from the input list.repeat(list amount)

```js
list melody [0 3 7 12 9]
list repeats repeat(melody [4 2])
print melody repeats

new synth saw note(repeats 1) time(1/16)
```

### 4.5: Lace

Interleave (laceThe longest list is preserved but other lists are not repeatedin the interleaving processlace(list1 list2 ... list-n) - alias: zip

```js
list melody [0 3 7 9]
list melody2 add(melody 12)
list melody3 [24 27]
list laced lace(melody melody2 melody3)
print melody melody2 melody3 laced

new synth saw note(laced 1) time(1/16)
```

### 4.6: Lookup

Lookup any items from a list based on the numbers in another list.The numbers represent the index (0-based) and wrap on the list length.lookup(indeces items)
Useful to reorder content of a list

```js
list sounds [kick_808 hat_808 snare_808]
list pattern [0 1 1 1 0 1 2 1]
list beat lookup(pattern sounds)
print beat

new sample beat time(1/16)
```

### 4.7: Clone

Duplicate the contents of a list a specified amount of timeBut add a value (offset) to every duplication based on thethe value in another list
Useful to generate melodic progressions

```js
set scale minor c
list notes [0 3 7 5]
list clones repeat(notes 4)
list melody clone(notes clones)
print notes clones melody

new synth sine note(melody 2) time(1/16)
```

### 4.0: Add

It is possible to perform basic arithmetic on entirelists with a single scalare, or adding 2 lists together.add(list1 list2

```js
list melody [0 3 7 3 5 7 9]
list melody2 add(melody 12)
print melody melody2

new synth saw note(melody) time(1/4)
new synth saw note(melody2) time(1/4 1/8)
```

### 4.1: Normalize

Normalize the content of a list. When normalizing a listthe lowest value will become 0 and the highest value 1.All the values in between will be scaled in ratio to thelowest and highest value.normalize(list) - alias: norm()

```js
list psn pisano(7)
list psnNorm normalize(psn)
print pattern psnNorm

new sample hat_808 time(1/16) gain(psnNorm)
```

### 4.0: Translate Notes

You can use various methods to translate between differentnote notation formats such as Midi, Notenames and Frequency
Convert Array or Int as midi-number to midi-notenames (alias: mton)
```js
print midiToNote([60 63 67 69 57 65])

```
Convert midi-pitches to frequency (A4 = 440 Hz) (alias: mtof)
```js
print midiToFreq([60 63 67 69 57 65])

```
Convert Array of String as midi-notenames to midi-pitch (alias: ntom)
```js
print noteToMidi(['c4' 'eb4' 'g4' 'a4' 'a3' 'f4'])

```
Convert midi-notenames to frequency (A4 = 440 Hz) (alias: ntof)
```js
print noteToFreq(['c4' 'eb4' 'g4' 'a4' 'a3' 'f4'])

```
Convert frequency to nearest midi note (alias: ftom)
```js
print freqToMidi([261 311 391 440 220 349])

```
Set detune flag to true to get floating midi output for pitchbend
```js
print freqToMidi([261 311 391 440 220 349] true)

```
Convert frequency to nearest midi note name (alias: fton)
```js
print freqToNote([261 311 391 440 220 349])
```

### 4.1: Translate Relative

You can use translate relative valuesfrequencies easily with the relative and chroma methods
Convert relative semitone values to midi-numbers (alias: rtom)specify the octave as second argument (default = 'C4' = 4 => 48)
```js
print relativeToMidi([-12 -9 -5 0 4 7 2 5 9] 'c4')

```
Convert relative semitone values to frequency (A4 = 440 Hz) (alias: rtof)specify the octave as second argument (default = 'C4' = 4 => 48)
```js
print relativeToFreq([-12 -9 -5 0 4 7 2 5 9] 'c4')

```
Convert a chroma value to a relative note number (alias: ctor)Can also include octave offsets with -
```js
print chromaToRelative(['C' 'Eb' 'G' 'Ab' 'A+' 'F-'])

```
Convert ratios to relative midi-cents (alias: rtoc)
```js
print ratioToCent([2/1 3/2 4/3 5/4 9/8])
```

### 4.2: Translate Time

With the methods below you can translate between various time formatssuch as milliseconds, divisions and ratios. By default the global tempois used, but you can set a specific tempo with an additional argumentdivisionToMs(list tempo)

```js
set tempo 120
```
convert beat division strings to milliseconds with global bpm (alias: dtom)
```js
print divisionToMs([1/4 1/8 3/16 1/4 1/6 2])

```
use a local bpm argument
```js
print divisionToMs([1/4 1/8 3/16 1/4 1/6 2] 100)

```
also converts ratios from floating point
```js
print divisionToMs([0.25 0.125 0.1875 0.25 0.1667 2] 100)

```
convert beat division strings to beat ratio floats (alias: dtor)
```js
print divisionToRatio([1/4 1/8 3/16 1/4 1/6 2])
```

### 5.1: MIDI Note

We can also output MIDI notes from the browser to externalinstruments or applications on the computer via WebMidi.This allows us to use Mecruy for generative music whileother applications are handling the sound

```js
new midi default time(1/8) note([0 3 7] 2) gain(0.8)
```
this will send a midi-note to the default devicea gain of 1 is a velocity of 127, 0.8 = 101

### 5.2: MIDI Duration

With the length() method we can change the duration.The duration of a midi-note is determined by the interval betweenthe note-on and note-off message in milliseconds

```js
new midi default time(1/8) note(0 2) length([50 100 150 200])
```
the list in length() will send different durations


### 5.3: MIDI Channel

We can change the midi-channel with the out() method

```js
new midi default time(1/8) note(0 0) out(10)
```
channel 10 is the default drum channel in general midi


### 5.4: MIDI Chord

By setting the chord() method to 'on' we can outputmultiple notes at the same time to create a chord

```js
new midi default time(1) note([[0 3 7 11]] 2) chord(on)
```
here the chord is created by making a list on the firstplace within another list (otherwise the notes would beplayed in order over time)

### 5.5: MIDI Control Change

With the cc() method we can send control change messagesto the same device, to control other parametersAdd multiple cc() methods to make different messages

```js
new midi default time(1/16) note(0 0) name(myMidi)
	set myMidi cc(10 [50 100]) cc(20 random(4 0 127))
```
Above are two cc() methods, one to control number 10, andone to 20, both with different values to change.

### 5.6: MIDI Pitchbend

With the bend() method you can send pitchbend messagesto the same device. You can only send one pitchbend messageat a time per channel.The pitchbend range is -1.0 to 1.0, where 0 is no pitchbendThe output is hiresolution 14bit 0-16383

```js
set tempo 130

list pitchbender spreadF(16 -0.3 0.3)
new midi default time(1/16) note(0 2) bend(pitchbender)

```
Above is one bend() output, with 16 values ramping from-0.3 to 0.3, send every 16th note.

### 6.1: Hydra Visuals

We can store hydra sketches as a string in a listBy creating a list of multiple sketches the instrumentwill cycle through them for every trigger

```js
list hydras ['osc(10,0.1,2).out()' 'osc(20,-0.5,5).out()' 'osc(5,1,12).out()']

new sample kick_min time(1/16) play([1 0 0 1 0]) visual(hydras)
```

### 6.2: View List

It is possible to view the content of a list in avisual manner. By using 'view' the list will benormalized (0-1) and displayed as grayscale valuesacross the screen. The length of the list willdetermine the amount of squares displayed

```js
list myVals mod(repeat(palin(spreadF(46 1 0)) 3) 0.15)

view myVals

```

### 6.3: View List RGB

If you merge() three lists you can display Red,Green and Blue values seperately. Make sure the listshave the same length in order to fill all pixels equallyAll lists are normalized together, so if one list has very largenumbers, the other lists will become very dark

```js
list cos mod(cosine(3034 50 0 7) 3)
list sin mod(sine(3034 40 0 7) 3)
list cos2 mod(cosine(3034 20 0 20) 3)

view merge(cos sin cos2)
```

### 6.4: View & Hydra

You can access the canvas of the displayed list byinitializing a hydra source: s0.init({src: listView})

```js
list cos mod(cosine(2000 60 20) 2)
view cos

list hydraVisual ['s0.init({src: listView}); src(s0).modulate(noise([2,5,10]), [0.05, 0.1]).out()']
new sample hat_909 time(1/4) visual(hydraVisual)

```

### 7.0: OSC Messages

It is possible to send Open Sound Control (OSC) Messages to Mercuryinstruments. However this is only possible when running Mercury via alocalhost. Go to https:and follow the instructions
Now send osc-messages from other applications toip: 127.0.0.1 (or localhost) and port: 8000
for example control the note, length, volume and filter of a sawtooth synth
```js
set tempo 100
new synth saw name(syn0) time(1/16)
	set syn0 note('/synth/note') shape(1 '/synth/length') gain('/synth/vol')
	set syn0 fx(filter low '/synth/cutoff' 0.5)

```
