export default class Character {
    constructor({ name, image,gender,species,status }) {
      this.name = name;
      this.image = image;
      this.gender = gender;
      this.species= species;
      this.status= status;
      this.$characterImageContainer = document.querySelector('#character-image-container');
      this.$characterNameContainer = document.querySelector('#character-name-container');
      this.$characterDescriptionContainer = document.querySelector('#character-description-container');
    
      this.render();
    }
    
    buildImage() {
      return `<img class="character-image" src=${this.image} alt=${this.name}>`;
    }
    
    buildName() {
      return `
        <div class="character-name">
          <h2>${this.name}</h2>
        </div>
      `;
    }
    
    buildDescription() {
        console.log(this.gender)
        console.log(this.species)
        console.log(this.status)
      return `
        <div class="character-description-container">
          <h3 class="character-label">Género: ${this.gender}</h3>
          <h3 class="character-label">Especie: ${this.species} </h3>
          <h3 class="character-label">Status: ${this.status}</h3>
        </div>
      `;
    
    }
    
    render() {
      if (this.$characterImageContainer && this.$characterNameContainer && this.$characterDescriptionContainer) {
        this.$characterImageContainer.innerHTML = this.buildImage();
        this.$characterNameContainer.innerHTML = this.buildName();
        this.$characterDescriptionContainer.innerHTML = this.buildDescription();
      } else {
        console.error('Error: One or more container elements are not found.');
      }
    }
  }