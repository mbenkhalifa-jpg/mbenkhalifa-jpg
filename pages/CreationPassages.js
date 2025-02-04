exports.CreationPassagesPage = class CreationPassagesPage {

    constructor (page)
    {
        this.page = page
        this.creaPassButton = page.getByText('CRÉER UN PASSAGE')
        //this.creaPassButton = page.locator("//button[contains(text(), 'CRÉER UN PASSAGE')]");
        this.plaqueField = page.locator('#newRegistrationScanModal').getByRole('combobox');
        this.validateButton = page.locator('#mailleCreationModal').getByText('VALIDER');
        //this.label = page.getByLabel('AA123AB');
        this.validationScanModelButton = page.locator('#newRegistrationScanModal').getByText('VALIDER');
        this.passageType = page.getByRole('button', { name: 'Entrée' });
        this.Material = page.getByRole('button', { name: 'teste maille dechet Biocentre' });
        this.PoveType = page.getByRole('button', { name: 'chantier Nice' });
        this.ConfirmationModalButton = page.locator('#mailleSelectionConfirmationModal').getByText('VALIDER');
        this.totalMassInput = page.getByRole('spinbutton').nth(1);
        this.loadsMassInput = page.getByRole('spinbutton').first();

        
    }

    async ClickCreationPassage (){

        await this.creaPassButton.click();
           
    }  
     
    async SelectPlate (Plaque){
        await this.plaqueField.click();
        await this.plaqueField.fill(Plaque);
        //await this.label.click();
        await this.validationScanModelButton.waitFor({ state: 'visible', timeout: 20000 });
        await this.validationScanModelButton.click();
     
    }

    async selectPassageType() {

      await this.passageType.waitFor({ state: 'visible', timeout: 30000 });
      await this.passageType.click();

    }

    async selectMaterial() {

      await this.Material.click();
      
    }


    async selectConstructionSite() {

      await this.PoveType.click();
    
    }

    async selectMass(mass) {

      //await this.totalMassInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.loadsMassInput.click();
      //await this.loadsMassInput.fill(''); // Vider le champ
      await this.loadsMassInput.fill(mass);
      await this.totalMassInput.click();
      //await this.loadsMassInput.fill(''); // Vider le champ
      await this.totalMassInput.fill(mass);
    
      
    }

    async validateCreation()
      {
        await this.ConfirmationModalButton.click();
      }

    async validate()
      {
          this.validateButton.click();
      }
 

  async selectPlatformDropdown(platform) {
    await this.page.locator('#pn_id_13').getByLabel('dropdown trigger').click();
    await this.page.getByLabel(platform, { exact: true }).click();
    await this.page.getByRole('button', { name: 'VALIDER' }).click();
  }
  

 
}

    
