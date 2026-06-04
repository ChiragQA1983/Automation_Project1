import { expect } from '@playwright/test';

export default class BrokenPage {

  constructor(page) {

    this.page = page;

    this.brokenlinkerrorcode403 = page.getByRole('link', { name: 'Errorcode 403' });

    this.brokenlinkerrorcode400 = page.getByRole('link', { name: 'Errorcode 400' });

    this.headingtext = page.getByRole('heading', {
      name: '403 - Forbidden: Access is denied.'
    });

  }

  async goto() {

    await this.page.goto('https://testautomationpractice.blogspot.com/');

  }

  async Brokenpagelink403Validation() {

    await expect(this.brokenlinkerrorcode403).toBeVisible();

    await this.brokenlinkerrorcode403.click();

    await expect(this.page).toHaveURL(
      'http://www.deadlinkcity.com/error-page.asp?e=403'
    );

    await expect(this.headingtext)
      .toContainText(/403 - Forbidden: Access is denied./i);

    // Navigate back
    await this.page.goBack();

  }

  async Brokenpagelink400Validation() {

    await expect(this.brokenlinkerrorcode400).toBeVisible();

    await this.brokenlinkerrorcode400.click();

    await expect(this.page).toHaveURL(
      'http://www.deadlinkcity.com/error-page.asp?e=400'
    );

  }

}