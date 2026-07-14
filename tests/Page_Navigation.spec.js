import { test } from '@playwright/test';
import Page_Navigation from '../Pages/Page_Navigation';

test('Page_Navigation Validate', async ({ page }) => {

    const udemycourses = new Page_Navigation(page);

    await udemycourses.goto();

    await udemycourses.UdemycoursesValidation();

});