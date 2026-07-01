import { test } from "@playwright/test";

import Onlinepage from "../Pages/Onlinepage";

test(
    "Validate Online Training Courses",
    async ({ page }) =>
{
    const onlinepage =
        new Onlinepage(page);

    await onlinepage.goto();

    await onlinepage.OnlineTrainingValidation();
});