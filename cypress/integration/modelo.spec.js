describe('Just a test',()=>{
    it('Sample test for new repo',()=>{
        cy.visit('www.google.com')
        cy.get('[jsname="gLFyf"]').type('Alice in chains wikipedia')
        cy.get('body').click()

    })
})