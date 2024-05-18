const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

When('I click tags', async function() {
    let element = await this.driver.$('#ember29');
    return await element.click();
})

When('I click newTag', async function() {
    let elements = await this.driver.$$('//a[contains(@class, "gh-btn-primary") and span[text()="New tag"]]'); // Usando $$ para obtener una lista de elementos
    if (elements.length > 0) {
        await elements[0].click();
    } else {
        throw new Error('Element not found');
    }
});

When('I enter tagName {kraken-string}', async function (tagName) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagName);
});

When('I enter tagColor {kraken-string}', async function (tagColor) {
    let element = await this.driver.$('[name="accent-color"]');
    return await element.setValue(tagColor);
});

When('I enter tagSlug {kraken-string}', async function (tagSlug) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(tagSlug);
});

When('I enter tagDescription {kraken-string}', async function (tagDescription) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(tagDescription);
});

When('I click save', async function() {
    let element = await this.driver.$('[data-test-button="save"]');
    return await element.click();
});

Then('I should see the tag {kraken-string}', async function(tagName) {   
    let element = await this.driver.$('h3.gh-tag-list-name[data-test-tag-name=""]');

     // Verifica si el texto del elemento coincide con el texto esperado
     let texto = await element.getText();
     if (texto !== tagName) {
        throw new Error(`Expected title "${tagName}" but found "${texto}"`);
     }
 });


When('I click tagCreado', async function() {
    // Buscar el elemento <h3> con la clase "gh-tag-list-name"
    let element = await this.driver.$('h3.gh-tag-list-name[data-test-tag-name=""]');

    // Hacer clic en el elemento encontrado
    return await element.click();
})

Then('I should see the tag description {kraken-string}', async function(tagDescription) {
    let element = await this.driver.$('p.gh-tag-list-description[data-test-tag-description=""]');
     // Verifica si el texto del elemento coincide con el texto esperado
     let texto = await element.getText();
     if (texto !== tagDescription) {
        throw new Error(`Expected title "${tagDescription}" but found "${texto}"`);
     }
 });

 

 When('I click delete', async function() {
    let element = await this.driver.$('[data-test-button="delete-tag"]');
    return await element.click();
});

When('I click delete2', async function() {
    let element = await this.driver.$('[data-test-button="confirm"]');
    return await element.click();
});

Then('I should see {kraken-string}', async function(tagName) {    
    let element = await this.driver.$('//a[contains(@class, "gh-btn-green") and span[text()="Create a new tag"]]');
     // Verifica si el texto del elemento coincide con el texto esperado
     let texto = await element.getText();
     if (texto !== tagName) {
        throw new Error(`Expected title "${tagName}" but found "${texto}"`);
     }
 });