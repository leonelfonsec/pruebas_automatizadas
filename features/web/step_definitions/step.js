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

 When('I click new post', async function() {
    let element = await this.driver.$('a[title="New post"]');
    return await element.click();
});

When('I enter title of post {kraken-string}', async function (postPrueba) {
    let textarea = await this.driver.$('textarea[data-test-editor-title-input]');
    await textarea.setValue(postPrueba);
});

When('I enter post {kraken-string}', async function (post) {
    let contenteditableDiv = await this.driver.$('div[data-lexical-editor="true"]');
    await contenteditableDiv.click(); // Hacer clic para asegurar el foco en el div editable
    await contenteditableDiv.keys(post); // Ingresar el texto en el div editable
});

When('I click on the post settings button', async function() {
    let settingsButton = await this.driver.$('button.settings-menu-toggle');
    await settingsButton.click();
});

When('I click on the Ver Tags', async function() {
    let verTagsElement = await this.driver.$('span.ember-power-select-status-icon');
    await verTagsElement.click();
});

When('I click on the Tag de prueba', async function() {
    let tagElement = await this.driver.$('li.ember-power-select-option');
    await tagElement.click();
});

When('I click on the Publish button', async function() {
    let publishButton = await this.driver.$('button.gh-btn-editor.darkgrey.gh-publish-trigger');
    await publishButton.click();
});

When('I click on the Continue button', async function() {
    let continueButton = await this.driver.$('button[data-test-button="continue"]');
    await continueButton.click();
});

When('I click on the Publish post, right now button', async function() {
    let publishButton = await this.driver.$('button[data-test-button="confirm-publish"]');
    await publishButton.click();
});

When('I click on the Back to dashboard link', async function() {
    let dashboardLink = await this.driver.$('a[href="#/dashboard/"]');
    await dashboardLink.waitForClickable();
    await dashboardLink.click();
});

When('I click on the Posts link', async function() {
    let postsLink = await this.driver.$('a[data-test-nav="posts"]');
    await postsLink.click();
});

Then('I verify that the text Tag de prueba is present', async function() {
    let tagElement = await this.driver.$('span.midgrey-l2.fw5');
    let text = await tagElement.getText();
    if (text !== 'Tag de prueba') {
        throw new Error('The text "Tag de prueba" is not present');
    }
});

When('I click on the linked post', async function() {
    let linkedPost = await this.driver.$('a[title="List posts tagged with \'Tag de prueba\'"]');
    await linkedPost.click();
});

When('I click on the post link', async function() {
    let postLink = await this.driver.$('a[href="#/editor/post/6649edfb700d4e31c06944a5/"]');
    await postLink.click();
});


When('I click on the View post link', async function() {
    let postViewLink = await this.driver.$('a.post-view-link');
    let url = await postViewLink.getAttribute('href');
    await this.driver.url(url);
});

Then('I verify that the tag link within the post is present', async function() {
    let tagLink = await this.driver.$('a.gh-article-tag[href="http://localhost:2368/tag/slug-del-tag/"]');
    let isPresent = await tagLink.isExisting();
    if (!isPresent) {
        throw new Error('The tag link within the post is not present');
    }
});






