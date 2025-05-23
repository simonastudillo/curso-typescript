(() => {

   let audioLevel = 5; // 1-10

   enum AudioLevel {
      min = 1,
      medium = 5,
      max = 10
   }

   const currentAudio: AudioLevel = AudioLevel.medium;

   console.log(currentAudio); // 5
   console.log(AudioLevel);

})();