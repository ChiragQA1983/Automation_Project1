import { expect } from '@playwright/test'

export default class DragAndDropPage
{
  constructor(page)
  {
    this.page = page;
    this.DraggableBtn = page.locator('#draggable');
    this.DroppableBtn = page.locator('#droppable');
  }

  async goto()
  {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  async DragandDropValidation()
  {
    await this.DraggableBtn.dragTo(this.DroppableBtn);

    await expect(this.DroppableBtn).toContainText('Dropped!');
  }
}