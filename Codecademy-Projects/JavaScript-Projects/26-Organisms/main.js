// Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

// As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.


// Helper Functions --------------------------------------------------
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Creates an array of 30 organisms
const SurvivableOrganism = () => {
  const batch = []
  let id = 1;
  while (id <= 30) {
    let organism = pAequorFactory(id, mockUpStrand());
    if (organism.willLikelySurvive()) {
      batch.push(organism);
      id++;
    }
  }
  return batch;
}


// pAequorFactory Object--------------------------------------------------
// Return a pAequor Organism object
const pAequorFactory = (organismID, dnaBases) => {
  return {
    // Variables --------------------------------------------------
    specimenNumber: organismID,
    dna: dnaBases,


    // Methods --------------------------------------------------
    // Method to swap a single DNA base of the organism
    mutate () { 
      // Generate a random index number no longer than the organisms DNA strand and a random DNA base.
      const i = Math.floor(Math.random() * this.dna.length)
      const RandBase = returnRandBase();
      // console.log(i, RandBase);
      // If selected DNA bases are identical, call method again else replace DNA base at generated index.
      RandBase === this.dna[i] ? this.mutate() : this.dna[i] = RandBase;
      return this.dna;
    },


    // Method to log the percentage of DNA two organisms have in common
    compareDNA (pAequor) {
      // Create a empty array to hold matching dna bases
      const matchingDNA = [];
      // Loop through and compare dna bases at each location, add to matchingDNA array if they are the same.
      for (let i = 0; i < pAequor.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          matchingDNA.push(pAequor.dna[i]);
        }
      }
      // console.log(matchingDNA);
      // log the percentage of matching dna bases of the two organisims
      console.log(`${this.specimenNumber} & ${pAequor.specimenNumber} have ${(100*matchingDNA.length/15).toPrecision(2)}% in common`);
    },


    // Method to calculate organisms survuval rate
    willLikelySurvive () {
      // Create a variable to hold total occurances of C or G dna Bases
      let count = 0;
      // Loop through organism's dna string and increase count for each 'C' or 'G'
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          count++;
        }
      }
      // console.log((100*count/15).toPrecision(4));
      // Return true if dna strings containes at least 60% 'C' or 'G', false otherwise.
      return (100*count/this.dna.length) >= 60;
    }

  }
};


// Tests --------------------------------------------------
// const test = pAequorFactory(1, mockUpStrand());
// const test2 = pAequorFactory(2, mockUpStrand());

// console.log(test.dna);
// console.log(test2.dna);

// console.log(test.mutate());

// test.compareDNA(test2);
// console.log(test.willLikelySurvive());


console.log(SurvivableOrganism());