class App{
    get={
        subirArchivosButton:()=> cy.get('button').contains('Subir archivos')

    }
  
    clickUploadFiles(){
        this.get.subirArchivosButton().click()
    }
}
export const app = new App()